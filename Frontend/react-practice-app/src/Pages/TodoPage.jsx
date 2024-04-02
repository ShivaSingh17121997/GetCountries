import React, { useEffect, useState } from 'react'

export default function TodoPage() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");
    console.log("inlut", input)

    const handleTodo = (e) => {
        e.preventDefault();
        let obj = {
            todo: input,
            completed: false
        }

        fetch("http://localhost:9000/todo/add", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setInput("")
                // window.location.reload();
            })
    }

    useEffect(() => {
        fetch("http://localhost:9000/todo")
            .then(res => res.json())
            .then((todo) => {
                setTodos(todo)
                console.log(todo)

            })


    }, [])

    //delete    
    const handleDelete = () => {


        fetch("http://localhost:9000/todo/delete", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setInput("")
                // window.location.reload();
            })

    }


    return (
        <div>
            <h1>TodoPage</h1>
            <form onSubmit={handleTodo} action="">
                <input value={input} onChange={(e) => setInput(e.target.value)} style={{ padding: "20px", width: "500px", fontSize: "20px", borderRadius: "5px" }} type="text" placeholder='Write your Todo here bro...' />
                {/* <input  type='radio' placeholder='completed' /> */}
                <button> Save</button>

            </form>

            <div>
                {todos.map((item) => {
                    return (
                        <div key={item._id} >
                            <p>{item.todo}</p>
                            <p>{item._id}</p>
                            <button onClick={handleDelete} >Delete</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
