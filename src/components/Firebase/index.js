import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  getAuth,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

import { firebaseConfig } from "../../constants/firebaseConfig";

const FirebaseContext = createContext(null);

// initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// create a Provider (called AuthProvider on the site I used to snarf this code, namely https://dev.to/jps27cse/building-a-firebase-authentication-and-private-route-system-in-a-react-app-5203)
const FirebaseProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authValue = {
    createUser,
    user,
    loginUser,
    logOut,
    loading,
  };

  return (
    <FirebaseContext.Provider value={authValue}>
      {children}
    </FirebaseContext.Provider>
  );
};

FirebaseProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { FirebaseProvider };
