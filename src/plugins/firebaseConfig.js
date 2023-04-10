// Import the functions you need from the SDKs you need

import firebase from "firebase/compat"
import "firebase/firestore"
import "firebase/auth"
import "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbbY21vz-DkdeSj6I9ReY4vHsHR5TlQ4c",
  authDomain: "ideen-373a4.firebaseapp.com",
  databaseURL: "https://ideen-373a4-default-rtdb.firebaseio.com",
  projectId: "ideen-373a4",
  storageBucket: "ideen-373a4.appspot.com",
  messagingSenderId: "232265446605",
  appId: "1:232265446605:web:24b023294a893595306584",
  measurementId: "G-Z3MB8R425Z"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
export const db = firebase.firestore