const mongoose = require("mongoose")

const submissionSchema = new mongoose.Schema({
  form: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "formmodel",
  },
  submitter: {
    type: String,
    required: true,
  },
  values: {type:mongoose.Schema.Types.Mixed},
});

module.exports = new mongoose.model("submission", submissionSchema)