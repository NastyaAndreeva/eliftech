const { Schema, model } = require("mongoose");
const Joi = require("joi");

const { handleSaveErrors } = require("../helpers");

const order = {
  name: {
    type: String,
    required: [true, "Set name for contact"],
  },
  image: {
    type: String,
    unique: true,
  },
  quantity: {
    type: Number,
  },
  price: {
    type: Number,
    default: false,
  },
};

const orderSchema = new Schema({
  orders: [order],
});

orderSchema.post("save", handleSaveErrors);

let joiOrder = Joi.object().keys({
  name: Joi.string().required(),
  image: Joi.string().required(),
  quantity: Joi.number().required(),
  price: Joi.number(),
});

const addSchema = Joi.object({
  orders: Joi.array().items(joiOrder),
});

const orderSchemas = { addSchema };

const Order = model("order", orderSchema);

module.exports = { Order, orderSchemas };
