import { db } from "@react-native-firebase/firestore";
import { serverTimestamp, doc, setDoc } from "@react-native-firebase/firestore";
import auth from '@react-native-firebase/auth';

export const postEmailandPassword = async (email, password) => {
  if (!email || !password) {
    alert('Please fill in all fields');
    return;
  }

  try {
    // Use Firebase Auth to create user (do NOT store password in Firestore)
    const userCredential = await auth().createUserWithEmailAndPassword(email, password);
    const userId = userCredential.user.uid;

    // Optionally, store user data (excluding password) in Firestore
    const userRef = doc(db, 'users', userId);
    await setDoc(
      userRef,
      {
        email: email,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      },
      { merge: true }
    );

    console.log('User created and data uploaded successfully!');
    return { id: userId };
  } catch (error) {
    console.error('Error creating user or uploading data:', error);
    throw error;
  }
};
