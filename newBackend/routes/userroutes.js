const express = require("express");

const userRoutes = express.Router();
const { userModel } = require("../model/usermodel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


userRoutes.post("/reg", async (req, res) => {
    const { email, password } = req.body;
    try {
        const secPassword = await bcrypt.hash(password, 10)
        const user = await userModel.create({ email, password: secPassword })
        res.status(200).json("New user is added",)
        console.log(user)
    } catch (err) {
        res.json({ msg: err.message })
    }
});

userRoutes.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        let user = await userModel.findOne({ email });
        if (user) {
            let decoded = await bcrypt.compare(password, user.password)
            if (decoded) {
                const token = jwt.sign({course:"backend"},"masai")
                    res.json({msg:"login sucessfull", token:token})
            } else {
                res.json("wrong credentials")
            }
        } else {
            res.json("User not found")
        }

    } catch (err) {
        res.json({ error: err.message });
    }

})

module.exports = {
    userRoutes
}