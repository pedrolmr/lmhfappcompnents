
import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View, TouchableOpacity} from "react-native";
export default function WelcomeScreen() {
  return (
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.login}>
            <Text style={styles.text}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.register}>
            <Text style={styles.text}>Register</Text>
        </TouchableOpacity>
      </View>
        
  );
}

const styles = StyleSheet.create({
//   background: {
//     flex: 1,
//     justifyContent: "flex-end",
//     alignItems: "center",
//   },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  login:{
    backgroundColor: "black",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    marginVertical: 10,
  },
  register:{
    backgroundColor: "gray",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    marginVertical: 10,
  },
  text: {
    color: "white",
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
//   logo: {
//     width: 200,
//     height: 200,
//   },
//   logoContainer: {
//     position: "absolute",
//     top: 70,
//     alignItems: "center",
//   },
//   tagline: {
//     fontSize: 25,
//     fontWeight: "600",
//     color: colors.white,
//     fontStyle: "italic",
//   },
});
