import React, { useContext, useState } from 'react';
import { AuthContext } from '../AuthContext/AuthContextProvider';
import { useNavigate } from 'react-router-dom';
import { ThemeContexts } from '../AuthContext/ThemeContext';



export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();
    const { Theme, toggletheme } = useContext(ThemeContexts);

    const handleLogin = (e) => {
        e.preventDefault();

        try {
            if (email === "" || password === "") {
                alert("Fill all the fields")
            } else if (email === "siyaram@123" && password === "1234") {
                alert("Successfully login")
                login(true)
                navigate("/")

            } else {
                alert("Email or Password is incorrect")
            }
        } catch (error) {

        }
    }
    return (
        <div style={{backgroundColor: Theme ? "white" : "black", height:"100vh"}}  >
            <button onClick={toggletheme} >{Theme ? "Dark Mode" :" Light Mode" }</button>
            <form onSubmit={handleLogin} >
                <input required placeholder='email' value={email} type="text" onChange={(e) => setEmail(e.target.value)} /> <br />
                <input required placeholder='password' value={password} type="text" onChange={(e) => setPassword(e.target.value)} /><br />
                <button>Login</button>
            </form>
        </div>
    )
}
