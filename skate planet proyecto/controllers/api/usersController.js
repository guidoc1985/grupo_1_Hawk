const db = require("../../database/models");
const sequelize = db.sequelize;

const usersController = {
    list: (req, res) => {
      db.User.findAll().then((users) => {
        res.status(200).json({ users });
      });
    }
}

module.exports = usersController;