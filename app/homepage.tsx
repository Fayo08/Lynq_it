import Nav from "./component/Nav" 
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function homepage(){
  
    return(
<View style={styles.container}>
    
    <Nav></Nav>
        </View>
        
    )
}

const styles = StyleSheet.create({
     container: {
 
    padding: 24,
    gap: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
})