import { Text, StyleSheet, View } from "react-native";
import { useEffect } from "react";
import { useRouter } from "expo-router";
import "../global.css"

export default function Index() {
 
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

  const router = useRouter();
  useEffect(()=>{
    const timeout = setTimeout(()=>  {
      router.push('/signIn'); 
    },1000)
    return () => clearTimeout(timeout)
    }, [])

  return (
    <View style={styles.view}>
      <Text style={styles.text}>LYNQ IT.AI</Text>
    </View>
  );
}