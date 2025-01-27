const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");

const app = express();
app.use(cors());

const PORT = process.env.PORT || 8000;

// importingi Park Routes
const ParkRouter = require("./routes/ParkRoutes");

//getting the databse URL from .env variables
const DATABASE_URL = process.env.DATABASE_URL;

// Connecting to MongoDB
mongoose
  .connect(DATABASE_URL)
  .then(() => console.log("Database Connection Established ----"))
  .catch((error) => {
    console.error("Database Connection Error:", error);
    process.exit(1); // Graceful Exit:) --> database connection fails
  });

// MiddleWare ----- parse incoming JSON data
app.use(express.json());
// ParkRouter --> for API points

app.use("/api/v1/parks", ParkRouter);

// NOTE TO SELF ---- look in the react build folder for static build
app.use(express.static(path.join(__dirname, "../reactjs/build")));

// for any routes not defined by the api, assume it's --> direct request to a client-side route
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../reactjs/build", "index.html"));
});

// Start server & Lsitn on the X Port
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
