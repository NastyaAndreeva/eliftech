const express = require("express");

const ctrl = require("../../controllers/contacts");

const { ctrlWrapper } = require("../../helpers");

const { schemas } = require("../../models/contact");

const validateBody = require("../../middlewares");

const router = express.Router();

router.get("/", ctrlWrapper(ctrl.getAll));

router.post("/", validateBody(schemas.addSchema), ctrlWrapper(ctrl.add));

module.exports = router;
