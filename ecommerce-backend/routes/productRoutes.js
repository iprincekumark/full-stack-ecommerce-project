<<<<<<< HEAD
const express = require("express");
const router = express.Router();
const Product = require("../models/productModel"); // Import your data model

// POST route for adding a product
router.post("/api/add-product", async (req, res) => {
  try {
    const { title, description, price, imageUrl } = req.body;

    // Create a new product document
    const product = new Product({
      title,
      description,
      price,
      imageUrl,
    });
    await product.save();

    res.status(201).json({ message: "Product registered successfully" });
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
});

module.exports = router;
=======
const express = require("express");
const router = express.Router();
const Product = require("../models/productModel"); // Import your data model

// POST route for adding a product
router.post("/api/add-product", async (req, res) => {
  try {
    const { title, description, price, imageUrl } = req.body;

    // Create a new product document
    const product = new Product({
      title,
      description,
      price,
      imageUrl,
    });
    await product.save();

    res.status(201).json({ message: "Product registered successfully" });
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
});

module.exports = router;
>>>>>>> c2c92d253a01eeafb9ce431eeca44f30b9dda365
