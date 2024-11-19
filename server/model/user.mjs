// const mongoose = require("mongoose");

import mongoose from "mongoose";

// const userSchema = new mongoose.Schema({
//   name: String,
//   email: String,
// });

// const user = mongoose.model("user", userSchema);

// module.exports = user;
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
});

const user = mongoose.model("user", userSchema);

export default user;
