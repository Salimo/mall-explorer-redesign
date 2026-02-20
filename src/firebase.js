import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// Firebase config — same project as the iOS app (mall-explorer-eb31b)
const firebaseConfig = {
  apiKey: "AIzaSyB818FLJud_A3JagEgkHg_zL8gIyPsShBo",
  authDomain: "mall-explorer-eb31b.firebaseapp.com",
  projectId: "mall-explorer-eb31b",
  storageBucket: "mall-explorer-eb31b.firebasestorage.app",
  messagingSenderId: "72238185590",
  appId: "1:72238185590:web:49d0a68e49cfce34bbb357",
  measurementId: "G-BNG80J77KK"
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
export default app
