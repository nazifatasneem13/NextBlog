// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-b2afe.firebaseapp.com",
  projectId: "blog-b2afe",
  storageBucket: "blog-b2afe.appspot.com",
  messagingSenderId: "1016803278260",
  appId: "1:1016803278260:web:9a85cc102ce14cc36dc6e1",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
