const express = require("express");
const router = express.Router();

const controller = require("../../controllers/api/usersController");

router.get("/", controller.list);
router.get("/lastUser", controller.show);

module.exports = router;

