const express = require("express");

const app = express();
const port = 8090;
const connection = require("./db");
const { userRoutes } = require("./Routes/userRoutes");
const { productRoutes } = require("./Routes/productRoute");

app.use(express.json())
app.use("/users", userRoutes);
app.use("/products", productRoutes)


app.listen(port, async (err) => {
    if (err) {
        console.log("something went wrong");
        return false;
    } else {
        await connection
        console.log("server is running on the port", port)
    }
})