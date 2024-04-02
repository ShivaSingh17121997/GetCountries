const express = require("express");

const todoRoutes = express.Router();

const { todoModel } = require("../model/producemodel");

//create
todoRoutes.post("/add", async (req, res) => {
    // console.log(req.body)
    try {
        const todo = await new todoModel(req.body).save();
        res.json({ msg: "todo bani g bhai nacha ab", todo })

    } catch (error) {
        res.json({ msg: "kuch galag ha bro pata karo" })
    }

})

// read 
todoRoutes.get("/", async (req, res) => {
    const todos = await todoModel.find();
    res.send(todos)
})


// PATCH route to update a todo item by ID
todoRoutes.patch('/update/:id', async (req, res) => {
    const todoId = req.params.id;
    const updatedFields = req.body;

    try {
        // Find the todo item by ID and update it with the new fields
        const updatedTodo = await todoModel.findByIdAndUpdate({ _id: todoId }, updatedFields, { new: true });

        if (!updatedTodo) {
            return res.status(404).json({ error: 'Todo not found' });
        }

        res.json({ message: 'Todo updated successfully', updatedTodo });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// delete 
todoRoutes.delete("/delete/:id", async (req, res) => {
    const todoId = req.params.id

    try {
        const deleteTodo = await todoModel.findByIdAndDelete(todoId)
        if (!deleteTodo) {
            return res.status(404).json({ error: 'Todo not found' });
        }
        res.json({ message: 'Todo deleted successfully', deletedTodo: deleteTodo });
    } catch (err) {
        res.status(500).json({ error: err.message })
    }

})

// todoRoutes.delete("/delete/:id", async (req, res) => {
//     const todoId = req.params.id;

//     try {
//         const deleteTodo = await todoModel.findByIdAndDelete(todoId);
//         if (!deleteTodo) {
//             return res.status(404).json({ error: 'Todo not found' });
//         }
//         res.json({ message: 'Todo deleted successfully', deletedTodo: deleteTodo });
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// });

// update 





module.exports = {
    todoRoutes
}