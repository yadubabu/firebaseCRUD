// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAke1xk--l6BxCPK6ji25k6d6jZJMdPmUA",
  authDomain: "userscrud-18b84.firebaseapp.com",
  projectId: "userscrud-18b84",
  storageBucket: "userscrud-18b84.appspot.com",
  messagingSenderId: "676737644860",
  appId: "1:676737644860:web:b74af1932128b1a95fc639",
  measurementId: "G-Q7RDD1Y12W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
