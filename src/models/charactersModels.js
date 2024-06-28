const{ conn } = require('../config/conn');

const getAll = async() =>{
    try {
        const [rows] = await conn.query('SELECT * FROM characters;');
        return rows
    } catch (err) {
        const error = {
            isError: true,
            messege: `no pudimos recuperar los datos por: ${err}`
        }
        return error;
    }
};

const deleteOne = async(id) =>{
    try {
        const [rows] = await conn.query('DELETE FROM characters WHERE ?;', id); // en el ? se pasa el objeto de charactersService.js ---> deleteCharacter
        return rows
    } catch (err) {
        const error = {
            isError: true,
            messege: `no pudimos borrar los datos seleccionados por: ${err}`
        }
        return error;
    }
};

module.exports = {
    getAll,
    deleteOne
}