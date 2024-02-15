// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBz2DLnSmnXbtH6nsYCA4KPM29xim6jR-o",
  authDomain: "todolistdb-749ab.firebaseapp.com",
  projectId: "todolistdb-749ab",
  storageBucket: "todolistdb-749ab.appspot.com",
  messagingSenderId: "637080206434",
  appId: "1:637080206434:web:ca6e187262d18e51dc653b",
  measurementId: "G-XN210DEBYG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);