import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA1vna6scTs6n7mCb_49wzJ98EEZuS_v5E",
    authDomain: "schedulemywork-509d1.firebaseapp.com",
    projectId: "schedulemywork-509d1",
    storageBucket: "schedulemywork-509d1.appspot.com",
    messagingSenderId: "184660486126",
    appId: "1:184660486126:web:32bea13f5eedd7614790ff",
    measurementId: "G-THDDCTKQD5"
  };

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
 
export default db;