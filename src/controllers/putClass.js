const { Student, Class } = require('../db');


const updateClass = async (req, res) => {
  try {
    const { studentId, classId } = req.params;
    const { className, classPrice, classDay, classPaid, ovenPrice, ovenPaid, materialName, materialPrice, materialPaid } = req.body;

    // Verificar si la clase existe
    const existingClass = await Class.findByPk(classId);
    if (!existingClass) {
      return res.status(404).json({ error: 'Class not found' });
    }

    // Actualizar la clase
    await existingClass.update({
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

    res.status(200).json({ message: 'Class updated successfully', class: existingClass });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


module.exports = { updateClass }