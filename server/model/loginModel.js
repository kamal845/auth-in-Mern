const mongoose = require("mongoose");
const loginSchema = mongoose.Schema({
  Email: {
    type: String,
    required: true,
    unique: true,
  },
  Password: {
    type: String,
    required: true,
  },
  token: {
    type: String,
  }
});
module.exports = mongoose.model("login", loginSchema);