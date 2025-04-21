import { initializeApp, getApps } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const clientCredentials = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}
console.log('clientCredentials', clientCredentials)
// Initialize Firebase
let firebaseApp: any
if (!getApps().length) {
    console.log('Initializing Firebase app')
    firebaseApp = initializeApp(clientCredentials)
} else {
    firebaseApp = getApps()[0]
}

export const auth = getAuth(firebaseApp)
export const firestore = getFirestore(firebaseApp)
export default firebaseApp
