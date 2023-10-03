//traemos a todos los perros, y si hay un name en query, traemos los que tengan ese nombre, completo o parcial, si no hay name treamos todos. siempre usando a getAll de functions que es nuestro array de objetos.
const { getStudentsClassesDb } = require('./functions')

const getAllStudents = async (req, res) => {
    try {
        let allStudents = await getStudentsClassesDb()
        res.status(200).send(allStudents)
    } catch (error) {
        res.status(500).send(error)
    }
}
const getStudentById = async (req, res) => {
    try {
        const { id } = req.params
        let allStudents = await getStudentsClassesDb()
        if (id) {
            let idStudent = allStudents.find(ele => ele.id == id)
            idStudent ? res.status(200).send(idStudent) : res.status(404).send('Student not found')
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = { getAllStudents, getStudentById }
