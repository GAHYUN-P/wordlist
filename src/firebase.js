// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBktezC-ffMKNdGNAjEBMSW8uE_zJZI7N4",
  authDomain: "wordlist-1aea5.firebaseapp.com",
  projectId: "wordlist-1aea5",
  storageBucket: "wordlist-1aea5.appspot.com",
  messagingSenderId: "87569018958",
  appId: "1:87569018958:web:c8d241a819ce8ad4ba531f",
  measurementId: "G-N3MWK414LM"
};

initializeApp(firebaseConfig);
// Initialize Firebase
// const app = initializeApp(firebaseConfig);

export const db = getFirestore();