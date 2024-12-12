import React, { useState, useEffect, createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { firebaseConfig } from "../../constants/firebaseConfig";

const FirebaseContext = React.createContext(null);

// // initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const doCreateUserWithEmailAndPassword = (email, password) =>
//   auth.createUserWithEmailAndPassword(email, password);

// const doSignInWithEmailAndPassword = (email, password) =>
//   auth.signInWithEmailAndPassword(email, password);
// const doSignOut = () => auth.signOut();
// const doPasswordReset = (email) => auth.sendPasswordResetEmail(email);

// const doPasswordUpdate = (password) =>
//   auth.currentUser.updatePassword(password);

const FirebaseProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const signIn = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error(error);
    }
  };

  const signUp = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error(error);
    }
  };

  const signOutUser = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error(error);
    }
  };

  const value = { user, loading, signIn, signUp, signOut: signOutUser };
  return (
    <FirebaseContext.Provider value={value}>
      {children}
    </FirebaseContext.Provider>
  );
};

// useFirebaseAuth hook
const useFirebaseAuth = () => {
  return useContext(FirebaseContext);
};

export { FirebaseProvider, useFirebaseAuth };
