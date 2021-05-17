import firebase from "firebase/app";
import { auth } from "./firebaseConfig";

const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

// 로그인 함수 내보내기
const googleSignIn = () => auth.signInWithPopup(googleProvider);

export default googleSignIn;
