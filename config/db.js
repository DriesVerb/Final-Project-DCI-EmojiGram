const mongoose = require("mongoose");
require("dotenv").config();
const db = process.env.DB_LINK; 

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      
    });
    mongoose.set('useFindAndModify', false);
    console.log(`MongoDB Connected...`);
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
