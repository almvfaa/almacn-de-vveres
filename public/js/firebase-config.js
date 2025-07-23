// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-YuabrveJSbZM9Tssk6PgsVG81EYTNYI",
  authDomain: "almacen-de-viveres---cgj.firebaseapp.com",
  projectId: "almacen-de-viveres---cgj",
  storageBucket: "almacen-de-viveres---cgj.appspot.com",
  messagingSenderId: "792262146984",
  appId: "1:792262146984:web:8a46db38ddf694c5487b9d",
  measurementId: "G-J881HHYKXM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export the services you need
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export { app, analytics };
