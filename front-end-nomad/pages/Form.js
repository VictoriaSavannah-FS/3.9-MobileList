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
import ListContainer from "../components/ListContainer";
import styles from "../Appstyles";
import theme from "../theme";

export default function Form({ navigation }) {
  // State --hoosk
  const [name, setName] = useState(""); //to stoer newName
  const [location, setLocation] = useState(""); //stre newLoc
  const [description, setDescription] = useState(""); //newDescriptn
  // api refernce -- data pushd to
  const API_URL = "https://api-2-9-e2cec0d79dfb.herokuapp.com/api/v1/parks";

  // HandelSubmit - POST METHOD--{-----------------
  const handleSubmit = async () => {
    //makes sure all necessay fields filled
    if (!name || !location || !description) {
      Alert.alert("Missing fields", "Please fillout all fields.");
      return;
    } // try-catch block -process request
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, location, description }), //data->JSON|let's goo!
      });
      // conditoinls
      if (response.ok) {
        Alert.alert("Success", "Park Added Successfully");
        // RESET Forms' inputs - only on Success^^
        setName("");
        setLocation("");
        setDescription("");
      } else Alert.alert("Error", "Failed to submit Park..");
    } catch (error) {
      Alert.alert("Error", error, message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Submit a New Park</Text>
      <Image
        source={require("../imgs/rockyMnt.jpg")}
        style={{ width: "100%", height: "40%", padding: 12, borderRadius: 4 }}
        resizeMode="cover"
      />

      <Text style={styles.subheading}>
        Know of other amazing and beautiful national parks around the world?
        Have you visited one or have a dream destination that wasn’t on our
        list? Submit your nominee by filling out the form below!
      </Text>
      {/* NAME ====  */}
      <TextInput
        style={styles.inputForm}
        placeholder="Enter Parks' Name..."
        placeholderTextColor={theme.colors.blue}
        value={name} //lnks sate @ top
        onChangeText={setName} ///updates sate @ top
      />
      <TextInput
        style={styles.inputForm}
        placeholder="Enter Parks' Location..."
        placeholderTextColor={theme.colors.blue}
        value={location} //lnks sate @ top
        onChangeText={setLocation} ///updates sate @ top
      />
      <TextInput
        style={styles.inputForm}
        placeholder="Provide a short description of the Park..."
        // placeholderTextColor="#aaa"
        placeholderTextColor={theme.colors.blue}
        value={description} //lnks sate @ top
        onChangeText={setDescription} ///updates sate @ top
      />
      {/* handleSubmit btn */}
      <Button title="Submit Park" onPress={handleSubmit} />

      <Button
        title="Go To Parks"
        onPress={() => navigation.navigate("Parks")}
      />
      <Button title="Go To Form" onPress={() => navigation.navigate("Form")} />

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
