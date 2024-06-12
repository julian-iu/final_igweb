const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({

    nombre: {
        type: String,
    },
    email: {
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

module.exports = mongoose.model('clienteModelo', clienteSchema);
