const mongoose = require('mongoose');

const proyectoShema = new mongoose.Schema({
    numero: {
        type: Number, 
    },
    titulo: {
        type: String,
    },
    fechaIniciacion: {
        type: Date, 
        default: Date.now
    },
    fechaEntrega: {
        type: Date, 
        default: Date.now
    },
    valor: {
        type: Number,

    },
    fechaCreacion: {
        type: Date,
        default: Date.now
    },
    fechaActualizacion: {
        type: Date,
        default: Date.now
    },
    clienteaServir: {
        type: String,
    },
    universidad: {
        type: String,
    },
    tipoProyecto: {
        type: String,
    },
    etapaProyecto: {
        type: String,
    },
});

module.exports = mongoose.model('proyectoModelo', proyectoShema);