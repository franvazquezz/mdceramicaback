// const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = require('express').Router();
const {getAllStudents, getStudentById } = require('../controllers/getStudents');
const { postClass } = require('../controllers/postClass');
const { postStudent } = require('../controllers/postStudent');
// const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/students', getAllStudents);
router.get('/students/:id', getStudentById);
router.post('/students', postStudent);
router.post('/students/:id/classes', postClass);

module.exports = router;
