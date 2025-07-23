// public/js/firebase-exports.ts
import { initializeApp } from 'https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js';
import { getStorage } from 'https://www.gstatic.com/firebasejs/12.0.0/firebase-storage.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/12.0.0/firebase-analytics.js';
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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export { app, analytics };
//# sourceMappingURL=firebase-exports.js.map