const { Product } = require("../../models/product");

const getAll = async (_, res) => {
  const result = await Product.find();
  res.json(result);
};

module.exports = getAll;
