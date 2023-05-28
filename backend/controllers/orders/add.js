const { Order } = require("../../models/order");

const add = async (req, res) => {
  console.log("req.body: ", req.body);
  const result = await Order.create(req.body);
  res.status(201).json(result);
};

module.exports = add;
