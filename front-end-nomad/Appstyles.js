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
    paddingTop: 4,
  },
  // Headings-=====
  heading: {
    fontSize: 48,
    fontWeight: "bold",
    color: theme.colors.whiteText,
    textAlign: "center",
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
    backgroundColor: theme.colors.buttonBackground,
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: theme.colors.buttonText,
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
  },
  // list Styles-----------PARKS PAGE -----------------
  listContainer: {
    width: "95%",
    alignContent: "center",
    alignSelf: "center",

    backgroundColor: theme.colors.blueDark2,

    padding: 25,
    borderRadius: 8,
    marginBottom: 16,
    // contaienr - shadow styles--
    shadowColor: theme.colors.blue,
    shadowOpacity: 0.2,
    shadowRadius: 50,
    shadowOffset: { width: 34, height: 2 },
  },
  listTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: theme.colors.whiteText,
    textAlign: "center",
  },
  // ligh/blue
  listCaption1: {
    fontSize: 16,
    padding: 12,
    color: theme.colors.blueLight1,
    textAlign: "left",
    alignItems: "center",
  },
  listCaption2: {
    fontSize: 16,
    color: theme.colors.blueLight2,
    textAlign: "center",
    alignItems: "center",
  },
  // FORM styles --------
  inputForm: {
    // txt
    color: "olive",
    fontSize: 16,
    placeholderTextColor: "#FFA500",
    // wdth--
    width: "90%",
    backgroundColor: "transparent",
    // borders
    borderWidth: 2,
    borderColor: "olive",
    borderRadius: 8,
    // bx-mdl
    padding: 12,
    marginBottom: 12,
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
/* to-do
- bckgrnd - list container 
>input text /form 
>shadow on Parks list??

*/
