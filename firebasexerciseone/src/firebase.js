// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAukzrgb6GLHoXcV5gJ_2Jb7dmde6zMXfQ",
  authDomain: "fir-exercise-one-ae7c6.firebaseapp.com",
  projectId: "fir-exercise-one-ae7c6",
  storageBucket: "fir-exercise-one-ae7c6.appspot.com",
  messagingSenderId: "264567778464",
  appId: "1:264567778464:web:7037302b6632969125adc5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const notesCollection = collection(db, "notes");
