// Import the necessary Firebase modules
import { initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';



// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlHBbLLK-mJkrFI-Qw8HLDRLZrnOEDBOA",
  authDomain: "lynq-it.firebaseapp.com",
  databaseURL: "https://lynq-it-default-rtdb.firebaseio.com",
  projectId: "lynq-it",
  storageBucket: "lynq-it.firebasestorage.app",
  messagingSenderId: "462794839649",
  appId: "1:462794839649:web:6b6fc10cc7def24c573c20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
