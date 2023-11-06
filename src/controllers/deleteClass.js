const { Class } = require('../db');

const deleteClass = async (req, res) => {
  try {
    const { classId } = req.params;

    // Verificar si la clase existe
    const existingClass = await Class.findByPk(classId);
    if (!existingClass) {
      return res.status(404).json({ error: 'Class not found' });
    }

    // Eliminar la clase
    await existingClass.destroy();

    res.status(200).json({ message: 'Class deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {deleteClass};