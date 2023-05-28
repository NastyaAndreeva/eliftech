const { Schema, model } = require("mongoose");
const Joi = require("joi");

const { handleSaveErrors } = require("../helpers");

const orderSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    photo: {
      type: String,
      unuque: true,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
      default: false,
    },
  },
  { versionKey: false, timestamps: true }
);

productSchema.post("save", handleSaveErrors);

const addOrderSchema = Joi.object({
  name: Joi.string().required(),
  photo: Joi.string().required(),
  description: Joi.string().required(),
  price: Joi.boolean(),
});

const schemas = { addSchema };

const Product = model("product", productSchema);

module.exports = { Product, schemas };
