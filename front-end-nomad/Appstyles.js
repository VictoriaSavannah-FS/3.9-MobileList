import { StyleSheet, Platform } from "react-native";
import theme from "./theme";
/* root colors ot reference throughout */
// :root {
//   --white-text: #e1e1e1;
//   --blue-light1: #00a6fb;
//   --blue-light2: #0582ca;
//   --blue: #006494;
//   --blue-dark1: #003554;
//   --blue-dark2: #051923;
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.blueDark2,
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
  },
  // Headings-=====
  heading: {
    fontSize: 48,
    fontWeight: "bold",
    color: theme.colors.whiteText,
    // Add space aftr hdngs
    marginBottom: 16,
  },
  //medium / smaller txt for body
  subheading: {
    fontSize: 20,
    fontWeight: "200",
    color: theme.colors.whiteText,
    marginBottom: 8,
    alignContent: "center",
    padding: 14,
  },

  // BUTTONS-----
  // -Light blue- bttn
  // -whiteTxt
  button: {
    // Light blue
    backgroundColor: theme.colors.blueLight1,
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: theme.colors.whiteText,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  // list Styles-----------PARKS PAGE -----------------
  listContainer: {
    // Dark blue for list items
    backgroundColor: theme.colors.blueDark1,
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  listTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: theme.colors.whiteText,
  },
  // ligh/blue
  listCaption: {
    fontSize: 16,
    color: theme.colors.blueLight2,
  },
});

export default styles;
//     },

// list container - PARKS PAGE

// listContainer: {
//   flex: 1,
//   backgroundColor: "#006494",
//   alignItems: "center",
//   justifyContent: "center",
// },
