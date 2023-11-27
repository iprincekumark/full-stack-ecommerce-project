const express = require("express");
const router = express.Router();
const User = require("../models/userModel"); // Import your data model

// POST route for user registration
router.post("/api/signup", async (req, res) => {
  try {
    const { firstName, lastName, email, password, adminCode, admin } = req.body;

    // Create a new user document
    const user = new User({
      firstName,
      lastName,
      email,
      password,
      adminCode,
      admin
    });
    await user.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
});

module.exports = router;
