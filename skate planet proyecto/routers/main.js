const express = require("express");
const router = express.Router();

const mainController = require("../controllers/main-controllers");

router.get("/", mainController.home);
router.get("/login/", mainController.login);
router.get("/product-cart/", mainController.productCart);
router.get("/Product-detail/", mainController.productDetail);
router.get("/register/", mainController.register);
router.get("/formAdmin/", mainController.formAdmin)

module.exports = router;