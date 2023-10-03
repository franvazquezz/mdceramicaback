const { Student, Class } = require('../db');


const postStudent = async (req, res) => {

    try {
        const { name, className, classPrice, ovenPrice, materialName, materialPrice } = req.body;
        if (!name || !className || !classPrice ||  !ovenPrice || !materialName || !materialPrice) return res.status(400).send('Missing data');
        let nameN = name[0].toUpperCase().concat(name.substring(1));
        const newStudentRaw = {
            name: nameN,
        }
        const newClass = await Class.create({
            className,
            classPrice,
            ovenPrice,
            materialName,
            materialPrice,
        });
        const newStudent = await Student.create(newStudentRaw);
        await newStudent.addClass(newClass);
        res.status(200).send(`La clase ${className} ha sido creada para ${nameN}`);
    } catch (error) {
        res.status(500).send('Failed post');
    }
}
module.exports = { postStudent }