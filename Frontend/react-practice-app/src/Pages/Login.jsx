import React, { useState } from 'react'

export default function Login() {
    const [data, setData] = useState([])
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        fetch("http://localhost:9000/user/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
            .then((res) => res.json())
            .then((data) => {
                console.log("hey bhaiya hmm data hai",data)
                alert("bhai khusiya manao login successfull ho gaya")
                setData(data)
            })

        setEmail("");
        setPassword("");
    }
    console.log("email", email, "password", password.token)

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin} action="">

                <input type="text" placeholder='email' value={email} onChange={(e) => { setEmail(e.target.value) }} /> <br /><br />
                <input type="text" placeholder='password' value={password} onChange={(e) => { setPassword(e.target.value) }} /> <br /><br />
                <button>Submit</button>
                <p>{data.token}</p>
            </form>

        </div>
    )
}
