const express = require('express');
require('./DB/mongoDB');
require ('dotenv').config();

const proyectoRuta = require('./src/routes/proyectoRuta');

const app = express();
app.use(express.json());

async function main() {
    await app.listen (process.env.PORT);
    console.log(`servidor en puerto ${process.env.PORT}, Correctamente`);
}

app.get('/', (req,res) => {
    res.send('Conexion Exitosa!');
})


app.use('/proyecto', proyectoRuta);

main();