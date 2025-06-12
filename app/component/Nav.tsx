import { Settings } from "lucide-react-native";
import { ArrowDownUp } from "lucide-react-native";
import { Search } from "lucide-react-native";
import { View, StyleSheet } from "react-native";

import "../../global.css";

export default function Nav() {
  return (
    <View style={styles.navContainer}>
      <View style={styles.navLeft}>
        <Settings color="white"></Settings>
        <ArrowDownUp color="white"></ArrowDownUp>
      </View>
      <View>
        <Search color="white"></Search>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navContainer: {
     flexDirection: "row",
     justifyContent:"space-between",
     padding: 10, 

     },
  navLeft: {
    flexDirection: "row",
    gap:20
  },

});
