const express = require("express");
const router = express.Router();

const controller = require("../../controllers/api/categoryController");

router.get("/", controller.list);
router.get("/:id", controller.show);

module.exports = router;
