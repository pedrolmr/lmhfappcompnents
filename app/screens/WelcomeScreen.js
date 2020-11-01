
import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View, TouchableOpacity} from "react-native";
export default function WelcomeScreen({navigation}) {
  return (
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.login} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.text}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.register}>
            <Text style={styles.text}>Register</Text>
        </TouchableOpacity>
      </View>
        
  );
}

const styles = StyleSheet.create({
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
});
