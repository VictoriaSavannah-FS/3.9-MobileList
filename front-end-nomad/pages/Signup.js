import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  Switch,
  StylesSheet,
  Text,
  View,
  Button,
  Alert,
  FlatList,
  Image,
  TextInput,
} from "react-native";
// import state
import Heading from "../components/Heading.js";
import ListContainer from "../components/ListContainer.js";
import styles from "../Appstyles.js";
import theme from "../theme.js";
// import { emit } from "../../api-backend-nomad/models/User.js";
import AuthService from "../services/auth.services.js";

export default function Signup({ navigation }) {
  // State --hoosk
  const [email, setEmail] = useState(""); //to store Email
  const [password, setPassword] = useState(""); //store passwrod

  // HandleSubmit - POST METHOD-------------------

  const handleSignup = async () => {
    // checks iff paramas are provided on Form
    if (!email || !password) {
      // throw error/alert
      Alert.alert("Missing Fields", "Please fill out all fields.");
      return;
    }
    // try-cath for error hanlding and logic -----
    try {
      // call Auth.Service.signup() to register NEwUser:)
      const res = await AuthService.signup(email, password);
      // cnditonals - check for res.
      if (res) {
        // res returned -> go to Login
        navigation.navigate("Login");
      } else {
        // alert - ("Type", "message")
        Alert.alert("Signup Failed", "Try again");
      }
    } catch (error) {
      console.error("Sign up Error:", error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Sign Up</Text>
      <Image
        source={require("../imgs/rockyMnt.jpg")}
        style={{ width: "100%", height: "40%", padding: 12, borderRadius: 4 }}
        resizeMode="cover"
      />

      {/* EMAIL ====  */}
      <TextInput
        style={styles.inputForm}
        placeholder="Enter Email..."
        placeholderTextColor={theme.colors.blue}
        value={email} //lnks sate @ top
        onChangeText={setEmail} ///updates sate @ top
      />
      {/* PASSWORD --------  */}
      <TextInput
        style={styles.inputForm}
        placeholder="Create a Password..."
        placeholderTextColor={theme.colors.blue}
        value={password} //lnks sate @ top
        onChangeText={setPassword} //updates sate @ top
      />

      {/* handleSubmit btn */}
      <Button title="Sign Up" onPress={handleSignup} />

      {/*  ------ Nav Btns */}
      <Button
        title="Go To Parks"
        onPress={() => navigation.navigate("Parks")}
      />
      <Button title="Go To Form" onPress={() => navigation.navigate("Form")} />

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
