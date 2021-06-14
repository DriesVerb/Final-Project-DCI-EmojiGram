const express = require(`express`);
require("dotenv").config();

const app = express();

// Database + connect
const connectDB = require("./config/db");
connectDB();

// internal middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.get("/", (req, res) => {
  res.send("API Running");
});

// server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
