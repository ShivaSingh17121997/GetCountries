const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/mydatabase", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Define Schema and model for the database
const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});

const Todo = mongoose.model('Todo', todoSchema);

// Middleware
app.use(bodyParser.json());

// Routes
app.get('/todos', async (req, res) => {
    try {
        const todos = await Todo.find();
        res.json(todos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.post('/todos', async (req, res) => {
    const todo = new Todo({
        title: req.body.title,
        description: req.body.description,
        completed: req.body.completed || false
    });

    try {
        const newTodo = await todo.save();
        res.status(201).json(newTodo);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

app.listen(8080, () => {
    console.log('Server is running on port 8080');
});
