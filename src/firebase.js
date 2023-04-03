// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbbY21vz-DkdeSj6I9ReY4vHsHR5TlQ4c",
  authDomain: "ideen-373a4.firebaseapp.com",
  projectId: "ideen-373a4",
  storageBucket: "ideen-373a4.appspot.com",
  messagingSenderId: "232265446605",
  appId: "1:232265446605:web:24b023294a893595306584",
  measurementId: "G-Z3MB8R425Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Connect to your Firebase Realtime Database
const db = app.database()

export { db }