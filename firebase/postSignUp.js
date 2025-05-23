import { db } from "./firebase";
import {collection} from "@react-native-firebase/firestore"


const postEmailandPassword = async (users, email, password) => {
  try {
    // Ensure email format is correct
    if (email.length !== 5) {
      throw new Error('You must submit exactly 5 answers.');
    }
};
