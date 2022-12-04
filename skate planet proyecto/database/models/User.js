module.exports = (sequelize, dataTypes) => {
    let alias = 'User';
    let cols = {
        idUsuario: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
        // created_at: dataTypes.TIMESTAMP,
        // updated_at: dataTypes.TIMESTAMP,
        first_name: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        last_name: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        email: {
            type: dataTypes.STRING,
            allowNull: false
        },
        password: {
            type: dataTypes.STRING,
            allowNull: false
        },
        image: {
            type: dataTypes.STRING,
            allowNull: false
        },
        url_img: {
            type: dataTypes.VIRTUAL,
            get(){
                return "http://localhost:3000/images/users/" + this.image;
            },
        },
    };
    let config = {
        tableName: "usuarios",
        timestamps: false
        
    };
    const User = sequelize.define(alias, cols, config); 

    User.associate = function (models) {
        User.belongsToMany(models.Producto, { // models.Movie -> Movies es el valor de alias en movie.js
            as: "productos",
            through: 'productos_comprados',
            foreignKey: 'id_productos',
            otherKey: 'id_usuarios',
            timestamps: false
        })
    }

    return User
};