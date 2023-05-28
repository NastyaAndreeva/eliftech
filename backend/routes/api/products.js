const express = require("express");

const ctrl = require("../../controllers/products");

const ctrlOrders = require("../../controllers/orders");

const { ctrlWrapper } = require("../../helpers");

const { schemas } = require("../../models/product");

const { orderSchemas } = require("../../models/order");

const { validateBody } = require("../../middlewares");

const router = express.Router();

router.get("/", ctrlWrapper(ctrl.getAll));

router.post("/", validateBody(schemas.addSchema), ctrlWrapper(ctrl.add));

router.get("/orders", ctrlWrapper(ctrlOrders.getAll));
router.post(
  "/orders",
  //   validateBody(orderSchemas.addSchema),
  ctrlWrapper(ctrlOrders.add)
);

module.exports = router;
