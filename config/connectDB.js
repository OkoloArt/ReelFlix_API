const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/movieDB");
    console.log("Successfully connected to database");
  } catch (error) {
    console.error(`Database connection failed: ${error}`);
  }
};

module.exports = connectDB;
