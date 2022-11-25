const db = require("../../database/models");
const sequelize = db.sequelize;

const usersController = {
    list: (req, res) => {
      db.User.findAll().then((users) => {
      return  res.status(200).json({ 
         total: users.length,
         data: users,
         status:200 
 });
      });
    },

    show: (req, res) => {
        db.User.findByPk(req.params.id)
        .then((user) => {
        return  res.status(200).json({ 
           id: user.idUsuario,
           nombre: user.first_name,
           apellido: user.last_name,
           imagen: user.image,
           status:200 
   });
        });
      }
}

module.exports = usersController;