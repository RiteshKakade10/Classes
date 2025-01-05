// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAipraemOu-yCG67Npg_p7wOu2UFTWmt7M",
    authDomain: "growhubitservices.firebaseapp.com",
    projectId: "growhubitservices",
    storageBucket: "growhubitservices.firebasestorage.app",
    messagingSenderId: "9239881771",
    appId: "1:9239881771:web:3df71315d59f0af385626e",
    measurementId: "G-KLTSXP0KXY"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);