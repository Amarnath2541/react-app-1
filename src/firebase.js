import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Firebase config (same for both admin and user as provided)
const firebaseConfig = {
  apiKey: "AIzaSyAenZM2a6-m_DEKnHQlN2LwVyqNFGQxffo",
  authDomain: "chat-31054.firebaseapp.com",
  projectId: "chat-31054",
  storageBucket: "chat-31054.firebasestorage.app",
  messagingSenderId: "1029399179803",
  appId: "1:1029399179803:web:48c68805ab298890087ebe",
  measurementId: "G-3FX3TMX2Q0"
};

// Initialize User Firebase app
const userApp = initializeApp(firebaseConfig, "userApp");
const userAuth = getAuth(userApp);
const userDb = getFirestore(userApp);
const userStorage = getStorage(userApp);

// Initialize Admin Firebase app (using same config)
const adminApp = initializeApp(firebaseConfig, "adminApp");
const adminAuth = getAuth(adminApp);
const adminDb = getFirestore(adminApp);
const adminStorage = getStorage(adminApp);

export {
  userApp,
  userAuth,
  userDb,
  userStorage,
  adminApp,
  adminAuth,
  adminDb,
  adminStorage
};
