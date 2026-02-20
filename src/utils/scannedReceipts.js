/**
 * scannedReceipts.js — Firestore data layer for the receipt scanner
 *
 * Manages the /scanned_receipts/{docId} collection.
 * When a receipt is verified, it calls addReceipt() from userSchema.js
 * to update the user's receipts, shops, and coupons in a single flow.
 *
 * ── Collection schema ──────────────────────────────────────────────
 *
 * /scanned_receipts/{docId}
 * ├── userId        string     Firebase UID of the customer
 * ├── shopName      string     Store name extracted from receipt
 * ├── amount        number     Purchase amount in AED
 * ├── receiptDate   string     Date on the receipt (YYYY-MM-DD)
 * ├── scannedAt     timestamp  When the scan was submitted
 * ├── imageUrl      string     Cloud Storage URL of the receipt image
 * ├── status        string     "pending" | "verified" | "rejected"
 * ├── verifiedAt    timestamp  When status changed to verified (null until then)
 * ├── rejectedAt    timestamp  When status changed to rejected (null until then)
 * ├── rejectReason  string     Why it was rejected (empty until then)
 * └── couponResult  object     { newCoupons: string[], totalCoupons: number } set on verify
 *
 * ── Status flow ────────────────────────────────────────────────────
 *
 *   pending  ──▶  verified  (triggers user update + coupon generation)
 *      │
 *      └──────▶  rejected   (no side effects on user doc)
 */

import {
  collection, doc, addDoc, getDoc, getDocs, updateDoc,
  query, where, orderBy, Timestamp
} from 'firebase/firestore'
import { addReceipt, parseUserDoc } from './userSchema'

const COLLECTION = 'scanned_receipts'

// ── Create ──────────────────────────────────────────────────────────

/**
 * Submit a new scanned receipt. Called by the scanner UI after capture.
 *
 * @param {Firestore} db
 * @param {object}    data - { userId, shopName, amount, receiptDate, imageUrl }
 * @returns {string}  The new document ID
 */
export async function submitScannedReceipt(db, { userId, shopName, amount, receiptDate, imageUrl }) {
  if (!userId) throw new Error('userId is required')
  if (!amount || Number(amount) <= 0) throw new Error('amount must be a positive number')

  const docRef = await addDoc(collection(db, COLLECTION), {
    userId,
    shopName: shopName || '',
    amount: Number(amount),
    receiptDate: receiptDate || new Date().toISOString().split('T')[0],
    scannedAt: Timestamp.now(),
    imageUrl: imageUrl || '',
    status: 'pending',
    verifiedAt: null,
    rejectedAt: null,
    rejectReason: '',
    couponResult: null,
  })

  return docRef.id
}

// ── Read ────────────────────────────────────────────────────────────

/**
 * Get all scanned receipts for a specific user, newest first.
 */
export async function getReceiptsForUser(db, userId) {
  const q = query(
    collection(db, COLLECTION),
    where('userId', '==', userId),
    orderBy('scannedAt', 'desc')
  )
  const snap = await getDocs(q)
  return snap.docs.map(d => ({ id: d.id, ...d.data() }))
}

/**
 * Get all pending receipts (for admin review queue).
 */
export async function getPendingReceipts(db) {
  const q = query(
    collection(db, COLLECTION),
    where('status', '==', 'pending'),
    orderBy('scannedAt', 'asc')
  )
  const snap = await getDocs(q)
  return snap.docs.map(d => ({ id: d.id, ...d.data() }))
}

/**
 * Get a single scanned receipt by ID.
 */
export async function getScannedReceipt(db, receiptId) {
  const snap = await getDoc(doc(db, COLLECTION, receiptId))
  if (!snap.exists()) return null
  return { id: snap.id, ...snap.data() }
}

// ── Verify ──────────────────────────────────────────────────────────

/**
 * Verify a scanned receipt. This is the critical path:
 *
 * 1. Validate the receipt is still pending
 * 2. Read the user's current profile (need existing receipts to diff coupons)
 * 3. Call addReceipt() to update user's receipts, shops, and coupons
 * 4. Mark the scanned_receipt as verified with the coupon result
 *
 * @param {Firestore} db
 * @param {string}    receiptId  - The scanned_receipts doc ID
 * @param {object}    overrides  - Optional { shopName, amount, receiptDate } if admin corrected values
 * @returns {object}  { newCoupons: string[], totalCoupons: number }
 */
export async function verifyReceipt(db, receiptId, overrides = {}) {
  // 1. Load the scanned receipt
  const receiptDoc = await getScannedReceipt(db, receiptId)
  if (!receiptDoc) throw new Error(`Receipt ${receiptId} not found`)
  if (receiptDoc.status !== 'pending') {
    throw new Error(`Receipt ${receiptId} is already ${receiptDoc.status}`)
  }

  // Allow admin to correct extracted values before verify
  const shopName = overrides.shopName || receiptDoc.shopName
  const amount = Number(overrides.amount || receiptDoc.amount)
  const receiptDate = overrides.receiptDate || receiptDoc.receiptDate

  // 2. Load user's current profile to diff coupon counts
  const userSnap = await getDoc(doc(db, 'users', receiptDoc.userId))
  if (!userSnap.exists()) throw new Error(`User ${receiptDoc.userId} not found`)
  const userData = parseUserDoc(receiptDoc.userId, userSnap.data())

  // 3. Update user: receipts array, shops array, couponsGiven, couponNumbers
  const couponResult = await addReceipt(db, receiptDoc.userId, {
    shopName,
    amount,
    receiptDate,
  }, userData)

  // 4. Mark scanned receipt as verified
  await updateDoc(doc(db, COLLECTION, receiptId), {
    status: 'verified',
    shopName,
    amount,
    receiptDate,
    verifiedAt: Timestamp.now(),
    couponResult: {
      newCoupons: couponResult.newCoupons,
      totalCoupons: couponResult.totalCoupons,
    },
  })

  return couponResult
}

// ── Reject ──────────────────────────────────────────────────────────

/**
 * Reject a scanned receipt. No side effects on the user document.
 *
 * @param {Firestore} db
 * @param {string}    receiptId
 * @param {string}    reason - Why the receipt was rejected
 */
export async function rejectReceipt(db, receiptId, reason = '') {
  const receiptDoc = await getScannedReceipt(db, receiptId)
  if (!receiptDoc) throw new Error(`Receipt ${receiptId} not found`)
  if (receiptDoc.status !== 'pending') {
    throw new Error(`Receipt ${receiptId} is already ${receiptDoc.status}`)
  }

  await updateDoc(doc(db, COLLECTION, receiptId), {
    status: 'rejected',
    rejectedAt: Timestamp.now(),
    rejectReason: reason,
  })
}
