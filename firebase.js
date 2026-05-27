// Firebase config for Aman Life OS
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAw9K2jP0sV9eCz3Q1Wg2SUgu2T6KNpslo",
  authDomain: "aman-os-bb5a2.firebaseapp.com",
  projectId: "aman-os-bb5a2",
  storageBucket: "aman-os-bb5a2.firebasestorage.app",
  messagingSenderId: "115122310579",
  appId: "1:115122310579:web:94508ccef1a074b9a98fc6"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export { doc, setDoc, getDoc, onSnapshot, signInWithPopup, onAuthStateChanged, signOut };
