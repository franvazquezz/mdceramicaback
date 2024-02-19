const { Class, Student } = require("../db");
//traemos todos las que vienen de la db
const getStudentsClassesDb = async () => {
  return await Student.findAll({
    include: {
      model: Class,
      attributes: [
        "id",
        "assistance",
        "className",
        "classPrice",
        "classDay",
        "classPaid",
        "ovenPrice",
        "ovenPaid",
        "materialName",
        "materialPrice",
        "materialPaid",
      ],
      through: {
        attributes: [],
      },
    },
  });
};

const getClassesDb = async () => {
  return await Class.findAll();
};

module.exports = { getStudentsClassesDb, getClassesDb };
