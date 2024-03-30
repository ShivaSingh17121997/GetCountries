const express = require("express");
const { userModel } = require("../models/userModel");
const userRoutes = express.Router();

userRoutes.post("/reg", async (req, res) => {
    try {
        console.log(req.body)
        const user =await userModel.create({...req.body})
        res.status(200).json("New user is added",)
        console.log(user)
    } catch (err) {
        res.json({ msg: err.message })
    }
});

userRoutes.post("/login", (req, res) => {
    // Implement login logic here
});

module.exports = {
    userRoutes
};
