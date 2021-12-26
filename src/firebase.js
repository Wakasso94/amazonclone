import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA62UpMK61wVf8JJlFVCNGxEsVg3XYjThw",
  authDomain: "clone-5fec7.firebaseapp.com",
  projectId: "clone-5fec7",
  storageBucket: "clone-5fec7.appspot.com",
  messagingSenderId: "368903713452",
  appId: "1:368903713452:web:9bf7452e2a9e729be02509",
  measurementId: "G-55BJX1HS92"
};
  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};