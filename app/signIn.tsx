import { StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function signIn() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "black",
    },

    containerTextField: {
      width: "100%",
      paddingTop: 50,
      alignItems: "center",
      flex: 2,
      gap: 20,
    },
    whiteFont: { color: "white" },

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

  return (
    <View style={styles.container}>
      <View style={styles.containerTextField}>
        <Text style={styles.whiteFont}>Create an account</Text>

        <View style={styles.textfield}>
          <label color="#AFAFAF">Email</label>
          <TextInput></TextInput>
        </View>
        <View style={styles.button}>
          <Text>Continue</Text>
        </View>
      </View>
      <View style={styles.containerGoogle}>
        <Text style={styles.whiteFont}>
          Already have an account? <span>Log in</span>
        </Text>
      </View>
    </View>
  );
}