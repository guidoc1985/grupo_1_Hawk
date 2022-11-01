module.exports = (sequelize, dataTypes) => {
    let alias = 'Tablasecundaria';
    let cols = {
        id_categorias: {
            type: dataTypes.BIGINT(11),
            primaryKey: true,
            allowNull: false,
        },
        // created_at: dataTypes.TIMESTAMP,
        // updated_at: dataTypes.TIMESTAMP,
        nombre: {
            type: dataTypes.STRING(30),
            allowNull: true
        }
        
    };
    let config = {
        tableName: "categorias",
        timestamps: false
        
    };
    const Tablasecundaria = sequelize.define(alias, cols, config); 

    Tablasecundaria.associate = function (models) {
        Tablasecundaria.hasMany(models.Producto, { // models.Movie -> Movies es el valor de alias en movie.js
            as: "productos",
            foreignKey: 'id_categorias',
            timestamps: false
        })
    }

    return Tablasecundaria
};