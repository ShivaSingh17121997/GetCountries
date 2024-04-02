const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    todo: String,
    completed: Boolean
}, {
    versionKey: false
});

const todoModel = mongoose.model("todos", todoSchema);



module.exports = {
    todoModel
}


