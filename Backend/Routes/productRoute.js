const express = require("express");

const productRoutes = express.Router();


//create
productRoutes.post('/create', (req, res) => {

})

//read
productRoutes.get('/', (req, res) => {
    res.send("are khusiya manao product mil gaya bhai log")
})


productRoutes.patch('/update', (req, res) => {

})

//delete
productRoutes.delete('/delete', (req, res) => {

})

module.exports = {
    productRoutes
};

