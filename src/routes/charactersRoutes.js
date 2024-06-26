const express = require('express');
const router =  express.Router();

router.get('/characters', (req, res)=> res.send ('En teoria devuelve todos los caracteres, pero no se sabe todavía quien nos da los caracteres.'));

router.get('/character/:id', (req, res)=> {
    const id = req.params.id;

    res.send ('En teoria devuelve el caracterer con el id proporcionado, pero no se sabe todavía que nos da los caracteres.')
});

    

router.post('/characters/create', (req, res)=> res.send ('En teoria deberia crear un caracter, pero no se sabe todavía que nos da los caracteres.'));

router.delete('character/;id/delete', (req, res)=> res.send ('En teoria deberia eliminar caracterer con el id proporcionado.'));

//exporta el router
module.exports = router;