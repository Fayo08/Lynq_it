import Nav from "./component/Nav";
import { View, StyleSheet, Text } from "react-native";
import { Link } from "lucide-react-native";
import "../global.css";
export default function landingPage() {
  return (
    <View style={styles.container}>
      <Nav></Nav>

      <View style={styles.linkContainer}>
        <Text style={styles.textColor}>Add Link</Text>
        <View style={styles.linkBorder}>
          <Link color="white"></Link>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    height: "100%",
    padding: 24
  },
  textColor: {
    color: "white",
  },
  linkContainer: {
   alignContent:"flex-start",
     borderWidth: .5,
    
      borderTopColor:"white",
   gap: 20,
    flex: 2,
    marginTop: 50,
    paddingLeft: 20,
    paddingTop: 20
  },
  linkBorder:{
    justifyContent:"center",
    alignItems:"center",
    width:73,
    height: 95,
    borderWidth: .5,
    borderRadius: 30,
    borderColor:"white"
  }
});
