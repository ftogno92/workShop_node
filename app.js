// De esta manera se crea un servidor express
const express = require('express');
const app = express();

const PORT = 4001;
//importo las rutas de charactersRoutes en una variable
const mainRoutes = require('./src/routes/mainRoutes');
const charactersRoutes = require('./src/routes/charactersRoutes');


//crea el middelware de routes para que se puedan buscar las rutas creadas en charactersRoute 
app.use('/', mainRoutes);
app.use('/api', charactersRoutes);


app.listen(PORT, ()=>console.log(`Servidor corriendo en http://localhost:${PORT}`));