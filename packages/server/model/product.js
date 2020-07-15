const mongoose = require("mongoose");
const rFields = require("./rFields");

var ProductSchema = new mongoose.Schema(
  {
    title: rFields.rString,
    createdDate: rFields.dUDate,
    price: rFields.rNumber,
    description: rFields.dString,
  },
  {
    collection: "product"
  }
).index({ id: 1 });

const Products = mongoose.model("product", ProductSchema);

module.exports = { Products };
