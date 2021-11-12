const express = require ("express");
const router = express.Router();
const uploadController = require("../controllers/upload");




// creating endpoint for the API
router.get("/places", uploadController.getImages);
router.get("/:placeId", uploadController.getImagesById);

router.post("/places", uploadController.uploadFiles, uploadController.uploadImages);

module.exports = router;