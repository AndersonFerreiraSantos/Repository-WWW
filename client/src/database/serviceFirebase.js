import * as firebaseAuth from 'firebase/auth'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useNavigate } from "react-router-dom"


import { auth } from './firebase'

const getLoggerUser = async () => {
    return new Promise((resolve) => {
        firebaseAuth.onAuthStateChanged(auth, (user) => {
            resolve(user)
        })
    });
}

const googleAuthentication = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
    window.location.reload();
}

const logout = async () => {
    firebaseAuth.signOut(auth)
    window.location.reload();
}

const method = {
    googleAuthentication,
    getLoggerUser,
    logout
}

export default method