import { getAuth, linkWithCredential, EmailAuthProvider } from "../firebase/firebase";

// Construct the email link credential from the current URL.
const credential = EmailAuthProvider.credentialWithLink(
  email, window.location.href);

// Link the credential to the current user.
const auth = getAuth();
linkWithCredential(auth.currentUser, credential)
  .then((usercred) => {
    // The provider is now successfully linked.
    // The phone user can now sign in with their phone number or email.
  })
  .catch((error) => {
    // Some error occurred.
  });
// [END auth_email_link_link_modular]