// ruta de ejemplo. Se utilizaria para guardar todas las rutas de una págWeb

const express = require('express');
const router = express.Router();

router.get('/', (req, res)=> res.send('Hola mundo desde NODE!'));

module.exports= router;
