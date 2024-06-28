const { getAll, deleteOne } = require('../models/charactersModels')

const getAllCharacters = async (params)=>{

    const result = await getAll() 

    return(result);
}
const deleteCharacter = async (params)=>{

    const result = await deleteOne({id:params}) //paso como objeto el valor para que quede bien la sintaxis de mysql 

    return(result);
}
module.exports = {
    deleteCharacter,
    getAllCharacters
}