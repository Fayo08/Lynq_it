import { getAuth, sendSignInLinkToEmail  } from "../firebase/firebase";

export function handleSendLinkSignIn(email) {
  const actionCodeSettings = {
    url: 'http://localhost:8081/signIn',
    handleCodeInApp: true,
    iOS: {
      bundleId: 'com.fayosi.lynqit.ai'
    },
    android: {
      packageName: 'com.favy.Lynq_it_webapp',
      installApp: true,
      minimumVersion: '12'
    }
    // linkDomain is optional unless you need it
    // linkDomain: 'lynq-it.firebaseapp.com'
  };

  const auth = getAuth();
  return sendSignInLinkToEmail(auth, email, actionCodeSettings)
    .then(() => {
      // Save the email locally so you don't need to ask again if the user opens the link on the same device.
      window.localStorage.setItem('emailForSignIn', email);
      // Inform the user that the link was sent.
    })
    .catch((error) => {
      // Handle error (e.g., show an error message)
      const errorCode = error.code;
      const errorMessage = error.message;
      // ...
    });
}
