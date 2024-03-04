const express = require("express");
const mongoose = require("mongoose")

const app = express();

app.get("/", (req, res) => {
    try {
        res.status(200).json({ message: "Ka ho tumly e t Home Page ba" })

    } catch (err) {
        res.status(400).json({ err: err.message })
    }
})


app.listen(8080, async () => {
    try { 
        await mongoose.connect("mongodb://127.0.0.1:27017/")
        console.log("")
        console.log("Running the server at port 8080")

    }
    catch (err) {

    }

    // om namah shivay
})