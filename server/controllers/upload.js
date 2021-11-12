const multer = require("multer");
const {Places, Images} = require("../models");


let place_id;

//creating the middleware for multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./images");
    },
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}_${Date.now()}_${file.originalname}`);
    }
});

const upload = multer({storage: storage});

const uploadFiles = upload.array("image", 10);


const uploadImages = async (req, res, next) => {
    try{   
        const place = {
            nome: req.body.nome,
            cognome: req.body.cognome,
            title: req.body.title,
            citta: req.body.citta,
            descrizione: req.body.descrizione,
            indirizzo: req.body.indirizzo,
        }
        await Places.create(place).then(result => {place_id = result.id});

        for (let i = 0; i < req.files.length; i++) {
            const image = {
                image: req.files[i].filename,
                place_id: place_id
            }
            await Images.create(image);
        }
        res.send()
    }
    catch(err){
        console.log(err);
    }
}


const getImages = async (req, res, next) => {
    try{
        const listOfPlaces = await Places.findAll({
            include: [{// Notice `include` takes an ARRAY
                model: Images
              }]
        });
        res.json(listOfPlaces);
    }catch(err){
        console.log("err");
    }
}

const getImagesById = async (req, res, next) => {
    const placeId = req.params.placeId;
    const images = await Images.findAll({ where: {place_id: placeId} });
    res.json(images)
}

module.exports = {
    uploadImages: uploadImages,
    getImages: getImages,
    uploadFiles: uploadFiles,
    getImagesById: getImagesById,
  };