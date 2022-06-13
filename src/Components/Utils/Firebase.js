// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCt3Y9niNylum1jBCS3751VLImTp3h-MAw",
  authDomain: "la-film-boutique.firebaseapp.com",
  projectId: "la-film-boutique",
  storageBucket: "la-film-boutique.appspot.com",
  messagingSenderId: "767716637778",
  appId: "1:767716637778:web:c4ef31ec287b69c059338b",
  measurementId: "G-7FVKN3R7EP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export default db;