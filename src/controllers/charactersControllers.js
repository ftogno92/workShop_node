module.exports = {
    getCharacters: (req, res) => res.send('En teoria devuelve todos los caracteres, pero no se sabe todavía quien nos da los caracteres.'),
    getCharacter: (req, res) => {
        const id = req.params.id;

        res.send('En teoria devuelve el caracterer con el id proporcionado, pero no se sabe todavía que nos da los caracteres.')
    },
    createCharacter: (req, res) => res.send('En teoria deberia crear un caracter, pero no se sabe todavía que nos da los caracteres.'),
    deleteCharacter: (req, res) => res.send('En teoria deberia eliminar caracterer con el id proporcionado.')

};