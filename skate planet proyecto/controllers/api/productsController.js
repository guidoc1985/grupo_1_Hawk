const db = require("../../database/models");
const sequelize = db.sequelize;

const productsController = {
    list: (req, res) => {
      db.Producto.findAll().then((products) => {
        res.status(200).json({ products });
      });
    }
}

module.exports = productsController;