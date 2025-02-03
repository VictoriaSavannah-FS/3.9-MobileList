import axios from "axios";
import authHeader from "./authHeader";

// const API_URL = "/parks";
// need to be explicit and tell what we want
const API_BASE =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8000/api/v1" // Local backend
    : "https://api-2-9-e2cec0d79dfb.herokuapp.com/api/v1"; // Production backend

const API_URL = `${API_BASE}/parks`;

const getAllPrivateParks = async () => {
  try {
    // invokes/calls authHeader function to fetch token! :)
    const headers = await authHeader();
    // sends GET req-> API to auth. User<<<
    const res = await axios.get(`${API_URL}`, { headers });
    return res.data;
  } catch (error) {
    //  log errors
    console.error("Error fetching parks", error);
    // console.error("Error fetching private parks", error);
    return null; //no udenfiend errors
  }
  // return axios.get(API_URL, { headers: authHeader() });
};

const parksService = {
  getAllPrivateParks,
  // build as we're going to build other services on here
};

export default parksService;
