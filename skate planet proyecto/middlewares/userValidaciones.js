const { body } = require("express-validator");

const validaciones = [
  body("firstName")
    .notEmpty()
    .withMessage("El nombre es obligatorio"),
    body("lasttName")
    .notEmpty()
    .withMessage("El apellido es obligatorio"),
    body("email")
    .notEmpty()
    .withMessage("El email es obligatorio"),
    body("password")
    .notEmpty()
    .withMessage("El pass es obligatorio"),
    
    // .isString()
    // .withMessage("Tiene que ser un texto")
    // .bail()


];

module.exports = validaciones;
