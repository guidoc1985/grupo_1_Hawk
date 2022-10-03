const express = require('express');

const router = express.Router();
const { validationResult } = require("express-validator");

const validacionesUser = require("../middlewares/userValidaciones");
const usersController = require('../controllers/usersController');

// ************ MULTER ************
const multer = require("multer");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images/users");
  },
  filename: function (req, file, cb) {
    console.log({ file });

    // cb(null, file.fieldname + "-" + Date.now());
    cb(null, Date.now() + "" + file.originalname);
  },
});

const upload = multer({ storage });

/* GET users listing. */

router.get("/", usersController.homeUsers);
router.get("/create", usersController.create);
router.post("/create", upload.single("fotoProducto"), usersController.store);
router.get("/", usersController.loginView);
router.post('/', validacionesUser ,  usersController.loginAction);

// router.post("/", validacionesUser, usersController.loginAction, (req, res) => {
//   const errores = validationResult(req);

//   console.log(errores);

//   console.log("////////////////////////////////////////////");

//   if (errores.isEmpty()) {
//     res.render("/perfil");
//   }

//   // if(errores.error.length > 0){
//   //   res.send("salio todo bien")
//   // }

//   const objetoDeErrores = errores.mapped();

//   console.log({ objetoDeErrores });

//   // console.log(req.body);
//   res.render("users", { errores: objetoDeErrores });
// });


router.get('/main', usersController.mainView);
router.get('/perfil', usersController.perfilView);

router.get('/logout', usersController.logoutAction );

module.exports = router;
