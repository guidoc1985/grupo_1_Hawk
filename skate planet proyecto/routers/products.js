const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const path = require("path");

const validaciones = [
  body("nombre")
    .notEmpty()
    .withMessage("El nombre es obligatorio"),
    body("descripcion")
    .notEmpty()
    .withMessage("La descripción no puede estar vacía").bail()
    .isLength({ min:20})
    .withMessage("la descripción tiene que tener mínimo 20 caracteres"),
    body("image").custom((value, { req}) => {
      let file= req.file;
      let acceptedExtensions = [".jpg", ".jpeg", ".png", ".gif"];
      if (!file) {
        throw new Error("Tienes que subir una foto");
      } else {
        let fileExtension = path.extname(file.originalname);
        if (!acceptedExtensions.includes(fileExtension)) {
          throw new Error (`Las extensiones de archivo tienen que ser ${acceptedExtensions.join(", ")}`);
        }
      }
      return true
    })
    
]



// ************ MULTER ************
const multer = require("multer");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images/products");
  },
  filename: function (req, file, cb) {
    console.log({ file });

    // cb(null, file.fieldname + "-" + Date.now());
    cb(null, Date.now() + "" + file.originalname);
  },
});

const upload = multer({ storage });

// ************ Controller Require ************
const productsController = require("../controllers/productsController");

/*** RUTA GET A TODOS LOS PRODUCTOS O HOME ***/
router.get("/", productsController.home);

/*** RUTA GET A QUE MUESTRE LA INFO DE CREACION Y POST PARA QUE ENVIE LA INFO NUEVA ***/
router.get("/create", productsController.create);
router.post("/create", upload.single("fotoProducto"), validaciones, productsController.store);



// /*** RUTA GET QUE MUESTRA UN DETALLE DE PRODUCTO ***/
router.get("/detail/:id", productsController.detail);

// /*** RUTA GET EDIT PARA EDITAR Y POST PARA ENVIAR LA INFO ***/
router.get("/edit/:id", productsController.edit);
router.put("/edit/:id", upload.single("fotoProducto"), validaciones, productsController.update);

// /*** RUTA DELETE PARA BORRAR PRODUCTOS***/
router.delete("/delete/:id", productsController.destroy);





module.exports = router;