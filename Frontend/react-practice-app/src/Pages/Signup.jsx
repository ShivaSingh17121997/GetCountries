import React, { useState } from 'react'

export default function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = (e) => {
        e.preventDefault();

        fetch("http://localhost:9000/user/reg", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
            })

        setEmail("");
        setPassword("");
    }
    console.log("email", email, "password", password)

    return (
        <div>
            <h1>Signup</h1>
            <form onSubmit={handleSignup} action="">

                <input type="text" placeholder='email' value={email} onChange={(e) => { setEmail(e.target.value) }} /> <br /><br />
                <input type="text" placeholder='password' value={password} onChange={(e) => { setPassword(e.target.value) }} /> <br /><br />
                <button>Submit</button>
            </form>

        </div>
    )
}
