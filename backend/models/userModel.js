const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username:String,
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("usermodel", userSchema)
