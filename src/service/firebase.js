// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeEMMap8LzB3hMWk11SkmteYw15igy6OI",
  authDomain: "react-firebase-coder.firebaseapp.com",
  projectId: "react-firebase-coder",
  storageBucket: "react-firebase-coder.appspot.com",
  messagingSenderId: "591129166358",
  appId: "1:591129166358:web:e437d3618447ccd0d7ab37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)