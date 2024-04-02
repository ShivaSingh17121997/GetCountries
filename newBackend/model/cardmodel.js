const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
    filename: String,
    path: String
}, {
    versionKey: false
});

const ImageModel = mongoose.model('Image', imageSchema);

module.exports = {
    ImageModel
};
