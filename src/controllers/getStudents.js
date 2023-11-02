const { getStudentsClassesDb } = require('./functions')

const getAllStudents = async (req, res) => {
    try {
        const { name } = req.query;
        let allStudents = await getStudentsClassesDb();

        if (name) {
            const filteredStudents = allStudents.filter(ele => ele.name.toLowerCase().includes(name.toLowerCase()));

            if (filteredStudents.length) {
                res.status(200).send(filteredStudents);
            } else {
                res.status(404).send(`No existe alumno con el nombre ${name}`);
            }
        } else {
            res.status(200).send(allStudents);
        }
    } catch (error) {
        res.status(500).send(error);
    }
};
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
