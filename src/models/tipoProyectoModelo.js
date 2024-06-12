const mongoose = require('mongoose');

const tipoProyectoShema = new mongoose.Schema({
    nombre: {
        type: String,
    },
    ensayo: {
        type: String,
    },
    articulo: {
        type: String,
    },
    monografia: {
        type: String,
    },
    trabajoPreGrado: {
        type: String,
    },
    trabajoFinalE: {
        type: String,
    },
    fechaCreacion: {
        type: Date,
        default: Date.now
    },
    fechaActualizacion: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('tipoProyectoModelo', tipoProyectoShema);