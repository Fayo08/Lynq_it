import {
  TouchableOpacity,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useState } from "react";
import validator from "validator";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { signUp } from "../firebase/postSignUp";
<script src="https://accounts.google.com/gsi/client" async></script>



export default function signIn() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const validateEmail = (email: string) => {
    setEmail(email);
    if (!email) {
      setError("Email is required.");
      return;
    }
    if (!validator.isEmail(email)) {
      setError("Please enter a valid email address.");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = async (email: string, password: string) => {
    if (!validateEmail(email)) return;

    // Only proceed if password is not empty
    if (!password) {
      alert("Password is required");
      return;
    }

    //call postAnswers function
    try {
      const user = await signUp(email, password);
      console.log("User created successfully", user);
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  

  return (
    <View style={styles.container}>
      <View style={styles.containerAccount}>
        <Text style={styles.whiteFont}>Create an account</Text>

        <View style={styles.containerEmail}>
          <TextInput
            style={styles.textfield}
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your email"
          ></TextInput>
        </View>
        <View style={styles.containerPassword}>
          <TextInput
            style={styles.textfield}
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
            placeholder="Enter your password"
          ></TextInput>
          <MaterialCommunityIcons
            style={styles.icon}
            name={showPassword ? "eye-off" : "eye"}
            size={24}
            color="#aaa"
            onPress={toggleShowPassword}
          />
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handleSubmit(email, password)}
        >
          <Text>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containerGoogle}>
        <Text style={styles.whiteFont}>
          Already have an account? <Text>Log in</Text>
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    gap: 50,
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

  containerEmail: {
    width: "100%",
  },

  containerPassword: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    position: "relative",
  },
  icon: {
    position: "absolute",
    right: 10,
  },
  textfield: {
    alignItems: "flex-start",
    paddingTop: 5,
    paddingLeft: 10,
    borderRadius: 8,
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
    borderRadius: 8,
  },
});
