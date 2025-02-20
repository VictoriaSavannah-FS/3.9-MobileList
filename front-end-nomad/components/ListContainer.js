// import state
import { useState, useEffect } from "react";
import { StyleSheet, FlatList, View, Text, Button, Alert } from "react-native";
import ListItem from "./ListItem.js";
import styles from "../Appstyles.js";
import Heading from "./Heading.js";
import { ScrollView } from "react-native-gesture-handler";
// scrollView helsp -genreic scrolling contaienr--hmm not sure. somwthign about it..
// import { GestureHandlerRootView } from 'react-native-gesture-handler';

// export default function App() {
//   return (
//     <GestureHandlerRootView>
//       <ActualApp />
//     </GestureHandlerRootView>
//   );
// }
// APi base ----
// const API_BASE =
//   process.env.NODE_ENV === "development"
// ? "http://localhost:8000/api/v1"
//     : "https://api-2-9-e2cec0d79dfb.herokuapp.com/api/v1";

// const API_URL = `${API_BASE}/parks`;
// //
import AsyncStorage from "@react-native-async-storage/async-storage";

const API_URL = "https://api-2-9-e2cec0d79dfb.herokuapp.com/api/v1/parks";

export default function ListContainer({ onEdit, onDelete }) {
  // APi base ----
  // const API_BASE =
  //   process.env.NODE_ENV === "development"
  //     ? "http://localhost:8000/api/v1"
  //     : "https://api-2-9-e2cec0d79dfb.herokuapp.com/api/v1";

  // const API_URL = `${API_BASE}/parks`;

  //was missing my {} brackets!
  // defien state hooks -=-------------
  const [parks, setParks] = useState([]); //empty arry to hold API
  const [loading, setLoading] = useState(false); //loading status
  const [error, setError] = useState(null); //for error hnlding

  // fetch API data!1 ------------

  useEffect(() => {
    const fetchParks = async () => {
      // fetch!
      try {
        console.log("Fetching parks from:", API_URL);

        //Token from AsyncStorage -----
        const user = await AsyncStorage.getItem("user"); // search ysuer
        const parsedUser = user ? JSON.parse(user) : null; // parse user / if not nulls
        //chekc header adn grab token - if not --> empty object
        const headers = parsedUser
          ? { Authorization: `Bearer ${parsedUser.accessToken}` }
          : {};
        // fetch headrse auth from backend
        const response = await fetch(API_URL, { headers });

        const parks = await response.json();
        console.log("Parks API Response:", parks);
        // setData(parks); //update state w/ park info
        setParks(parks);
      } catch (error) {
        console.log("Error fetching parks:", error);
        setError("Error fetching parks--> check API.");
      }
    };
    fetchParks();
  }, []); //runs only on mount

  // RENDERINg - PARK PROPerties -------
  const renderPark = ({ item }) => (
    <View style={styles.listContainer}>
      <Text style={styles.listTitle}>{item.name}</Text>
      <Text style={styles.subheading}>Location | {item.location}</Text>
      {/* added a edfult description in case none is provided */}
      <Text style={styles.subheading}>
        Description |{" "}
        {item.description
          ? item.description
          : "No description available or provided. Looks like this one's going on your bucketlist! Guess you're going to have to travel here and experience this wonder of the world for yourself."}
      </Text>
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
    // <ScrollView style={{ flex: 1 }}>
    <FlatList
      data={parks}
      renderItem={renderPark}
      keyExtractor={(item) => item._id}
    />
    // </ScrollView>
  );
}
