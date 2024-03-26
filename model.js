const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema({
  title: {
    type: String,
    enum: ["plot", "flat", "bungalow"],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  bedrooms: {
    type: Number,
    required: function () {
      return this.title !== "plot";
    },
  },
  bathrooms: {
    type: Number,
    required: function () {
      return this.title !== "plot";
    },
  },
  area: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Property = mongoose.model("Property", propertySchema);

module.exports = { Property };
