const {Dog, Temperament} = require('../db');


const postDogs = async (req, res) =>{
    
    try {
        const {name, height_min, height_max, weight_min, weight_max, img, life_span, temperaments, createdInDb} = req.body
        if(!name || !height_min || !height_max || !weight_min || !weight_max || !life_span)return res.status(400).send('Missing data');
        let tempArray = temperaments;
        let nameN = name[0].toUpperCase().concat(name.substring(1));
        const tempsPromises = tempArray.map(async (tempName) => {
            const tempMatch = await Temperament.findOne({where: {name: tempName}});
            return tempMatch ? {id: tempMatch.id, name: tempMatch.name}
            : Error(`temperament ${tempName} isn't in DB`)
        });
        const matchedTemps = await Promise.all(tempsPromises);
        const newDogRaw = {
            name: nameN,
            weight_min,
            weight_max,
            height_min,
            height_max,
            life_span,
            img,
            createdInDb,
        }

        const newDogDB = await Dog.create(newDogRaw);
        console.log('matchedTemps', matchedTemps);
        console.log('perro', newDogDB);
        await newDogDB.addTemperaments(matchedTemps.map((temp)=> temp.id));
        res.status(200).send(`Breed ${nameN} has been created successfully`);
    } catch (error) {
        res.status(500).send('Failed post');
    }
}

module.exports = {postDogs}