import React, { createContext, useContext, useState, useEffect } from 'react'
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  sendPasswordResetEmail
} from 'firebase/auth'
import {
  doc, getDoc, setDoc, updateDoc, collection, addDoc, Timestamp
} from 'firebase/firestore'
import { auth, db } from '../firebase'
import { parseUserDoc, writeUserProfile, addReceipt } from '../utils/userSchema'

const AuthContext = createContext(null)

// Auth states matching iOS: loading | unauthenticated | needsProfile | authenticated
export function AuthProvider({ children }) {
  const [state, setState] = useState('loading')
  const [user, setUser] = useState(null)
  const [profile, setProfile] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (firebaseUser) => {
      setUser(firebaseUser)
      if (firebaseUser) {
        await loadProfile(firebaseUser.uid)
      } else {
        setProfile(null)
        setState('unauthenticated')
      }
    })
    return unsub
  }, [])

  async function loadProfile(uid) {
    try {
      const snap = await getDoc(doc(db, 'users', uid))
      if (snap.exists()) {
        const data = snap.data()
        setProfile(parseUserDoc(uid, data))
        // Update last active
        try { await updateDoc(doc(db, 'users', uid), { lastActiveAt: Timestamp.now() }) } catch {}
        setState('authenticated')
      } else {
        setState('needsProfile')
      }
    } catch {
      setState('needsProfile')
    }
  }

  async function signUp(email, password) {
    setError(null)
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password)
      setUser(result.user)
      setState('needsProfile')
    } catch (e) {
      setError(e.message)
    }
  }

  async function signIn(email, password) {
    setError(null)
    try {
      const result = await signInWithEmailAndPassword(auth, email, password)
      setUser(result.user)
      await loadProfile(result.user.uid)
    } catch (e) {
      setError(e.message)
    }
  }

  async function resetPassword(email) {
    setError(null)
    try {
      await sendPasswordResetEmail(auth, email)
      return true
    } catch (e) {
      setError(e.message)
      return false
    }
  }

  async function signOut() {
    try {
      await firebaseSignOut(auth)
      setUser(null)
      setProfile(null)
      setState('unauthenticated')
    } catch (e) {
      setError(e.message)
    }
  }

  // Save profile after signup — writes to same Firestore "users" collection as iOS
  // Accepts existing fields + new optional fields (firstName, lastName, mobileNumber, customerType)
  async function saveProfile({ displayName, gender, ageRange, nationality, firstName, lastName, mobileNumber, customerType }) {
    if (!user) return
    const profileData = {
      id: user.uid,
      email: user.email || '',
      displayName,
      gender,
      ageRange,
      nationality,
      createdAt: Timestamp.now(),
      lastActiveAt: Timestamp.now(),
    }
    // Only include new fields if provided — keeps backward compat with old UI
    if (firstName !== undefined) profileData.firstName = firstName
    if (lastName !== undefined) profileData.lastName = lastName
    if (mobileNumber !== undefined) profileData.mobileNumber = mobileNumber
    if (customerType !== undefined) profileData.customerType = customerType
    try {
      await setDoc(doc(db, 'users', user.uid), profileData, { merge: true })
      setProfile(parseUserDoc(user.uid, {
        ...profileData,
        createdAt: new Date(),
        lastActiveAt: new Date(),
      }))
      setState('authenticated')
    } catch (e) {
      setError(e.message)
    }
  }

  // Add a receipt and auto-calculate coupons
  async function addUserReceipt(receipt) {
    if (!user || !profile) return null
    try {
      const result = await addReceipt(db, user.uid, receipt, profile)
      // Reload profile to pick up changes
      await loadProfile(user.uid)
      return result
    } catch (e) {
      setError(e.message)
      return null
    }
  }

  // Log search — writes to same Firestore "search_events" collection as iOS
  async function logSearch({ query, results, mallId = 'global' }) {
    if (!profile) return
    try {
      await addDoc(collection(db, 'search_events'), {
        userId: profile.id,
        userEmail: profile.email,
        query,
        resultsCount: results.length,
        selectedStoreId: null,
        selectedStoreName: null,
        timestamp: Timestamp.now(),
        mallId
      })
    } catch {}
  }

  async function logStoreSelect({ query, store }) {
    if (!profile) return
    try {
      await addDoc(collection(db, 'search_events'), {
        userId: profile.id,
        userEmail: profile.email,
        query,
        resultsCount: 1,
        selectedStoreId: store.id,
        selectedStoreName: store.name,
        timestamp: Timestamp.now(),
        mallId: store.mallId
      })
    } catch {}
  }

  return (
    <AuthContext.Provider value={{
      state, user, profile, error,
      signUp, signIn, signOut, resetPassword, saveProfile, addUserReceipt,
      logSearch, logStoreSelect, setError
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
