const express = require ("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const {Places} = require("../models");

//creating the middleware for multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./images");
    },
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
        console.log(req.file);
    }
});

const upload = multer({storage: storage});

// creating endpoint for the API
router.get("/", async (req, res) => {
    try{
        const listOfPlaces = await Places.findAll();
        res.json(listOfPlaces);
  }catch(err){
        console.log("err");
  }
  
});



router.post("/",  upload.single("image"), async (req, res) => {   
    try{
        const place = {
            nome: req.body.nome,
            cognome: req.body.cognome,
            title: req.body.title,
            citta: req.body.citta,
            image: req.file.filename,
            descrizione: req.body.descrizione,
            indirizzo: req.body.indirizzo,
        }
        await Places.create(place);
        console.log(req.file)
        res.send();
  }catch(err){
        console.log("err");
  }
  
});

module.exports = router;