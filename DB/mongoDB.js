const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.DB_CONECTION);

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('la base de datos se conecto con exito')
});