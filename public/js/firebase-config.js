import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
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
const app = initializeApp(firebaseConfig);
// Export the services you need
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const analytics = getAnalytics(app);
//# sourceMappingURL=firebase-config.js.map