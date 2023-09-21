// const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = require('express').Router();
const {getAllDogs, getById} = require('../controllers/getDogs');
const { postDogs } = require('../controllers/postDogs');
const {getTemperaments} = require('../controllers/getTemperaments');
// const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/dogs', getAllDogs);
router.get('/dogs/:id', getById);
router.post('/dogs', postDogs);
router.get('/temperaments', getTemperaments);

module.exports = router;
