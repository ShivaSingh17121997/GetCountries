const express = require("express");
const app = express();
const fs = require("fs");
const port = 4000;
const multer = require("multer");

const path = require("path")
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"))
const uploadDirectory = "C:\Users\91737\Documents\Desktop\GetCountries/imageUploadmultr"

app.use(express.urlencoded({ extended: false }))
app.use(express.json());
// app.use(express.static(__dirname+"uploads"))

// create the destination directory;

if (!fs.existsSync(uploadDirectory)) {
    fs.mkdirSync(uploadDirectory, { recursive: true });
}




// set up multer for file upload
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
       return cb(null, '/uploads')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix)
    }
})



const upload = multer({ storage });


// handle file end point

app.get("/", (req, res) => {
    return res.render("homepage")
})


app.post("/upload", upload.single("profileImage"), (req, res) => {
    console.log(req.body);
    console.log(req.file);

    return res.redirect("/")

});





app.listen(port, (err) => {
    if (err) {
        console.log("soneting is wrong server in not running");
    } else {
        console.log('server is running at port', port)
    }
})