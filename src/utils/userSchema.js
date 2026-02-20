/**
 * userSchema.js — Shared user document helpers for Mall Explorer
 *
 * Single source of truth for the Firestore /users/{uid} schema.
 * Used by BOTH the primary app (/src) and secondary app (/mall-explorer-web/src).
 *
 * RULES:
 *  - All new fields are OPTIONAL with safe defaults
 *  - Existing fields are NEVER removed or renamed
 *  - merge: true is always used so partial writes don't erase other fields
 *  - Coupon count is derived (floor of totalSpend / 200 AED)
 */

import { doc, setDoc, updateDoc, arrayUnion, Timestamp } from 'firebase/firestore'

// ── Schema reference (for documentation — Firestore is schemaless) ──────────
//
// /users/{uid}
// ├── email              string        (existing)
// ├── displayName        string        (existing)
// ├── gender             string        (existing)
// ├── ageRange           string        (existing)
// ├── nationality        string        (existing)
// ├── createdAt          timestamp     (existing)
// ├── lastActiveAt       timestamp     (existing)
// │
// ├── firstName          string        (NEW — optional, default "")
// ├── lastName           string        (NEW — optional, default "")
// ├── mobileNumber       string        (NEW — optional, default "")
// ├── customerType       string        (NEW — "visitor" | "resident", default "")
// ├── shops              string[]      (NEW — shop names bought from, default [])
// ├── receipts           object[]      (NEW — each: {shopName, amount, receiptDate, uploadedAt})
// ├── couponsGiven       number        (NEW — floor(totalSpend / 200), default 0)
// └── couponNumbers      string[]      (NEW — assigned coupon IDs, default [])

// ── Safe defaults for reading old documents that lack new fields ────────────

export const USER_DEFAULTS = {
  email: '',
  displayName: '',
  gender: '',
  ageRange: '',
  nationality: '',
  createdAt: null,
  lastActiveAt: null,
  // New fields
  firstName: '',
  lastName: '',
  mobileNumber: '',
  customerType: '',      // "visitor" | "resident" | "" (not yet set)
  shops: [],
  receipts: [],          // [{shopName, amount, receiptDate, uploadedAt}]
  couponsGiven: 0,
  couponNumbers: [],
}

// ── Read helper: merge Firestore doc data with safe defaults ────────────────

/**
 * Safely parse a Firestore user document, filling missing fields with defaults.
 * Call this everywhere you read a user doc so old users don't break the UI.
 */
export function parseUserDoc(uid, data) {
  return {
    id: uid,
    ...USER_DEFAULTS,
    ...data,
    // Normalize timestamps to JS Dates for the UI layer
    createdAt: data.createdAt?.toDate?.() ?? (data.createdAt ? new Date(data.createdAt) : null),
    lastActiveAt: data.lastActiveAt?.toDate?.() ?? (data.lastActiveAt ? new Date(data.lastActiveAt) : new Date()),
    // Ensure arrays are always arrays (guards against corrupt data)
    shops: Array.isArray(data.shops) ? data.shops : [],
    receipts: Array.isArray(data.receipts) ? data.receipts : [],
    couponNumbers: Array.isArray(data.couponNumbers) ? data.couponNumbers : [],
    couponsGiven: typeof data.couponsGiven === 'number' ? data.couponsGiven : 0,
  }
}

// ── Write helpers ───────────────────────────────────────────────────────────

/**
 * Create or update a user's core profile fields.
 * Uses merge: true — will NOT erase fields not included in `fields`.
 */
export async function writeUserProfile(db, uid, fields) {
  const ref = doc(db, 'users', uid)
  await setDoc(ref, {
    ...fields,
    lastActiveAt: Timestamp.now(),
  }, { merge: true })
}

/**
 * Update only specific fields on an existing user doc.
 * Lighter than writeUserProfile — does NOT create the doc if missing.
 */
export async function patchUser(db, uid, fields) {
  const ref = doc(db, 'users', uid)
  await updateDoc(ref, {
    ...fields,
    lastActiveAt: Timestamp.now(),
  })
}

// ── Receipt + Coupon logic ──────────────────────────────────────────────────

const AED_PER_COUPON = 200

/**
 * Generate a unique coupon ID.
 * Format: ME-{timestamp_base36}-{random_4chars}  e.g. "ME-lz4f8k-a7x2"
 */
export function generateCouponId() {
  const ts = Date.now().toString(36)
  const rand = Math.random().toString(36).substring(2, 6)
  return `ME-${ts}-${rand}`.toUpperCase()
}

/**
 * Calculate how many total coupons a user has earned from their receipts.
 */
export function calculateCouponsEarned(receipts) {
  const totalSpend = receipts.reduce((sum, r) => sum + (Number(r.amount) || 0), 0)
  return Math.floor(totalSpend / AED_PER_COUPON)
}

/**
 * Add a receipt to a user and recalculate coupons.
 *
 * This is the ONLY function that should create new coupons.
 * It compares earned vs already-given and generates the difference.
 *
 * @param {Firestore} db        - Firestore instance
 * @param {string}    uid       - User's Firebase UID
 * @param {object}    receipt   - { shopName: string, amount: number, receiptDate: string }
 * @param {object}    existing  - Current user data (from parseUserDoc) so we can diff coupons
 * @returns {object}  { newCoupons: string[], totalCoupons: number }
 */
export async function addReceipt(db, uid, receipt, existing) {
  const receiptEntry = {
    shopName: receipt.shopName,
    amount: Number(receipt.amount) || 0,
    receiptDate: receipt.receiptDate || new Date().toISOString().split('T')[0],
    uploadedAt: new Date().toISOString(),
  }

  // Build the updated receipts list to calculate new coupon count
  const updatedReceipts = [...(existing.receipts || []), receiptEntry]
  const totalEarned = calculateCouponsEarned(updatedReceipts)
  const alreadyGiven = existing.couponsGiven || 0
  const newCount = Math.max(0, totalEarned - alreadyGiven)

  // Generate new coupon IDs
  const newCoupons = Array.from({ length: newCount }, () => generateCouponId())

  // Single atomic-ish write using arrayUnion (no read-modify-write race)
  const ref = doc(db, 'users', uid)
  const update = {
    receipts: arrayUnion(receiptEntry),
    couponsGiven: totalEarned,
    lastActiveAt: Timestamp.now(),
  }

  // Add shop to shops array if it's new
  if (receipt.shopName) {
    update.shops = arrayUnion(receipt.shopName)
  }

  // Add new coupon numbers
  if (newCoupons.length > 0) {
    update.couponNumbers = arrayUnion(...newCoupons)
  }

  await updateDoc(ref, update)

  return { newCoupons, totalCoupons: totalEarned }
}
