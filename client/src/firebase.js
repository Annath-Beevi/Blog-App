// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-app-94ba6.firebaseapp.com",
  projectId: "blog-app-94ba6",
  storageBucket: "blog-app-94ba6.appspot.com",
  messagingSenderId: "101743235313",
  appId: "1:101743235313:web:5f8a7dfe54072673c5d950"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);