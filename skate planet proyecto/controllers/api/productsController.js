const db = require("../../database/models");
const sequelize = db.sequelize;

const productsController = {
    list: (req, res) => {
      db.Producto.findAll().then((products) => {
        res.status(200).json({ 
            total: products.length,
            data: products,
            status:200 
    });
         });
},

show: (req, res) => {
    db.Producto.findByPk(req.params.id)
    .then((product) => {
    return  res.status(200).json({ 
       id: product.idProducto,
       nombre: product.nombre,
       descripcion: product.descripcion,
       imagen: product.image,
       status:200 
});
    });
  }
}

module.exports = productsController;