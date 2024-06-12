const mongoose = require('mongoose');

const etapaShema = new mongoose.Schema({
    nombre: {
        type: String,
    },
    anteproyecto: {
        type: String,
    },
    entregaParcial1: {
        type: String,
    },
    entregaParcial2: {
        type: String,
    },
    entregaFinal: {
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

module.exports = mongoose.model('etapaModelo', etapaShema);