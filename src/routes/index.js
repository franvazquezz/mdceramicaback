// const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = require('express').Router();
const { deleteClass } = require('../controllers/deleteClass');
const {getAllStudents, getStudentById } = require('../controllers/getStudents');
const { postClass } = require('../controllers/postClass');
const { postStudent, updateStudent, deleteStudent } = require('../controllers/postStudent');
const { updateClass } = require('../controllers/putClass');
// const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/students', getAllStudents);
router.get('/students/:id', getStudentById);
router.put('/students/:id', updateStudent);
router.delete('/students/:id', deleteStudent);
router.post('/students', postStudent);
router.post('/students/:id/classes', postClass);
router.put('/students/:studentId/classes/:classId', updateClass);
router.delete('/students/:studentId/classes/:classId', deleteClass);
module.exports = router;
