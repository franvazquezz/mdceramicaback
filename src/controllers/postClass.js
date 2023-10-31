const { Student, Class } = require('../db');


const postClass = async (req, res) => {
  try {
    const { id } = req.params; // Obtener el valor directamente
    console.log(id);
    const { className, classPrice, classDay, classPaid, ovenPrice, ovenPaid, materialName, materialPrice, materialPaid } = req.body;

    // Verificar si el estudiante existe
    const existingStudent = await Student.findByPk(id);
    if (!existingStudent) {
      return res.status(404).json({ error: 'Student not found' });
    }

    // Crear la nueva clase
    const newClass = await Class.create({
      className,
      classPrice,
      classDay,
      classPaid,
      ovenPrice,
      ovenPaid,
      materialName,
      materialPrice,
      materialPaid
    });

    // Asociar la nueva clase al estudiante existente
    await existingStudent.addClass(newClass);

    res.status(201).json({ student: existingStudent, class: newClass });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = { postClass }