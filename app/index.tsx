import { Text, StyleSheet, View } from "react-native";
import { useEffect } from "react";
import { useRouter } from "expo-router";
import { auth } from "../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";

export default function Index() {
  const router = useRouter();

  const styles = StyleSheet.create({
    view: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "black",
    },
    text: {
      color: "white",
      fontSize: 32,
      fontWeight: "800",
      fontFamily: "Caprasimo",
    },
  });

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      timeout = setTimeout(() => {
        if (user) {
          router.push("/landingPage");
        } else {
          router.push("/signIn");
        }
      }, 1000);
    });

    return () => {
      if (timeout) clearTimeout(timeout);
      unsubscribe();
    };
  }, [router]);

  return (
    <View style={styles.view}>
      <Text style={styles.text}>LYNQ IT.AI</Text>
    </View>
  );
}
