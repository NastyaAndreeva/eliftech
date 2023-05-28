const { Order } = require("../../models/order");

const getAll = async (_, res) => {
  const result = await Order.find();
  console.log("result: ", result);
  res.json(result);
};

module.exports = getAll;
