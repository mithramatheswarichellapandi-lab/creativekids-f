const mongoose = require("mongoose");

const enquirySchema = new mongoose.Schema({
  parentName: {
    type: String,
    required: true,
  },
  parentPhone: {
    type: String,
    required: true,
  },
  childName: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model("Enquiry", enquirySchema);