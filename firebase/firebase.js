// Import the necessary Firebase modules
import { initializeApp } from '@react-native-firebase/app';

import { getFirestore } from '@react-native-firebase/firestore';

// Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.FIREBASE_APIKEY,
  authDomain: import.meta.env.FIREBASE_AUTHDOMAIN, // fixed typo
  databaseURL: import.meta.env.FIREBASE_DATABASE_URL,
  projectId: import.meta.env.FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const db = getFirestore(app);

// Export only what you need
export { app,  db };
