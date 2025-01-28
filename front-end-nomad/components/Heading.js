import { StyleSheet, Text, View } from "react-native";
import styles from "../Appstyles";

export default function Heading({ children, level }) {
  const headingLevel = level ? level : 5;

  return (
    <View style={[styles.heading, styles.container]}>
      <Text style={styles.subheading}>{children}</Text>
    </View>
  );
}
