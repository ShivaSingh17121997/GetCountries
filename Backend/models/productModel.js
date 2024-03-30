const mongoose = require("mongoose");

const porductSchema = mongoose.Schema({
    name: String,
    price: String,
    description: String
}, {
    versionKey: false
})

const productModel = mongoose.model("product", porductSchema);

module.exports = {
    productModel
}