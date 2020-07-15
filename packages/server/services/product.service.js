var mongoose = require("mongoose");
const product = require("../model/product").Products;

async function getProducts(params, res) {
  try {
    let data = await product.find().lean();
    res.status(200).json(data);
  } catch (error) {
    return res.status(500).json(error);
  }
}

// Below methods are for modifying data in product list
async function create(e, res) {
  try {
    let data = {};
    console.log("create method");

    let duplicateProduct = await product.findOne({ title: e.title });
    if (duplicateProduct) {
      data.duplicateProduct = true;
      return res.status(400).json({ data, message: "Duplicate product" });
    }
    data = await product.create(e);
    data.duplicateProduct = false;
    return res.status(200).json({ data, message: "Product created" });
  } catch (error) {
    return res.status(500).json(error);
  }
}

async function update(e, res) {
  try {
    let data = await product.findOneAndUpdate({ title: e.title }, e).lean();
    return res.status(200).json({ data, message: "Product updated" });
  } catch (error) {
    return res.status(500).json({ error, message: "Something went wrong updating product" });
  }
}

async function deleteProduct(title, res) {
  try {
    console.log("deleted", title);

    let data = await product.findOneAndDelete({ title: title }).lean();
    res.status(200).json({ data, message: "Product deleted" });
  } catch (error) {
    return res.status(500).json(error);
  }
}

module.exports = {
  getProducts,
  create,
  update,
  deleteProduct
};
