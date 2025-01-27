const express = require("express");
const router = express.Router();
// import / reference model
const Park = require("../models/Parks");
// help me track the sceham used- torubleshoot issue
console.log("Park Schema Paths:", Park.schema.paths);

// Middleware ------------------- get Park by ID
// mking it Async b/c request to server

const getPark = async (req, res, next) => {
  // let park;
  try {
    const park = await Park.findById(req.params.id);
    // ID that will refernce and send back to use / URL

    if (!park) {
      return res.status(404).json({ message: "Park not found" });
    }
    req.park = park; // Attach to the request object
    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  // middleware wnat to run in order
  // res.park = park;
};

// GET ALL -----------  Parks
router.get("/", async (req, res) => {
  try {
    const parks = await Park.find();
    res.json(parks);
  } catch (error) {
    res.status(500).json({ message: error.message }); //from server
  }
});

// GET ONE ----------  Park by ID
router.get("/:id", getPark, (req, res) => {
  res.json(req.park);
});

// POST --------------  Create a New Park
router.post("/", async (req, res) => {
  console.log("Incoming POST Request:", req.body); //log incoming req.body
  const park = new Park({
    name: req.body.name,
    location: req.body.location,
    description: req.body.description,
  });
  try {
    const newPark = await park.save();
    res.status(201).json(newPark);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// PATCH ---------------  Update a Park by ID
router.patch("/:id", getPark, async (req, res) => {
  console.log("PATCH request body:", req.body); // Log the incoming request body
  if (req.body.name != null) {
    req.park.name = req.body.name;
  }
  if (req.body.location != null) {
    req.park.location = req.body.location;
  }
  if (req.body.description != null) {
    req.park.description = req.body.description;
  }
  try {
    const updatedPark = await req.park.save();
    res.json(updatedPark);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
// PUT REQUEST ----------- Replace a Park by ID

router.put("/:id", getPark, async (req, res) => {
  try {
    // req the params/props from da
    req.park.name = req.body.name || req.park.name;
    req.park.location = req.body.location || req.park.location;
    req.park.description = req.body.description || req.park.description;

    const updatedPark = await req.park.save();
    res.json(updatedPark);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
// DELETE -------------------   Park by ID
router.delete("/:id", getPark, async (req, res) => {
  try {
    await req.park.deleteOne();
    res.json({ message: "Park removed successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
