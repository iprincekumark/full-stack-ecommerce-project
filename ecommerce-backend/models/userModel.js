<<<<<<< HEAD
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  adminCode: String,
  admin: Boolean,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
=======
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  adminCode: String,
  admin: Boolean,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
>>>>>>> c2c92d253a01eeafb9ce431eeca44f30b9dda365
