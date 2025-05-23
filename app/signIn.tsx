import { TouchableOpacity, StyleSheet, Text, TextInput, View, } from "react-native";
import { useState } from "react";
import validator from 'validator';
import auth from '@react-native-firebase/auth';



export default function signIn() {



  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const [password, setPassword] = useState('');

  const signUp = async (email: string, password: string) => {
    const validateEmail = (input: string) => {
      setEmail(input);
      if (!input) {
        setError('Email is required.');
        return;
      }

      if (validator.isEmail(input)) {
setError('');
} else {
setError('Please enter a valid email address.');
}
    };

    auth().createUserWithEmailAndPassword(email, password)
      .then(userCredential => {

    
      });

  };


  return (
    <View style={styles.container}>
      <View style={styles.containerAccount}>
        <Text style={styles.whiteFont}>Create an account</Text>

        <View style={styles.containerTextfield} >

          <TextInput style={styles.textfield} placeholder="Enter your email"></TextInput>
          <TextInput style={styles.textfield} placeholder="Enter your password"></TextInput>
        </View>

        <TouchableOpacity style={styles.button}
          onPress={() => signUp(email, password)}
        ><Text>Sign Up</Text></TouchableOpacity>

      </View>
      <View style={styles.containerGoogle}>
        <Text style={styles.whiteFont}>
          Already have an account? <Text>Log in</Text>
        </Text>
      </View>
      {/* <GoogleSigninButton
  size={GoogleSigninButton.Size.Wide}
  color={GoogleSigninButton.Color.Dark} */}
      {/* // onPress={signedIn}
  // disabled={inProgress}
/>; */}
    </View>
  );
}
;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },

  containerAccount: {
    width: "100%",
    paddingTop: 50,
    alignItems: "center",
    flex: 2,
    gap: 20,
  },
  whiteFont: { color: "white" },
  containerTextfield: {
    gap: 10,
    width: "100%"
  },
  textfield: {
    alignItems: "flex-start",
    paddingTop: 5,
    paddingLeft: 10,

    width: "100%",
    height: 50,

    backgroundColor: "#454545",
  },
  containerGoogle: {
    flex: 3,
  },
  button: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 50,
  },
});