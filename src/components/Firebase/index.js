import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import React from "react";
import { firebaseConfig } from "../../constants/firebaseConfig";

const FirebaseContext = React.createContext(null);

// initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// // Initialize Firebase Authentication and get a reference to the service
// const doCreateUserWithEmailAndPassword = (email, password) =>
//   auth.createUserWithEmailAndPassword(email, password);

// const doSignInWithEmailAndPassword = (email, password) =>
//   auth.signInWithEmailAndPassword(email, password);
// const doSignOut = () => auth.signOut();
// const doPasswordReset = (email) => auth.sendPasswordResetEmail(email);

// const doPasswordUpdate = (password) =>
//   auth.currentUser.updatePassword(password);

const FirebaseProvider = ({ children }) => {
  return (
    <FirebaseContext.Provider value={app}>{children}</FirebaseContext.Provider>
  );
};

export { FirebaseProvider };
