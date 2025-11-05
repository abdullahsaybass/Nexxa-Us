// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyA0U0j2H9aJ9Uo50MHS7eWcbGVH91a2TdQ",
  authDomain: "nexxa-35574.firebaseapp.com",
  projectId: "nexxa-35574",
  storageBucket: "nexxa-35574.firebasestorage.app",
  messagingSenderId: "366422856101",
  appId: "1:366422856101:web:8f3a06f880617b768ed84c",
  measurementId: "G-675QHD8DWY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// Import the functions you need from the SDKs you need


// Initialize Firebase
