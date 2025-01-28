import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  Switch,
  StylesSheet,
  Text,
  View,
  Button,
  FlatList,
  Image,
  Alert,
  ScrollView,
} from "react-native";
// scrollView helsp -genreic scrilling contaienr

import styles from "../Appstyles";

// import Lsit component
import ListContainer from "../components/ListContainer";

export default function Parks({ navigation }) {
  // API reference: https://api-2-9-e2cec0d79dfb.herokuapp.com/api/v1/parks
  const API_URL = "https://api-2-9-e2cec0d79dfb.herokuapp.com/api/v1/parks";

  // EDIT / PATCH METHOD ---
  const editPark = async (park) => {
    // Prompt user for new details -----
    const newName = prompt("Enter new name:", park.name);
    const newLocation = prompt("Enter new location:", park.location);
    const newDescription = prompt("Enter new description:", park.description);

    // ValidAtee  inputs
    if (!newName || !newLocation || !newDescription) {
      Alert.alert("All fields are required to update the park.");
      return;
    }
    // Trycath-block
    try {
      // Send PUT methd request to the API ----- upafte park : SPECIFIC PARKS
      const response = await fetch(`${API_URL}/${park._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: newName,
          location: newLocation,
          description: newDescription,
        }),
      });

      // Update Prk list by fetching data--- refernce from 2.9
      // setParks((prevParks) =>
      //   prevParks.map((park) =>
      //     park._id === id ? { ...park, name, location, description } : park
      //   )
      // );
      // UPDATE UI / data w/ Edits
      setParks((prevParks) =>
        prevPark.map((park) =>
          park._id === id
            ? {
                ...park,
                name: newName,
                location: newLocation,
                description: newDescription,
              }
            : park
        )
      );
      // Alert.alert('Alert Title', 'My Alert Msg')
      Alert.alert("Succes", "Park Updated");
    } catch (error) {
      Alert.alert("Error", "Failed to Updated Park-try again...");
    }
  };

  // HANLDE DELETE PARk ------ BSD on ID

  const deletePark = async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });
      // refernce from 2.9
      // setParks((prevParks) => prevParks.filter((park) => park._id !== id));
      // updte State - remove praks ------------
      setParks((prevParks) => prevParks.filter((park) => park._id !== id));
      Alert.alert("Succes", "Park Deleted");
    } catch (error) {
      Alert.alert("Error", "Failed to Delete Park. Please try again...");
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={[styles.subheading]}>Parks</Text>
      {/* <Image
        source={require("../imgs/mountain-2.jpg")}
        style={{ width: "100%", height: "25%" }}
        resizeMode="cover"
      /> */}
      {/* Parks Data */}
      <ListContainer onEdit={editPark} onDelete={deletePark} />

      <Button
        style={[styles.button, styles.buttonText]}
        title="Go Home"
        onPress={() => navigation.navigate("Home")}
      />
      <Button title="Go To Form" onPress={() => navigation.navigate("Form")} />
    </SafeAreaView>
  );
}
