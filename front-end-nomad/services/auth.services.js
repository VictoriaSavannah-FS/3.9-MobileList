// import { signin } from "../api-backend-nomad/controllers/authentication_controller";
// import { signin } from "../../api-backend-nomad/controllers/authentication_controller"; <<<<<<<<<<<<<<<<<<<<< review this line of code
/* had to installl Async Storage b/c React Native desn't have localStorage 
Resources:
> https://reactnative.dev/docs/security?utm_source=chatgpt.com
> https://react-native-async-storage.github.io/async-storage/docs/api
>> https://react-native-async-storage.github.io/async-storage/docs/install
 >>>>>>> ran in frontend: npm install @react-native-async-storage/async-storage
----- -------- -------- --------- ------- 
On iOS, use CocoaPods to add the native RNAsyncStorage to your project:
 > > > npx pod-install <<<< didn't need to install - Expo hanldes linking automatically 
other: https://developer.apple.com/documentation/security (keychain for iOS)--- come bckt - mayb try??
*/

import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

// API_BASE URL
const API_BASE =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8000/api/v1" //backend local URL
    : "https://api-2-9-e2cec0d79dfb.herokuapp.com/api/v1/parks"; // <-- Hardcoded for production/ my heroku api <<<

const API_URL = `${API_BASE}/auth`;
/**
 * https://react-native-async-storage.github.io/async-storage/docs/usage
 * exmple ----------
 * const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('my-key', jsonValue);
  } catch (e) {
    // saving error
  }
}; combien w/ lectuer notes
 */

// SINGUP | Register New User --------------- async/await=> returns promise

const signup = async (email, password) => {
  // trycatch blck / clean error hndlingh
  try {
    // await response from AsyncStorage - sedn POST req to API -req.body(params)
    const res = await axios.post(`${API_URL}`, { email, password });
    // conditoianls to check for data accessTokens
    if (res.data.accessToken) {
      // IF res..exist -> SIGNUP succesful! --> stores NEw user to AsyncStorage / parseJSON
      await AsyncStorage.setItem("user", JSON.stringify(res.data));
    }
    // return "user" object/ data ^^^^^^^^^^^^^^^^^^^^^^^^^^
    return res.data;
  } catch (error) {
    // cosnoel log for troiblkshooting
    console.error("Error with Signup", error);
    return null; //null=> helps so function deosn't return undefined <<
  }
};

// LOGIN | Auth- > Current User --------------- async/await=> returns promise
const login = async (email, password) => {
  // trycatch blck / clean error hndlingh
  try {
    // await response from AsyncStorage - sedn POST req to API -req.body(params)
    const res = await axios.post(`${API_URL}/signin`, {
      email,
      password,
    });
    // conditoianls to check for data accessTokens
    if (res.data.accessToken) {
      // IF res..exist -> SIGNUP succesful! --> stores NEw user to AsyncStorage / parseJSON
      await AsyncStorage.setItem("user", JSON.stringify(res.data));
    }
    // return "user" object/ data ^^^^^^^^^^^^^^^^^^^^^^^^^^
    return res.data;
  } catch (error) {
    // cosnoel log for troiblkshooting
    console.error("Login Failed ---", error);
    return null; //null=> helps so function deosn't return undefined <<
  }
};

// LOG OUT | clsoe/ End Current Session  --------=-=-=-=-=-=-=-=-=-=-=-=-=-=-

const logout = async () => {
  try {
    // will remove user from current Session
    await AsyncStorage.removeItem("user");
  } catch (error) {
    // conseo; lgo
    console.error("Logout Failed --", error);
  }
};

// const logout = () => {
//   //replaced w/ asyncStorage
//   AsyncStorage.removeItem("user");
// };

// GET CURRENT USER  --- ------------

const getCurrentUser = async () => {
  // trycatch blck
  try {
    // Go to storage and grab that curent User
    const user = await AsyncStorage.getItem("user");
    // retuns (user)^^ and parse-- else, not available=> null
    return user ? JSON.parse(user) : null;
  } catch (error) {
    //log errro
    console.error("No user found --", error);
    return null; //none/n/a
  }
};

const authService = {
  signup,
  login,
  logout,
  getCurrentUser,
};

export default authService;
