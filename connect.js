require("dotenv").config();
const mongoose = require("mongoose");

const connectdb = async (uri) => {
  await mongoose.connect(uri);
  console.log("connected to Mongo");
};

module.exports = connectdb;
