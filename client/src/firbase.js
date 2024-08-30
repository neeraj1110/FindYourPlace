// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import dotenv from "dotenv";
// dotenv.config();
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  //   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  apiKey: "AIzaSyAHBapaGNjhTkhPskXIUE_zlxPNK-JEFtk",
  authDomain: "findyourplace1110.firebaseapp.com",
  projectId: "findyourplace1110",
  storageBucket: "findyourplace1110.appspot.com",
  messagingSenderId: "843362489643",
  appId: "1:843362489643:web:d1ce563bd5c7e63b55616e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
