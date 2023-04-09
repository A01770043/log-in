import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from "firebase/app";
import 'firebase/analytics'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/auth'

Vue.config.productionTip = false

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
const app = initializeApp(firebaseConfig);
export const db = firebase.firestore();

new Vue({
  router,
  store,
  vuetify,
  firebase,
  render: h => h(App)
}).$mount('#app')
