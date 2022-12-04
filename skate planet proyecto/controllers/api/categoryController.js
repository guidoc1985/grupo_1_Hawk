const db = require("../../database/models");
const sequelize = db.sequelize;

const categoryController = {
    list: (req, res) => {
      db.Tablasecundaria.findAll().then((category) => {
        res.status(200).json({ 
            total: category.length,
            data: category,
            status:200 
    });
         });
},
show: (req, res) => {
    db.Tablasecundaria.findByPk(req.params.id)
    .then((category) => {
    return  res.status(200).json({ 
       id: category.id_categorias,
       nombre: category.nombre,
      
       status:200 
});
    });
  }
}

module.exports = categoryController;