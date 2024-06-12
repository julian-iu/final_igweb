const mongoose = require('mongoose');

const universidadShema = new mongoose.Schema({
    nombre: {
        type: String,
    },
    direccion: {
        type: String,
    },
    telefono: {
        type: Number,
    },
    fechaCreacion: {
        type: Date,
        default: Date.now
    },
    fechaActulizacion: {
        type: Date,
        default: Date.Now
    }
});

module.exports = mongoose.model('universidadModelo', universidadShema);