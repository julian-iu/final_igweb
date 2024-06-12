const proyecto = require('../models/proyectoModelo');

//ver all projects
exports.getallProjects = async (req, res) => {
    console.log('peticion a getProyectos...')
    try {
        const Proyecto = await proyecto.find();
        res.json(Proyecto);
    } catch (err) {
        res.status(500).json({ message: err.message});
    }
};

//buscar por id
exports.getProyectoById = async (req, res) => {
    try {
        const id = req.params.id;
        const Proyecto = await proyecto.findById(id);
        if (!Proyecto) {
            return res.status(404).json({ message: 'Proyecto no encotrado o inexistente....' });
        }
        res.json(Proyecto);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

//agregar
exports.addProyecto = async (req, res) => {
    try {
        const Proyectos = new proyecto(req.body);
        await Proyectos.save();
        res.status(201).json(Proyectos)
    } catch (err) {
        res.status(400).json({ message: err.message });
    };
};

//actualizar por su id
exports.updateProyecto = async (req, res) => {
    try {
        const idByProyecto = req.params.id;
        const updatedData = req.body;
        const  updatedProyecto = await proyecto.findByIdAndUpdate(
            {_id: idByProyecto},
            {$set: updatedData},
            {new: true}
        );
        if (!updatedProyecto) {
            return res.status(404).json({ message: 'Proyecto no encontrado o inexistente' });
        }
        res.json(updatedProyecto);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
