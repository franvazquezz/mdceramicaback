const { DataTypes, BOOLEAN } = require('sequelize');


module.exports = (sequelize) => {
    sequelize.define('student', {
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
        birthday: {
            type: DataTypes.DATEONLY,
            defaultValue: null,
        },
        telephone: {
            type: DataTypes.STRING,
            defaultValue: null
        },
        day: {
            type: DataTypes.STRING,
            defaultValue: null
        },
    }, {
        timestamps: true
    })
}