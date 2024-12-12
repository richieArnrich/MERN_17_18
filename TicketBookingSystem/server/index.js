const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors"); //cross-origin-resource-sharing
// import routes
const userRoutes = require("./routes/userRoutes");
const placeRoutes = require("./routes/placeRoutes");

const connect = () => {
  try {
    mongoose.connect("mongodb://localhost:27017/TicketManagement");
    console.log("connected to database");
  } catch (err) {
    console.log(err.message);
  }
};
app.use(cors());
// used to parse json requests
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("server is working..");
});
// call user routes
app.use("/users", userRoutes);
app.use("/places", placeRoutes);
const PORT = 8000;
app.listen(PORT, () => {
  console.log("server is listening on port ", PORT);
  connect();
});
