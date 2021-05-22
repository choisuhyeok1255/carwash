import firebase from "firebase/app";

const facebookProvider = new firebase.auth.FacebookAuthProvider();

export const facebookSignIn = () =>
  firebase.auth().signInWithPopup(facebookProvider);
