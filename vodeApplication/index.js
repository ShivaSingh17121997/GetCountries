const express = require('express')
const fs = require('fs')

const app = express();
//middleware
app.use(express.json())


app.get("/", (req, res) => {
    res.send('Home page')
})

// Create

app.post('/add/user', (req, res) => {

    let data = JSON.parse(fs.readFileSync("./db.json", 'utf-8'));
    res.send('work in pregress')
    //2 add the data into users array
    data.users.push(req.body)
    console.log(data);

    //write the data in json
    fs.writeFileSync('./db.json', JSON.stringify(data));
    res.send('new user has been added')

})

app.post('/add/blog', (req, res) => {
    let data = JSON.parse(fs.readFileSync('./db.json', 'utf-8'));
    console.log(data)
    //2 add blog
    data.blogs.push(req.body)
    console.log(data)
    fs.writeFileSync('./db.json', JSON.stringify(data))
    res.send("new blog is added")
})


//READ

app.get('/users', (req, res) => {
    let data = JSON.parse(fs.readFileSync('./db.json', 'utf-8'))
    res.send(data.users)

})






app.listen(8080, () => {
    console.log('server is running at port 8080')
})