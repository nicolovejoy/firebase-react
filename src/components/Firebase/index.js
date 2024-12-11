import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import React from "react";
import { firebaseConfig } from "../../constants/firebaseConfig";
import { AuthProvider } from "./AuthComponent";

const FirebaseContext = React.createContext(null);

// // initialize Firebase
const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const doCreateUserWithEmailAndPassword = (email, password) =>
//   auth.createUserWithEmailAndPassword(email, password);

// const doSignInWithEmailAndPassword = (email, password) =>
//   auth.signInWithEmailAndPassword(email, password);
// const doSignOut = () => auth.signOut();
// const doPasswordReset = (email) => auth.sendPasswordResetEmail(email);

// const doPasswordUpdate = (password) =>
//   auth.currentUser.updatePassword(password);

const FirebaseProvider = ({ children }) => {
  if (app && app.apps && !app.apps.length) {
    // app.initializeApp(firebaseConfig);

    // TODO: Likely need to fix this down the road for authorization auth to work right
    // Initialize Firebase Authentication and get a reference to the service
    const auth = getAuth(app);
    console.log(auth);
  }
  // const user = auth.currentUser;
  return (
    <FirebaseContext.Provider value={app}>{children}</FirebaseContext.Provider>
  );
};

export { FirebaseProvider };
