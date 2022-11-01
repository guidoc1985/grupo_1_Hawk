const express = require('express');

const router = express.Router();
const { body } = require("express-validator");
const usersController = require('../controllers/usersController');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

const validaciones = [
  body("firstName")
    .notEmpty()
    .withMessage("El nombre es obligatorio"),
    body("lastName")
    .notEmpty()
    .withMessage("El apellido es obligatorio"),
    body("email")
    .notEmpty()
    .withMessage("El email es obligatorio").bail()
    .isEmail().withMessage("Debes escribir un correo válido"),
    body("password")
    .notEmpty()
    .withMessage("El pass es obligatorio"),
   
]
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
router.get("/register", guestMiddleware, usersController.create);
router.post("/create", upload.single("fotoProducto"), validaciones, usersController.store);
router.get("/login", guestMiddleware ,  usersController.loginView);
router.post("/login", usersController.loginAction);
router.get('/profile/', authMiddleware ,  usersController.profile);
router.get('/logout', usersController.logoutAction);
router.get("/detail/:id", usersController.detail);
router.get("/edit/:id", usersController.edit);
router.put("/edit/:id", upload.single("fotoProducto"), usersController.update);
// router.post('/', validacionesUser ,  usersController.loginAction);

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


// router.get('/main', usersController.mainView);
// router.get('/perfil', usersController.perfilView);

// router.get('/logout', usersController.logoutAction );

module.exports = router;
