// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBONBjAUfFlpyNh0s_QZZ5H6ekTYe6DhWA",
  authDomain: "emart-8d9f5.firebaseapp.com",
  projectId: "emart-8d9f5",
  storageBucket: "emart-8d9f5.appspot.com",
  messagingSenderId: "534926225222",
  appId: "1:534926225222:web:9eb755852d1db85bbfbf47",
  measurementId: "G-NTKT6FEZCL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db=getFirestore(app);
export const auth=getAuth(app);
export const provider = new GoogleAuthProvider();