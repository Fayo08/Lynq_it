import Nav from "./component/Nav";
import { View, StyleSheet, Text } from "react-native";
import { Link, Plus, Share, HeartPlus } from "lucide-react-native";
import "../global.css";

export default function landingPage() {
  return (
    <View style={styles.container}>
      <Nav></Nav>

      <View style={styles.linkContainer}>
        <Text style={styles.textWhite}>Add Link</Text>
        <View style={styles.linkBorder}>
          <Link color="white"></Link>
        </View>
      </View>
      <View style={styles.collectionContainer}>
        <Text style={styles.textWhite}>Create a Collection</Text>
        <View style={styles.collection}>
          <Plus color="white"></Plus>
        </View>
      </View>
       <View style={styles.shareContainer}>
          <View style={styles.shareButton}>
            <HeartPlus></HeartPlus>
       
            <Text style={styles.textDark}>Favorites</Text>
          </View>
          <View style={styles.shareButton}>
     
<Share></Share>
            <Text style={styles.textDark}>
              Shared</Text>
          </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    height: "100%",
    padding: 24,
  },
  textWhite: {
    color: "white",
  },

   textDark: {
    color: "black",
  },
  linkContainer: {
    alignContent: "flex-start",
    borderWidth: 0.5,

    borderTopColor: "white",
    gap: 20,

    marginTop: 50,
    
    paddingLeft: 20,
    paddingTop: 20,
  },
  
  linkBorder: {
    justifyContent: "center",
    alignItems: "center",
    width: 73,
    height: 95,
    borderWidth: 0.5,
    borderRadius: 30,
    borderColor: "white",
  },
   collectionContainer: {
    alignContent: "flex-start",
    borderWidth: 0.5,

    borderTopColor: "white",
    gap: 20,

    marginTop: 50,
     marginBottom: 50,
    paddingLeft: 20,
    paddingTop: 20,
  },
  collection: {
    justifyContent: "center",
    alignItems: "center",
    width: 73,
    height: 35,
    borderWidth: 0.5,
    borderRadius: 30,
    borderColor: "white",
  },
  shareContainer: {
    borderWidth: 0.5,
     justifyContent: "center",
    borderTopColor: "white",
    borderBottomColor: "white",
    display: "flex",
    flexDirection: "row",
    gap: 60,
    padding: 20
  },
  shareButton: {
    display:"flex",
    flexDirection: "row",
padding: 10,
gap:10,
    backgroundColor: "white",
       borderRadius: 30,
        width: 150,
    height: 48,
justifyContent: "center",
    alignItems: "center",
  },
});
