const {getAll} = require('./functions')

//traemos a todos los perros, y si hay un name en query, traemos los que tengan ese nombre, completo o parcial, si no hay name treamos todos. siempre usando a getAll de functions que es nuestro array de objetos.
const getAllDogs = async (req, res) => {
    try {
        const {name} = req.query
        let allDogs = await getAll()

        if(name) {
            const raza = allDogs.filter(ele => ele.name.toLowerCase().includes(name.toLowerCase()))
            raza.length ? res.status(200).send(raza) : res.status(404).send('There is no such breed')
        } else {
            res.status(200).send(allDogs)
        }
    } catch (error) {
        res.status(500).send(error)
    }
}
const getById = async (req, res)=> {
    try {
        const {id} = req.params
        let allDogs = await getAll()
        if(id){
            let idPerro = allDogs.filter(ele => ele.id == id)
            idPerro.length ? res.status(200).send(idPerro) : res.status(404).send('Breed not found')
        }
    } catch (error) {
        res.status(500).send(error)
    }
}
module.exports = {getAllDogs, getById}
