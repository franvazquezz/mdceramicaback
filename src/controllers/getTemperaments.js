const URL = 'https://api.thedogapi.com/v1/breeds/';
const {API_KEY} = process.env
const axios = require('axios');
const {Temperament} = require('../db');

const getTemperaments = async (req, res) => {
    try {
        const {data} = await axios(`${URL}?api_key=${API_KEY}`);
        let tempsApi = [];
        data.forEach(dog => {tempsApi.push(dog.temperament)});
        let tempArray = tempsApi.toString();
        tempArray = tempArray.split(',');
        tempArray = tempArray.map(ele=> ele.trim());
        tempArray = [...new Set(tempArray)];
        tempArray.sort();
        tempArray.shift();
        const tempsDB = (tempArray) => {
            for (let i = 0; i < tempArray.length; i++) {
                Temperament.findOrCreate({where: {name: tempArray[i]}})
            }
        }
        tempsDB(tempArray)
        tempArray.length ? res.status(200).json(tempArray) : Temperament ? res.status(200).json(Temperament) : Error.message;
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

module.exports = {getTemperaments}