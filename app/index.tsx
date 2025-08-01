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

    const getLoggedInUser = onAuthStateChanged(auth, (user) => {
      timeout = setTimeout(() => {
        if (user) {
          router.push("/landingPage");
          // You want to try to tweak the logic to direct you to signIn page for now.

        } else {
             router.push("/signIn");
        }
      }, 1000);
    });

    return () => {
      if (timeout) clearTimeout(timeout);
      getLoggedInUser();
    };
  }, [router]);

  return (
    <View style={styles.view}>
      <Text style={styles.text}>LYNQ IT.AI</Text>
    </View>
  );
}
