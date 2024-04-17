const mongoose = require("mongoose");

const lighthouseSchema = new mongoose.Schema({
  lighthouse_type: {
    type: String,
    required: [true, "Light House type is required"],
    minlength: [1, "Type must be at least 1 character"],
    maxlength: [50, "Type must be at most 50 characters"]
  },
  size: {
    type: String,
    required: [true, "Light House Size is required"],
    minlength: [1, "Size must be at least 1"]
  },
  cost: {
    type: Number,
    required: [true, "Light House Cost is required"],
    min: [1, "Cost must be at least 1"]
  }
});

module.exports = mongoose.model("Lighthouse", lighthouseSchema);
