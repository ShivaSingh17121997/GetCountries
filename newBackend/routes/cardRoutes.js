const express = require("express");
const { ImageModel } = require("../model/cardmodel");
const path = require("Path")
const cardRoutes = express.Router();
const multer = require("multer")


const storage = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, "./uploads") // Directory to save uploaded files
    },
    filename: (req, res, cb) => {
        const ext = path.extname(file.originalname);
        cb(null, "image-" + Date.now()+ext); // rename uploaded file
    }
});

const upload = multer({ storage });

// handle file upload endpoint;

cardRoutes.post("/upload", upload.single("image"), async (req, res) => {
    try {
        const { filename, path } = req.file;

        //save image metadata to mongodb
        const newImage = new ImageModel({ filename, path });
        await newImage.save();
        res.json({ msg: "image uploaded successfully", image: newImage });


    } catch (error) {
        res.status(500).json({ error: error.smessasge })
    }

})

module.exports = {
    cardRoutes
}