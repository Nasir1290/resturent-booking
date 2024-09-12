// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDZrJPyp7v6Kr39ptftnhODu0FG9icxoRI",
    authDomain: "restaurent-managements.firebaseapp.com",
    projectId: "restaurent-managements",
    storageBucket: "restaurent-managements.appspot.com",
    messagingSenderId: "884043275681",
    appId: "1:884043275681:web:d9c134f8ecc99d3761bfe0",
    measurementId: "G-GP29HR5B0J"
};

// Initialize Firebase
// const analytics = getAnalytics(app);
const app = initializeApp(firebaseConfig);
export default app;