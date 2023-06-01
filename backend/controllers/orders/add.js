const { Order } = require("../../models/order");

const add = async (req, res) => {
  const result = await Order.create(req.body);
  res.status(201).json(result);
};

module.exports = add;
