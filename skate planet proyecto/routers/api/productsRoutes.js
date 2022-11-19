const express = require("express");
const router = express.Router();

const controller = require("../../controllers/api/productsController");

router.get("/", controller.list);

module.exports = router;

