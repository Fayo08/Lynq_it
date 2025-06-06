
import { auth } from "./firebase";
import { createUserWithEmailAndPassword } from 'firebase/auth';

export const signUp = async (email, password) => {


 if (!email || !password) {
    alert('Please fill in all fields');
    return  ;
  }
createUserWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
 
    // Signed up 
   
 const userId = userCredential.user.uid;
    console.log('User created and data uploaded successfully!');
     return { id: userId };
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
     console.error('Error creating user or uploading data:', errorCode, errorMessage);
   throw error;
  });
    
};
    


