const { Product } = require("../../models/product");

const getAll = async (_, res) => {
  const result = await Product.find();
  console.log("result: ", result);
  res.json(result);
};

module.exports = getAll;
