const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const scientistsRouter = require("./routes/scientists");
require("dotenv/config");

const app = express();
const port = process.env.port || 3000;

// connecting to MongoDB
mongoose
  .connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

// middleware for parsing JSON
app.use(express.json());

// middleware for cors
app.use(cors());

// Set the scientists router on the '/scientists' path
app.use("/scientists", scientistsRouter);

// creating a listenng port
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
