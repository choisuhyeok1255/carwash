// Firebase 앱 모듈 불러오기
import firebase from "firebase/app";
// 데이터베이스, 인증 모듈 불러오기
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_FIREBASE_APP_KEY}`,
  authDomain: `${process.env.REACT_APP_FIREBASE_AUTHDOMAIN_KEY}`,
  projectId: `${process.env.REACT_APP_FIREBASE_PROJECTID_KEY}`,
  storageBucket: `${process.env.REACT_APP_FIREBASE_STORAGEBUCKET_KEY}`,
  messagingSenderId: `${process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID_KEY}`,
  appId: `${process.env.REACT_APP_FIREBASE_APPID_KEY}`,
  measurementId: `${process.env.REACT_APP_FIREBASE_MEASUREMENTID_KEY}`,
};

// Firebase 앱 초기화
export const firebaseInit = firebase.initializeApp(firebaseConfig);

// Firebase 인증, 데이터베이스 객체 생성 (내보내기)
export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();

// Firebase 모듈 기본 내보내기
export default firebase;
