const axios = require("axios")
const {Dog, Temperament} = require("../db")
const {API_KEY} = process.env
//traemos todos las razas que vienen de la api
const getApi = async () => {
    const url = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)
    const api = await url.data.map(ele => {
        return {
            id: ele.id,
            name: ele.name,
            height_min: Number(ele.height.metric.slice(0,2)),
            height_max: Number(ele.height.metric.slice(4)),
            weight_min: Number(ele.weight.metric.slice(0,2)),
            weight_max: Number(ele.weight.metric.slice(4)),
            life_span: ele.life_span,
            temperaments: ele.temperament,
            img: ele.image.url
        }
    })
    return api
}
//treamos las que vienen de la db
const getDb = async () => {
    return await Dog.findAll({
        include: {
            model: Temperament,
            attributes: ['name'],
            through: {
                attributes: [],
            }
        }
    })
}
//y las concatenamos en un array de objetos
const getAll = async () => {
    const apiInfo = await getApi()
    const dbInfo = await getDb()
    const totalInfo = apiInfo.concat(dbInfo)
    return totalInfo
}

module.exports = {getAll, getApi, getDb}