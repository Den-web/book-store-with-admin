import { 
    createUserWithEmailAndPassword, 
    GoogleAuthProvider, 
    onAuthStateChanged, 
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut
 } from "firebase/auth";
import { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../firebase/firebase.config.js";

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext)
}

export const googleProvider = new GoogleAuthProvider();

export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null)
    const [loading, setLoading] = useState(true);

    const registerUser = async (email, password) => {
        return await createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = async (email, password) => {
        return await signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle = async () => {
        return await signInWithPopup(auth, googleProvider)
    }

    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);

            if(user) {
                 const {email, displayName, photoUrl } = user;
                 const userData = {
                    email, username: displayName, photo: photoUrl
                 }
            }
        })

        return () => unsubscribe();
    }, [])

    const value = {
        currentUser,
        registerUser,
        loginUser,
        signInWithGoogle,
        logOut
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
