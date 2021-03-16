import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

export const firebaseConfig = {
  apiKey: "AIzaSyACqLpsJmSKmJ4Q8W0ZVt3G-zHKi2rbttg",
  authDomain: "fireship-stripe-c4bb4.firebaseapp.com",
  projectId: "fireship-stripe-c4bb4",
  storageBucket: "fireship-stripe-c4bb4.appspot.com",
  messagingSenderId: "1037316347174",
  appId: "1:1037316347174:web:74f8cfc95a41dc7de51de7",
  measurementId: "G-36TERT4TM5"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();