import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContex/AuthContextProvider';
import { ThemeContext } from '../AuthContex/ThemeContex';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);
    const { toggleTheme, Theme } = useContext(ThemeContext); // Corrected typo

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email === "" || password === "") {
            alert("Please fill all the required fields");
        } else if (email === "ram@123" && password === "ram") {
            console.log("User Login Successful");
            const token = Math.random(); // Generate or fetch token dynamically
            login(token);
            navigate("/");
        } else {
            alert("Incorrect email or password. Please try again!");
        }
    };

    return (
        <div style={{ backgroundColor: Theme ? "white" : "black" }} >

            <button onClick={toggleTheme} >{Theme ? "Dark Mode" : "Light Mode"}</button>


            <form onSubmit={handleSubmit}>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" required placeholder='email' /><br />
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="text" required placeholder='password' /> <br />
                <button>Login</button>
            </form>
        </div >
    )
}
