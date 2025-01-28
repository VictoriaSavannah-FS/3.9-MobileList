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
// import * as Network from "expo-network";
import theme from "./theme.js";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Form from "./pages/Form.js";
import Parks from "./pages/Parks.js";

import Heading from "./components/Heading.js";
// import ListContainer from "./components/ListContainer.js";

import styles from "./Appstyles.js";
// need to import Image from react-naotve lol!
import { Image } from "react-native";

// imgs
// import HomeImg from "./imgs/mountain-1.jpg";

function HomeScreen({ navigation }) {
  //set useState
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={[styles.heading]}>HOME </Text>
      {/* <Heading>
        Check out these awesome state parks from around the world and start
        planning your next trip. Whether it's epic hikes or just soaking up the
        views, there's a park out there calling your name!
      </Heading> */}
      <Image
        source={require("./imgs/mountain-1.jpg")}
        style={{ width: "100%", height: "40%", padding: 12, borderRadius: 4 }}
        resizeMode="cover"
      />
      <Text>
        {" "}
        <Heading style={styles.subheading}>
          Check out these awesome state parks from around the world and start
          planning your next trip. Whether it's epic hikes or just soaking up
          the views, there's a park out there calling your name!
        </Heading>
      </Text>
      <Button
        title="Go To Parks"
        onPress={() => navigation.navigate("Parks")}
      />
      <Button title="Go To Form" onPress={() => navigation.navigate("Form")} />

      {/* <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      /> */}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator style={styles.container}> */}
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.colors.blueDark2, // Dark header background
          },
          headerTintColor: theme.colors.whiteText, // White text for header
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 20,
          },
        }}
      >
        <Stack.Screen
          style={styles.container}
          name="Home"
          component={HomeScreen}
          options={{ title: "NOMAD" }}
        />
        <Stack.Screen name="Form" component={Form} />
        <Stack.Screen name="Parks" component={Parks} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
