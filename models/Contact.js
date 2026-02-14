const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true
  },
  phones: [String],
  socialMedia: {
    facebook: String,
    linkedin: String
  }
},{timestamps:true});

module.exports = mongoose.model("Contact", contactSchema);