import * as firebaseAuth from 'firebase/auth'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

import { auth } from './firebase'

const getLoggerUser = async () => {
    return new Promise((resolve) => {
        firebaseAuth.onAuthStateChanged(auth, (user) => {
            resolve(user)
        })
    });
}

const googleAuthentication = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
}

const logout = async (navigate) => {
    return new Promise((resolve) => {
        firebaseAuth.signOut(auth)
        navigate('/')
        window.location.reload();
        resolve();
    });
}

const method = {
    googleAuthentication,
    getLoggerUser,
    logout
}

export default method