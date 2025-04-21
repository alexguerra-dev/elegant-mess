'use client'
import { useEffect, useState } from 'react'
import { auth } from '../../../firebase/clientApp'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    User,
} from 'firebase/auth'

function SignInScreen() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState<null | User>(null)
    const [error, setError] = useState<string | null>(null)
    useEffect(() => {
        console.log('auth', auth)
        if (auth) {
            console.log('auth is defined')
        }

        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => unsubscribe()
    }, [])

    const handleSignUp = async () => {
        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                email,
                password,
            )
            setUser(userCredential.user)
            setError(null)
        } catch (err: any) {
            setError(err.message)
        }
    }

    const handleSignIn = async () => {
        try {
            const userCredential = await signInWithEmailAndPassword(
                auth,
                email,
                password,
            )
            setUser(userCredential.user)
            setError(null)
        } catch (err: any) {
            setError(err.message)
        }
    }

    const handleSignOut = async () => {
        try {
            await signOut(auth)
            setUser(null)
            setError(null)
        } catch (err: any) {
            setError(err.message)
        }
    }

    return (
        <div>
            {user ? (
                <div>
                    <h1>Welcome, {user.email || 'User'}</h1>
                    <button onClick={handleSignOut}>Sign out</button>
                </div>
            ) : (
                <div>
                    <h1>Elegant Mess Sign In</h1>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button onClick={handleSignIn}>Sign In</button>
                    <button onClick={handleSignUp}>Sign Up</button>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                </div>
            )}
        </div>
    )
}

export default SignInScreen
