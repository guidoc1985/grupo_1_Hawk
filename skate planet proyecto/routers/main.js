const express = require("express");
const router = express.Router();

const mainController = require("../controllers/main-controllers");

router.get("/", mainController.home);
router.get("/search", mainController.search);
router.get("/login/", mainController.login);
router.get("/product-cart/", mainController.productCart);
router.get("/detail/", mainController.detail);
router.get("/register/", mainController.register);
router.get("/ingresar-productos/", mainController.ingresarProductos)
router.post('/register',  (req,res)=>{
    res.render(path.resolve(__dirname,'./views/login.ejs'));
});
router.post('/login',  (req,res)=>{
    res.render(path.resolve(__dirname,'./views/register.ejs'));
});
module.exports = router;