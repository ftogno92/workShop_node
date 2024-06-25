const express = require('express');
const app = express();

const PORT = 4001;


app.get('/', (req, res)=> res.send('Hola mundo desde NODE!'))

app.listen(PORT, ()=>console.log(`Servidor corriendo en http://localhost:${PORT}`))