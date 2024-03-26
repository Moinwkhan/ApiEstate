require("dotenv").config();
const connectDB = require("./connect");
const { Property } = require("./model");
const jsonData = require("./data.json");

const start = async () => {
  try {
    await connectDB(process.env.uri);
    await Property.create(jsonData.properties);
    console.log("Successfully stored data in Database");
  } catch (error) {
    console.log(error);
  }
};

start();
