import AsyncStorage from "@react-native-async-storage/async-storage";

// chaneg to async fucntion ---

const authHeader = async () => {
  // try catch blck for error hanlding
  // got itnto AsyncStorage(updated for iOS) to get USer
  try {
    // await Aync Call then 2) parseJSN USr data
    const user = await AsyncStorage.getItem("user");
    // conditional| chcks for ?usr exists -> parses to JSON if NOT -> null./undefined
    const parsedUser = user ? JSON.parse(user) : null;
    // coditional if (parsedUser) exists + has (accessToken) ----> from authServices
    if (parsedUser && parsedUser.accessToken) {
      // return {"Authorization": user.token} ----  when provtected route - send toke through header
      return { Authorization: `Bearer ${parsedUser.accessToken}` };
      // when provtected route - send toke through header
    } else {
      // retusrns Empty object {} cuz no user/token found
      return {};
    }
  } catch (error) {
    // consoele log ---- error
    console.error("Error w/ retrieving Auth Header:", error);
    return {};
    // retusrns Empty object {} ON ERROR ---- :(
  }
};
export default authHeader;
