import { GoogleSignin } from '@react-native-google-signin/google-signin';

export const configureGoogleSignIn = () => {
  GoogleSignin.configure({
    webClientId: '462794839649-crugpmll26792gm42en20jd2k5frsdc3.apps.googleusercontent.com',
    offlineAccess: true,
  });
};