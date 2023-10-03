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
        }
    }, {
        timestamps: true
    })
}