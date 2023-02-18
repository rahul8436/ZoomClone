// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJ3yA9z_-xNHQHzkS51m8Usrb4zOt2bxg",
  authDomain: "zoom-clone-a584e.firebaseapp.com",
  projectId: "zoom-clone-a584e",
  storageBucket: "zoom-clone-a584e.appspot.com",
  messagingSenderId: "643664303727",
  appId: "1:643664303727:web:51169f2617eeefebbb5f9a",
  measurementId: "G-3GYCV6JC3C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const meetingsRef = collection(firebaseDB, "meetings");