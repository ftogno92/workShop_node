const { getAllCharacters, deleteCharacter } = require('../service/chaaractersService')

module.exports = {
    getCharacters: async(req, res) =>{
        const data = await getAllCharacters();

        res.send(data);
    },
    getCharacter: (req, res) => {
        const id = req.params.id;
        const {order,filter} = req.query;

        console.log(order);
        console.log(filter);

        res.send('En teoria devuelve el caracterer con el id proporcionado, pero no se sabe todavía que nos da los caracteres.')
    },
    createCharacter: (req, res) => {
        const data = req.body;
        res.send(data);
    },
    deleteCharacter: (req, res) => {
        const charID = req.params.id; //pido el id que quiero eliminar

        const result = deleteOne(charID ); 
        res.send(result);

    }
};