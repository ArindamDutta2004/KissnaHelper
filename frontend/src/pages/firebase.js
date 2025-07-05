import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDFBwyMVMOgimPT9dMln49SeuFggRbUbbs",
    authDomain: "kissanhelper-bcb48.firebaseapp.com",
    projectId: "kissanhelper-bcb48",
    storageBucket: "kissanhelper-bcb48.firebasestorage.app",
    messagingSenderId: "314170073513",
    appId: "1:314170073513:web:963d70ef965f6383f664b8",
    measurementId: "G-KMGLF2CEF0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup };
