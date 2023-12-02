require("dotenv").config();

const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Database connected.");
  } catch (error) {
    console.log("Error:", error);
  }
};

module.exports = connectDb