import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAQcE3-MInQ0cqfrEaAZc6ZlPYkidPijog",
  authDomain: "mezziusati-7f3af.firebaseapp.com",
  projectId: "mezziusati-7f3af",
  storageBucket: "mezziusati-7f3af.firebasestorage.app",
  messagingSenderId: "250616706905",
  appId: "1:250616706905:web:98669a6bc4e6a1a4cffe48"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);