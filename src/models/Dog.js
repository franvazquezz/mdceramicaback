const { DataTypes, BOOLEAN } = require('sequelize');


module.exports = (sequelize) => {
    sequelize.define('dog', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false
        }, 
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        height_min: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        height_max: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        weight_min: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        weight_max: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        life_span: {
            type: DataTypes.STRING,
        },
        img: {
            type: DataTypes.STRING,
        },
        createdInDb: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
        }
      },
      {timestamps: false}
      );
    
    };