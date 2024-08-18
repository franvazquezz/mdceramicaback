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
    assistance: {
      type: DataTypes.ARRAY(DataTypes.BOOLEAN),
      defaultValue: [false, false, false, false],
      allowNull: true
    },
    classDay: {
      type: DataTypes.DATEONLY,
      defaultValue: null
    },
    classPrice: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    classPaid: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
    ovenName: {
      type: DataTypes.DECIMAL,
      allowNull: true,
    },
    ovenPrice: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    ovenPaid: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
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
    materialPaid: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
  })
}