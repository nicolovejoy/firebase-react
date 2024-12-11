import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import React from "react";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_ID,
};

const FirebaseContext = React.createContext(null);

// // initialize Firebase
const app = initializeApp(firebaseConfig);
// // Initialize Firebase Authentication and get a reference to the service
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
    app.initializeApp(firebaseConfig);
    // TODO: Likely need to fix this down the road for authorization auth to work right
    const auth = getAuth(app);
  }
  // const user = auth.currentUser;
  return (
    <FirebaseContext.Provider value={app}>{children}</FirebaseContext.Provider>
  );
};

export { FirebaseProvider };
