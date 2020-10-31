import React from "react";
import Constants from "expo-constants";
import { StyleSheet, Image, SafeAreaView, View, Platform, TextInput, Text, Button} from "react-native";
import { Formik } from "formik";
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password")
});

function LoginScreen(props) {

  return (
    <SafeAreaView style={styles.container}>
    
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}
      >
        { ({handleChange, handleSubmit, errors, setFieldTouched }) => (
           <View style={styles.textinputcontainer}>
            <TextInput style={styles.text}
              autoCapitalize="none" 
              autoCorrect={false}
              icon="email"
              keyboardType="email-address"
              onBlur={() => setFieldTouched("email")}
              onChangeText={handleChange("email")}
              placeholder="Email"
              textContentType="emailAddress"
            />

        <View>{ !errors.email ? null : <Text style={{ color: "red"}}>{errors.email}</Text>}</View>;
       

            <TextInput 
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              onBlur={() => setFieldTouched("password")}
              onChangeText={handleChange("password")}
              placeholder="Password"
              secureTextEntry={true}
              textContentType="password"
            />
          
           
        <View>{!errors.password ? null : <Text style={{ color: "red"}}>{errors.password}</Text>}</View>;
            <Button title="Login" onPress={handleSubmit} />
        
          </View>
        )}
        
      </Formik>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container:{
    padding: 10,
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
  text: {
    color: "black",
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
  textinputcontainer:{
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  }
}); 

export default LoginScreen;
