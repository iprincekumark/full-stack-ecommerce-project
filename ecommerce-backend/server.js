const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcrypt");

const app = express();
const port = 5000;
const dbUrl =
  "mongodb+srv://godfather:hawkzues@godfather.agitykp.mongodb.net/hawkzues"; // Update with your MongoDB connection URL

// Connect to MongoDB
mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

// MongoDB connection error handling
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to the database");
});

// Define User schema and model
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  firstName: String,
  lastName: String,
  adminCode: String,
  admin: Boolean,
  cart: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
});

const User = mongoose.model("User", userSchema);

// Define Product schema and model
const productSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: String,
  imageUrl: String,
});

const Product = mongoose.model("Product", productSchema);

// Use bodyParser to parse JSON data
app.use(bodyParser.json());

// Enable CORS for the frontend application
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);

// Sign In Route
app.post("/api/signin", async (req, res) => {
  const { email, password, admin } = req.body;

  const user = await User.findOne({ email });

  if (user) {
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {
      if (admin && user.admin) {
        res.json({
          message: "Admin Login Successful",
          firstName: user.firstName,
          redirect: "/dashboardadmin",
        });
      } else if (!admin) {
        res.json({
          message: "User Login Successful",
          firstName: user.firstName,
          redirect: "/dashboarduser",
        });
      } else {
        res.status(401).json({ error: "Login Unsuccessful" });
      }
    } else {
      res.status(401).json({ error: "Login Unsuccessful" });
    }
  } else {
    // Email not found in the database, send a 404 status code and redirect to /signup
    res.status(404).json({ error: "Email not found" });
  }
});





// Sign-up route
app.post("/api/signup", async (req, res) => {
  try {
    const { adminCode, ...userData } = req.body;
    let isAdmin = false;

    // Check if the adminCode matches the specific code
    if (adminCode === "ADMIN#TRUE#101") {
      isAdmin = true;
    }

    const user = new User({ ...userData, admin: isAdmin });

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(user.password, saltRounds);
    user.password = hashedPassword;

    await user.save();
    res.json({ message: "User registered successfully", admin: isAdmin });
  } catch (error) {
    console.error("Error while saving user:", error);
    res.status(500).json({ error: "User registration failed" });
  }
});


// Get all products route
app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.error("Error while fetching products:", error);
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

// Add a new product route
app.post("/api/add-product", async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.json({ message: "Product registered successfully" });
  } catch (error) {
    console.error("Error while saving product:", error);
    res.status(500).json({ error: "Product registration failed" });
  }
});

// Delete a product route
app.delete("/api/remove-product/:productId", async (req, res) => {
  const productId = req.params.productId;

  try {
    // Find and remove the product from the database by its ID
    const result = await Product.findByIdAndDelete(productId);

    if (!result) {
      console.error("Product not found with ID: " + productId);
      res.status(404).json({ error: "Product not found" });
    } else {
      console.log("Product removed successfully with ID: " + productId);
      res.json({ message: "Product removed successfully" });
    }
  } catch (error) {
    console.error("Error while removing product with ID " + productId + ":", error);
    res.status(500).json({ error: "Product removal failed" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
