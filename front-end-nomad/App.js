import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  Switch,
  StyleSheet,
  Text,
  View,
  Button,
  Platform,
} from "react-native";
import * as Network from "expo-network";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Details from "./Details.js";
import Categories from "./Categories.js";

import Heading from "./components/Heading.js";
import ListContainer from "./components/ListContainer.js";

import styles from "./Appstyles.js";

function HomeScreen({ navigation }) {
  //set useState
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={[styles.Heading, styles.largeHeading]}>NOMAD| HOME</Text>
      <Heading>Welcome NOMAD</Heading>
      {Platform.OS === "ios" ? (
        <Text
          style={[styles.mediumHeading, styles.italicFont, styles.headingColor]}
        >
          I am IOS
        </Text>
      ) : (
        <Text style={[styles.mediumHeading, styles.italicFont]}>
          I am NOT on IOS
        </Text>
      )}
      <Button
        title="Go To Details"
        onPress={() => navigation.navigate("Details")}
      />
      <Button
        title="Go To Categories"
        onPress={() => navigation.navigate("Categories")}
      />
      <ListContainer />
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "WANDER" }}
        />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Categories" component={Categories} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
