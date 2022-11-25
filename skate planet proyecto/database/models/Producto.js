module.exports = (sequelize, dataTypes) => {
    let alias = 'Producto';
    let cols = {
      
        idProducto: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
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
            type: dataTypes.STRING,
            allowNull: true
        },
        id_categorias: dataTypes.INTEGER
    };
    let config = {
        tableName: "productos",
        timestamps: false
        
    };
    const Producto = sequelize.define(alias, cols, config);

    // Producto.associate = function (modelos) {
    //     Producto.belongsTo(modelos.Tablasecundaria, {
    //       as: "categorias",
    //       foreignKey: "id_categorias",
    //     });

    // Producto.associate = function (models) {
    //     Producto.belongsTo(models.Tablasecundaria, { 
    //         as: "categorias",
        
    //         foreignKey: 'id_categorias',
            
    //         timestamps: false
    //     })
    // }

    return Producto
}
