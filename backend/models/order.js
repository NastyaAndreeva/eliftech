const { Schema, model } = require("mongoose");
const Joi = require("joi");

const { handleSaveErrors } = require("../helpers");

const order = {
  name: {
    type: String,
    required: [true, "Set name"],
  },
  image: {
    type: String,
  },
  quantity: {
    type: Number,
  },
  price: {
    type: Number,
    default: false,
  },
};

const customerInfo = {
  name: {
    type: String,
    required: [true, "Set name"],
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  address: {
    type: String,
    default: false,
  },
};

const orderSchema = new Schema({
  orders: [order],
  customer: customerInfo,
  shop: {
    type: String,
  },
  total: {
    type: Number,
  },
  date: {
    type: String,
  },
});

orderSchema.post("save", handleSaveErrors);

let joiOrder = Joi.object().keys({
  name: Joi.string().required(),
  image: Joi.string().required(),
  quantity: Joi.number().required(),
  price: Joi.number(),
});

let customer = Joi.object().keys({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
  address: Joi.string().required(),
});

const addSchema = Joi.object({
  orders: Joi.array().items(joiOrder),
  customer: customer,
  total: Joi.number(),
  date: Joi.string(),
  shop: Joi.string(),
});

const orderSchemas = { addSchema };

const Order = model("order", orderSchema);

module.exports = { Order, orderSchemas };
