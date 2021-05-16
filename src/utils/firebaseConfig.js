import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_FIREBASE_APP_KEY}`,
  authDomain: `${process.env.REACT_APP_FIREBASE_AUTHDOMAIN_KEY}`,
  projectId: `${process.env.REACT_APP_FIREBASE_PROJECTID_KEY}`,
  storageBucket: `${process.env.REACT_APP_FIREBASE_STORAGEBUCKET_KEY}`,
  messagingSenderId: `${process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID_KEY}`,
  appId: `${process.env.REACT_APP_FIREBASE_APPID_KEY}`,
  measurementId: `${process.env.REACT_APP_FIREBASE_MEASUREMENTID_KEY}`,
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebaseConfig;
