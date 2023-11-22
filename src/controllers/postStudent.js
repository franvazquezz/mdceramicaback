const { Student, Class } = require('../db');


const postStudent = async (req, res) => {
    try {
        const { name, birthday, telephone, day, timetable } = req.body;
        if (!name) {
            return res.status(400).json({ error: 'Missing data' });
        }

        const nameFormatted = name.charAt(0).toUpperCase() + name.slice(1);

        // Create a new student
        const newStudent = await Student.create({ name: nameFormatted, birthday, telephone, day, timetable});


        res.status(201).json({
            message: `Student ${nameFormatted} created successfully`,
            student: newStudent
        });
    } catch (error) {
        alert(res.data.error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const updateStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, birthday, telephone, day, timetable } = req.body;

        // Verificar si el estudiante existe
        const existingStudent = await Student.findByPk(id);
        console.log(existingStudent)
        if (!existingStudent) {
            return res.status(404).json({ error: 'Student not found' });
        }

        // Actualizar el nombre del estudiante
        const updatedName = name ? name[0].toUpperCase().concat(name.substring(1)) : existingStudent.name;
        await existingStudent.update({ name: updatedName, birthday, telephone, day, timetable });

        res.status(200).json({ message: 'Student updated successfully', student: existingStudent });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const deleteStudent = async (req, res) => {
    try {
        const { id } = req.params;

        // Verificar si el estudiante existe
        const existingStudent = await Student.findByPk(id);
        if (!existingStudent) {
            return res.status(404).json({ error: 'Student not found' });
        }

        // Eliminar el estudiante
        await existingStudent.destroy();

        res.status(200).json({ message: 'Student deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


module.exports = { postStudent, updateStudent, deleteStudent };
