const express = require("express");
const { connection } = require("./db");
const { userRoutes } = require("./routes/userroutes");
const { todoRoutes } = require("./routes/productRoutes");
const cors = require("cors");
const { cardRoutes } = require("./routes/cardRoutes");


const port = 9000;

const app = express();
app.use(cors())
app.use(express.json())

app.use("/user", userRoutes);
app.use("/todo", todoRoutes);
app.use("image", cardRoutes );


app.listen(port, async (err) => {
    if (err) {
        console.log("Bhaiya galti hoe g firr se check kara");
        return false;
    }
    else {
        await connection
        console.log("connected to the port ", port)
    }
})

