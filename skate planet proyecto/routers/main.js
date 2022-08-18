const express = require("express");
const router = express.Router();

const mainController = require("../controllers/main-controllers");

router.get("/", mainController.home);
router.get("/login/", mainController.login);
router.get("/productCart/", mainController.productCart);
router.get("/ProductDetail/", mainController.productDetail);
router.get("/register/", mainController.register);

module.exports = router;