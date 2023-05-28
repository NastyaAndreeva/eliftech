const { Schema, model } = require("mongoose");
const Joi = require("joi");

const { handleSaveErrors } = require("../helpers");

const productSchema = new Schema({
  name: {
    type: String,
    required: [true, "Set name for contact"],
  },
  image: {
    type: String,
    unique: true,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    default: false,
  },
});

productSchema.post("save", handleSaveErrors);

const addSchema = Joi.object({
  name: Joi.string().required(),
  image: Joi.string().required(),
  description: Joi.string().required(),
  price: Joi.number(),
});

const schemas = { addSchema };

const Product = model("product", productSchema);

module.exports = { Product, schemas };
