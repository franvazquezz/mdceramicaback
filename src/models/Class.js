const { DataTypes, BOOLEAN } = require('sequelize');


module.exports = (sequelize) => {
  sequelize.define('class', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    className: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    classPrice: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    ovenPrice: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    materialName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    materialPrice: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  })
}