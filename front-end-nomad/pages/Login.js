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
import Heading from "../components/Heading";
import ListContainer from "../components/ListContainer.js";
import styles from "../Appstyles";
import theme from "../theme";
// import { emit } from "../../api-backend-nomad/models/User.js";

import AuthService from "../services/auth.services.js";

export default function Login({ navigation }) {
  // State --hoosk
  const [email, setEmail] = useState(""); //to stoer newEmail
  const [password, setPassword] = useState(""); //store passwrod

  // HandleLogin - POST METHOD-------------------

  const handleLogin = async () => {
    // chekc for params /form
    if (!email || !password) {
      // throw alert for form
      Alert.alert("Missing Fields", "Please fill out all fields.");
      return;
    }

    // try-cath for error hanlding and logic -----
    try {
      // call Auth.Service.login() to check ExistingUSer ----
      const res = await AuthService.login(email, password);
      // cnditonals - check for res.
      if (res) {
        // res returned -> go to Parks ??? / home? ---
        navigation.navigate("Parks");
      } else {
        // alert - ("Type", "message")
        Alert.alert("Login Failed --- ", "Invalid email or password.");
      }
    } catch (error) {
      console.error("Login Error:", error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Login</Text>
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
        onChangeText={setEmail} //updates sate @ top
      />
      {/* Password */}
      <TextInput
        style={styles.inputForm}
        placeholder="Create a Password..."
        placeholderTextColor={theme.colors.blue}
        value={password} //lnks sate @ top
        onChangeText={setPassword} //updates sate @ top
      />

      {/* handleSubmit btn */}
      <Button title="Login" onPress={handleLogin} />

      <Button
        title="Go To Parks"
        onPress={() => navigation.navigate("Parks")}
      />
      <Button title="Go To Form" onPress={() => navigation.navigate("Form")} />

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
