import Nav from "./component/Nav";
import { useState } from "react";
import * as Clipboard from '@react-native-clipboard/clipboard';

import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import {globalStyles} from "../globalStyles"
import { Link, Plus, Share, HeartPlus } from "lucide-react-native";
import "../global.css";

export default function landingPage() {
const [paste, setPaste] = useState('')

 const pasteFromClipboard = async () => {
    const clipboardContent = await Clipboard.getString();
    setPaste(clipboardContent); // set the pasted content into TextInput
  };
  return (
    <View style={globalStyles.container}>
      <Nav></Nav>

      <View style={globalStyles.sectionColumn}>
        <View style={globalStyles.line}></View>
        <Text style={globalStyles.textBody}>Add Link</Text>
        <TouchableOpacity style={globalStyles.linkButton}
        onPress={pasteFromClipboard}>
          <Link color="white"></Link>
        </TouchableOpacity>
      </View>
      <View style={globalStyles.sectionColumn}>
            <View style={globalStyles.line}></View>
        <Text style={globalStyles.textBody}>Create a Collection</Text>
        <View style={globalStyles.collectionButton}>
          <Plus color="white"></Plus>
        </View>
      </View>
       <View style={globalStyles.sectionRow}>
            <View style={globalStyles.line}></View>
          <View style={globalStyles.primaryButton}>
            <HeartPlus></HeartPlus>
       
            <Text style={globalStyles.buttonText}>Favorites</Text>
          </View>
          <View style={globalStyles.primaryButton}>
     
<Share></Share>
            <Text style={globalStyles.buttonText}>
              Shared</Text>

          </View>
            <View style={globalStyles.line}></View>  
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

});
