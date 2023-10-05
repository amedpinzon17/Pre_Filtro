const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();
app.use(express.json());


const corsOptions = {
  origin: 'http://localhost:3000', 
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204, 
};
app.use(cors(corsOptions));


const hamburguesas = require('./routes/routes.js');
const arepas = require('./routes/routes.js');
const Bebidas = require('./routes/routes.js');
const combos = require('./routes/routes.js');
const papas = require('./routes/routes.js');
const Carnes = require('./routes/routes.js');
const pronto = require('./routes/routes.js');
const picadas = require('./routes/routes.js');
const restaurantes = require('./routes/routes.js');



 
const url = process.env.DDBB256
const port = process.env.PORT256

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

.then(() => {
    console.log('conexion establecida');
    app.use('/burguers', hamburguesas);
    app.use('/arepas', arepas);
    app.use('/Bebidas', Bebidas);
    app.use('/combos', combos);
    app.use('/papas', papas);
    app.use('/carnes', Carnes)
    app.use('/pronto', pronto);
    app.use('/picadas', picadas);
    app.use('/restaurantes', restaurantes);    

    app.listen(port, () => {
        console.log(`conexion establecida en el puerto ${port}`);
    })
})

.catch((err) => {
    console.error('error de la conexion de la base de datos; ', err)
});




