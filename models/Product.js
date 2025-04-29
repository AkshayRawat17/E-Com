const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Product Name is Mandatory"],
  },
  maincategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Maincategory",
    required: [true, "Product Maincategory Id is Mandatory"],
  },
  subcategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Subcategory",
    required: [true, "Product Subcategory Id is Mandatory"],
  },
  brand: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Brand",
    required: [true, "Product Brand Id is Mandatory"],
  },
  description: {
    type: String,
    default: "",
  },
  color: {
    type: String,
    required: [true, "Product Color is Mandatory"],
  },
  size: {
    type: String,
    required: [true, "Product Size is Mandatory"],
  },
  basePrice: {
    type: Number,
    required: [true, "Product Base Price is Mandatory"],
  },
  discount: {
    type: Number,
    required: [true, "Product Discount is Mandatory"],
  },
  finalPrice: {
    type: Number,
    required: [true, "Product Final Price is Mandatory"],
  },
  stock: {
    type: Boolean,
    default: true,
  },
  stockQuantity: {
    type: Number,
    required: [true, "Product Stock Quantity is Mandatory"],
  },
  pic: [
    {
      type: String,
    },
  ],
  active: {
    type: Boolean,
    default: true,
  },
});
const Product = new mongoose.model("Product", ProductSchema);

module.exports = Product;