import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './main.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDT9XDh8Z_AYSrDqw1GmZG28ef4WZYLll4",
  authDomain: "sbcomputing-eb2b9.firebaseapp.com",
  projectId: "sbcomputing-eb2b9",
  storageBucket: "sbcomputing-eb2b9.appspot.com",
  messagingSenderId: "576407141995",
  appId: "1:576407141995:web:6532db40b4fd393037fb2e"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
