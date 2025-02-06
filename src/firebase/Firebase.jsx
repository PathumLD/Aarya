// src/firebase/Firebase.jsx
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyClDjpy3HF8cACDAuShG39yo3Gqly1lKmQ",
  authDomain: "aarya-website.firebaseapp.com",
  projectId: "aarya-website",
  storageBucket: "aarya-website.firebasestorage.app",
  messagingSenderId: "854995233649",
  appId: "1:854995233649:web:2a1c01285a95f02ae3e4d0",
  measurementId: "G-7QN75SNWPG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services with error handling
const initializeFirebaseServices = () => {
  let analytics = null;
  let db = null;
  let storage = null;

  try {
    if (typeof window !== "undefined") {
      analytics = getAnalytics(app);
    }
    db = getFirestore(app);
    storage = getStorage(app);

    // Create initial collections if they don't exist
    const initializeCollections = async () => {
      try {
        const collections = ["projects"];
        for (const collectionName of collections) {
          const collectionRef = collection(db, collectionName);
          const docs = await getDocs(collectionRef);
          if (docs.empty) {
            console.log(`Collection ${collectionName} is ready to use`);
          }
        }
      } catch (error) {
        console.error("Error initializing collections:", error);
      }
    };

    initializeCollections();
  } catch (error) {
    console.error("Error initializing Firebase services:", error);
  }

  return { analytics, db, storage };
};

const { analytics, db, storage } = initializeFirebaseServices();

export { app, analytics, db, storage };