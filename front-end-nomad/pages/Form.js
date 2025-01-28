import React, { useState, useEffect } from "react";
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
} from "react-native";
// import state

import ListContainer from "../components/ListContainer";
import styles from "../Appstyles";

export default function Form({ navigation }) {
  // api refernce

  // put / POST - METHDS

  return (
    <SafeAreaView styles={styles.container}>
      <Text styles={[styles.largeHeading, styles.mediumHeading]}>
        Submit a New Park
      </Text>
      <Image
        source={require("../imgs/mountain-3.jpg")}
        style={{ width: "100%", height: "25%" }}
        resizeMode="cover"
      />

      <Button title="Go Home" onPress={() => navigation.navigate("Home")} />
      <Button
        title="Go To Parks"
        onPress={() => navigation.navigate("Parks")}
      />
    </SafeAreaView>
  );
}
