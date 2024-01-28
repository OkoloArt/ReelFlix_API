require("dotenv").config();
const express = require("express");
const connectDb = require("./config/connectDB");
const movieRoute = require("./routes/movie");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 3000;

connectDb();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(movieRoute);

app.get("/*", (req, res) => {
  res.status(404).json({
    message:
      "Are you lost in cyberspace? Don't worry, even astronauts get lost in space sometimes. How about navigating back to reality with our homepage? If that fails, consider asking your pet cat for directions. 🚀🐾",
  });
});

mongoose.connection.on("open", () => {
  app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
  });
});
