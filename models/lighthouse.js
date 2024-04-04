const mongoose = require("mongoose");

const lighthouseSchema = new mongoose.Schema({
  lighthouse_type: String,
  size: String,
  cost: Number
});

module.exports = mongoose.model("lighthouse", lighthouseSchema);
