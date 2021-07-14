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

  .connect(
    'mongodb+srv://admin:admin1234@fbw41.txtbm.mongodb.net/finalProject?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    }
  )

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
