// import state
import { useState, useEffect } from "react";
import { StyleSheet, FlatList, View, Text, Button, Alert } from "react-native";
import ListItem from "./ListItem.js";
import styles from "../Appstyles.js";

export default function ListContainer({ onEdit, onDelete }) {
  //was missing my {} brackets!
  // defien state hooks
  const [parks, setParks] = useState([]); //empty arry to hold API
  const [loading, setLoading] = useState(false); //loading status
  const [error, setError] = useState(null); //for error hnlding

  // reference API -https://api-2-9-e2cec0d79dfb.herokuapp.com/api/v1/parks

  const API_URL = "https://api-2-9-e2cec0d79dfb.herokuapp.com/api/v1/parks";

  // fetch API data!1 ------------
  useEffect(() => {
    // fetch!
    const fetchParks = async () => {
      // load state - true @ start
      setLoading(true);
      // try/catch blcok
      try {
        const response = await fetch(API_URL);
        const parks = await response.json(); //
        // setData(parks); //update state w/ park info
        setParks(parks);
      } catch (error) {
        setError("Error while fetching parks");
      } finally {
        setLoading(false); //stop loading
      }
    };
    fetchParks();
  }, []); //runs only on mount
  //
  //
  // RENDERINg - PARK PROPerties -------
  const renderPark = ({ item }) => (
    <View style={styles.container}>
      <Text>{item.name}</Text>
      <Text>Location | {item.location}</Text>
      <Text>Description | {item.description}</Text>
      {/*  <Button
        title="Go To Parks"
        onPress={() => navigation.navigate("Parks")}
      /> */}
      {/* <Button title="Edit" onPress={() => onEdit(park)} /> */}
      <Button title="Edit" onPress={() => onEdit(item)} />
      <Button title="Delete" onPress={() => onDelete(item._id)} />
    </View>
  );

  return (
    <FlatList
      data={parks}
      renderItem={renderPark}
      keyExtractor={(item) => item._id}
    />
  );
}
