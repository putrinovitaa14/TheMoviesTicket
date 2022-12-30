import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCSL8LbWGUi-0mitvzwErn7gvi6IGHZq4s",
    authDomain: "project-react-tmovies.firebaseapp.com",
    projectId: "project-react-tmovies",
    storageBucket: "project-react-tmovies.appspot.com",
    messagingSenderId: "260648536322",
    appId: "1:260648536322:web:90450f27c3e907fc0b9a1b",
    measurementId: "G-J6CG2ZM29D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);