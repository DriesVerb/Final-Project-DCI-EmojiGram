const fs = require("fs");

const mongoose = require("mongoose");
require("dotenv").config;

const dotenv = require("dotenv");

const Emoji = require("../models/Emoji");
const { dirname } = require("path");

dotenv.config({ path: "./.env" });

const DB = process.env.DB_LINK;

// add your own db link
mongoose
<<<<<<< HEAD
  .connect("mongodb+srv://admin:admin21@cluster0.cdluj.mongodb.net/final-project", {
=======

  .connect("", {

  
>>>>>>> 4d64a0262c5b51acf4ac5fd74be2b768f91c4094
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })

  .then(() => {
    console.log(`DB connection successful`);
  });

const emojis = JSON.parse(fs.readFileSync(`${__dirname}/emoji.json`, "utf-8"));

const importData = async () => {
  try {
    await Emoji.create(emojis);
    console.log("Data successful");
  } catch (err) {
    console.error(err);
  }
  process.exit;
};

if (process.argv[2] === "--import") importData();

// node import-emoji-data.js --import
