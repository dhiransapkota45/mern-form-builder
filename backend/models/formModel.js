const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
  formname: {
    type: String,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "usermodel",
  },
  formFields: [ mongoose.Schema.Types.Mixed],
});

module.exports = new mongoose.model("formmodel", formSchema);
