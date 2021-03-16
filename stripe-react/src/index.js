import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import { FirebaseAppProvider } from 'reactfire';

export const stripePromise = loadStripe(
  'pk_test_51ISmwAJx5vnwvhlRqmUT6JeTcByw2vi9lyDS3IWtSvWHeRpotGDCmnclluyjb72zcYIOrto8Jh2ILxyhgpSeGFTK00n3xFFEU8'
);

export const firebaseConfig = {
  apiKey: "AIzaSyACqLpsJmSKmJ4Q8W0ZVt3G-zHKi2rbttg",
  authDomain: "fireship-stripe-c4bb4.firebaseapp.com",
  projectId: "fireship-stripe-c4bb4",
  storageBucket: "fireship-stripe-c4bb4.appspot.com",
  messagingSenderId: "1037316347174",
  appId: "1:1037316347174:web:74f8cfc95a41dc7de51de7",
  measurementId: "G-36TERT4TM5"
};

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <Elements stripe={stripePromise}>
        <App />
      </Elements>
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
