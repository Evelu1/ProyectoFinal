// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration for Creative
const firebaseConfig = {
  apiKey: "AIzaSyDEN-vVXlxQjMQPOwhM0eN04fPPasiMMyY",
  authDomain: "creative-81ed0.firebaseapp.com",
  projectId: "creative-81ed0",
  storageBucket: "creative-81ed0.appspot.com",
  messagingSenderId: "186964481749",
  appId: "1:186964481749:web:ab46c00d20863d84c5345c",
  measurementId: "G-QL85XYXCN6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { db, storage, auth, analytics };
