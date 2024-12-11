// import app from "firebase/app";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Or other Firebase services you need
const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};

const app = initializeApp(config);
// const auth = getAuth(app);

class Firebase {
  constructor() {
    app.initializeApp(config);
  }
}

export default Firebase;

// Initialize Firebase
// const app = initializeApp(config);
