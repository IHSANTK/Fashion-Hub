import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBhZ4OhFpghJm1krMDQZAt1BLmgNk9PJ6Y",
    authDomain: "user-management-system-abcfe.firebaseapp.com",
    projectId: "user-management-system-abcfe",
    storageBucket: "user-management-system-abcfe.firebasestorage.app",
    messagingSenderId: "17727748838",
    appId: "1:17727748838:web:0c544d9375068b312ed927",
    measurementId: "G-XFB859CS52"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export default app;
