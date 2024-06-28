// De esta manera se crea un servidor express
const express = require('express');
const app = express();
require('dotenv').config(); 

const PORT = process.env.APP_PORT || 4000;
//importo las rutas de charactersRoutes en una variable
const mainRoutes = require('./src/routes/mainRoutes');
const charactersRoutes = require('./src/routes/charactersRoutes');
//para poder traducir los datos obtenidos y asi mostrarlos en el body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//crea el middelware de routes para que se puedan buscar las rutas creadas en charactersRoute 
app.use('/', mainRoutes);
app.use('/api', charactersRoutes);


app.listen(PORT, ()=>console.log(`Servidor corriendo en http://localhost:${PORT}`));