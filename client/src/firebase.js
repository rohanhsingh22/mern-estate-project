// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-4f76f.firebaseapp.com",
  projectId: "mern-estate-4f76f",
  storageBucket: "mern-estate-4f76f.appspot.com",
  messagingSenderId: "223181327952",
  appId: "1:223181327952:web:6a65282ec4e72d5bdb4b55"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

