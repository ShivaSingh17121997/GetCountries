import React, { useState } from 'react';

export default function Todo() {
    const [input, setInput] = useState({ id: 0, name: "" });
    const [todo, setTodos] = useState([]);
    let data = []

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTodo = {id:todo.length+1 , name: input.name }; // Generate unique id using uuidv4
        setTodos([...todo, newTodo]);
        setInput({ id: null, name: "" }); // Reset input after adding todo

    };

    const handleDelete = (id) => {
        const updatedData = todo.filter((item) => item.id !== id)
        setTodos(updatedData);

    }
    console.log(data)

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={input.name} onChange={(e) => setInput({ ...input, name: e.target.value })} type="text" placeholder='Add todo...' />
                <button>Add</button>
            </form>

            {/* Display the todos */}
            <div>
                {todo.map((item, i) => (
                    <div style={{display:"flex", justifyContent:"space-evenly", gap:"10px", margin:"1"}} key={i}>
                        <input type="checkbox"  />
                        <p>{i + 1}</p>
                        <h4>{item.name}</h4>
                        <button onClick={() => handleDelete(item.id)} > Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
}
