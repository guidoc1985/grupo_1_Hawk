module.exports = (sequelize, dataTypes) => {
    let alias = 'Producto';
    let cols = {
        idProducto: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
        },
        // created_at: dataTypes.TIMESTAMP,
        // updated_at: dataTypes.TIMESTAMP,
        nombre: {
            type: dataTypes.STRING,
            allowNull: true
        },
        descripcion: {
            type: dataTypes.STRING,
            allowNull: true
        },
        price: {
            type: dataTypes.STRING,
            allowNull: true
        },
        image: {
            type: dataTypes.BLOB,
            allowNull: true
        },
        id_categorias: dataTypes.INTEGER
    };
    let config = {
        tableName: "productos",
        timestamps: false
        
    };
    const Producto = sequelize.define(alias, cols, config); 

    // Producto.associate = function (models) {
    //     Producto.belongsToMany(models.User, { 
    //         as: "usuarios",
    //         through: 'productos_comprados',
    //         foreignKey: 'id_usuario',
    //         otherKey: 'id_productos',
    //         timestamps: false
    //     })
    // }

    return Producto
};