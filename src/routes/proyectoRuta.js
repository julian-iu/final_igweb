const express = require('express');
const router = express.Router();
const proyectoControlador = require('../controllers/proyectoControlador');

router.get('/', proyectoControlador.getallProjects);
router.get('/:id', proyectoControlador.getProyectoById);
router.post('/', proyectoControlador.addProyecto);
router.put('/:id', proyectoControlador.getProyectoById);

module.exports = router;