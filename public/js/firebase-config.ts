import { initializeApp, FirebaseApp } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";
import { getFirestore, Firestore } from "firebase/firestore";
import { getStorage, FirebaseStorage } from "firebase/storage";
import { getAnalytics, Analytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-YuabrveJSbZM9Tssk6PgsVG81EYTNYI",
  authDomain: "almacen-de-viveres---cgj.firebaseapp.com",
  projectId: "almacen-de-viveres---cgj",
  storageBucket: "almacen-de-viveres---cgj.firebasestorage.app",
  messagingSenderId: "792262146984",
  appId: "1:792262146984:web:8a46db38ddf694c5487b9d",
  measurementId: "G-J881HHYKXM"
};

// Initialize Firebase
const app: FirebaseApp = initializeApp(firebaseConfig);

// Export the services you need
export const db: Firestore = getFirestore(app);
export const auth: Auth = getAuth(app);
export const storage: FirebaseStorage = getStorage(app);
export const analytics: Analytics = getAnalytics(app);
