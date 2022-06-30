const mongoose = require("mongoose");

require("dotenv").config();

// Update below to match your own MongoDB connection string in the .env file
const MONGO_URL = process.env.MONGO_URL;

// create a mongo db connection with mongoose
mongoose.connection.once("open", () => {
  console.log("MongoDB connection ready!");
});

mongoose.connection.on("error", (err) => {
  console.error(err);
});

const dbConnect = async () => {
  await mongoose.connect(MONGO_URL);
};

module.exports = {
  dbConnect,
};
