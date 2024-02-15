import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
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


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db