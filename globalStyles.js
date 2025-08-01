// globalStyles.js
import { Bold } from "lucide-react-native";
import { StyleSheet } from "react-native";

export const colors = {
  primary: "#6200ee",
  background: "#000",
  text: "#000",
  white: "#fff",
  black: "#000",
};

export const globalStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    width: "100%",
    height: "100%",
    padding: 24,
  },

  sectionColumn: {
    alignContent: "flex-start",
    borderTopColor: "white",
    gap: 20,
    marginTop: 50,
    paddingLeft: 20,
    paddingTop: 20,
  },
sectionRow:{
    marginTop: 50,
  borderWidth: 0.5,
     justifyContent: "center",
    borderTopColor: "white",
    borderBottomColor: "white",
    display: "flex",
    flexDirection: "row",
    gap: 60,
    padding: 20
},
  line:{
    borderWidth: 0.5,
    borderTopColor: "white", 
  },

  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.black,
  },

  textBody: {
    color: colors.white,
    fontSize: 14,
  },

  primaryButton: {
    display: "flex",
    flexDirection: "row",
    padding: 10,
    gap: 10,
    backgroundColor: "white",
    borderRadius: 30,
    width: 150,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
  },
  linkButton:{
 justifyContent: "center",
    alignItems: "center",
    width: 73,
    height: 95,
    borderWidth: 0.5,
    borderRadius: 30,
    borderColor: "white",
  },
  collectionButton:{
  justifyContent: "center",
    alignItems: "center",
    width: 73,
    height: 35,
    borderWidth: 0.5,
    borderRadius: 30,
    borderColor: "white",
  },
  buttonText: {
    color: colors.black,
    fontWeight: "bold",
    textAlign: "center",
  },
});
