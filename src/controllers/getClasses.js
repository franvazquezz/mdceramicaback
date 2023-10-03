const { getClassesDb } = require('./functions')

const getAllClasses = async (req, res) => {
    try {
        let allClasses = await getClassesDb();
        res.status(200).send(allClasses);
    } catch (error) {
        res.status(500).send(error);
    }
};

const getClassById = async (req, res) => {
    try {
        const { id } = req.params;
        let allClasses = await getClassesDb();
        if (id) {
            let idClass = allClasses.find(ele => ele.id == id);
            idClass ? res.status(200).send(idClass) : res.status(404).send('Class not found');
        }
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = { getAllClasses, getClassById };