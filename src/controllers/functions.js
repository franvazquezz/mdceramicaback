const { Class, Student } = require("../db")
//traemos todos las que vienen de la db
const getStudentsClassesDb = async () => {
    return await Student.findAll({
        include: {
            model: Class,
            attributes: ['id', 'className', 'classPrice','classPaid', 'ovenPrice', 'materialName', 'materialPrice'],
            through: {
                attributes: [],
            }
        }
    })
}

const getClassesDb = async () => {
    return await Class.findAll()
}

module.exports = { getStudentsClassesDb, getClassesDb}