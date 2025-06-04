// Import the necessary Firebase modules
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';
import '@react-native-firebase/firestore';
import { FIREBASE_APIKEY, FIREBASE_AUTHDOMAIN, FIREBASE_DATABASE_URL, FIREBASE_PROJECT_ID,FIREBASE_STORAGE_BUCKET,FIREBASE_MESSAGING_SENDER_ID,FIREBASE_APP_ID/* ... */ } from '@env';

// Firebase configuration
const firebaseConfig = {
  apiKey: FIREBASE_APIKEY,
  authDomain: FIREBASE_AUTHDOMAIN, 
  databaseURL: FIREBASE_DATABASE_URL,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
  appId: FIREBASE_APP_ID,
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}
const auth = firebase.auth();
const db = firebase.firestore();
// Export only what you need
export { app, auth, db };
