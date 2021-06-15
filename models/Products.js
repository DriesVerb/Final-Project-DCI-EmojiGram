const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productsSchema = new Schema({
  title: String,
  picture: String,
  description: String,
  price: Number,
  ntfToken: Number,
});

const Products = mongoose.model("Products", productsSchema);
module.exports = Products;
