import React, { useState } from 'react';

export default function Authentication() {
    const [signupData, setSignupData] = useState({ email: "", password: "" });
    const [loginData, setLoginData] = useState({ email: "", password: "" });
    const [isLogedIn, setIsLoggedIn] = useState(false)

    const handleSignup = () => {
        setSignupData({ ...signupData })
        alert("SignUp Sucessful")
    }

    const handleLogin = () => {

        if (signupData.email === loginData.email && signupData.password === loginData.password) {
            alert("Login sucessful")
            setIsLoggedIn(true)
        } else {
            alert("Invalid email or password. Please try again.")
        }

    }

    return <div>
        <div>
            <h1>SignUp</h1>

            <input value={signupData.email} onChange={(e) => setSignupData({ ...signupData, email: e.target.value })} type="email" placeholder='Enter email...' /> <br /> <br />

            <input value={signupData.password} onChange={(e) => setSignupData({ ...signupData, password: e.target.value })} type="password" placeholder='Enter password...' /><br /> <br />


            <button onClick={handleSignup} > Submit</button>
        </div>

        <div>
            <h1>Login</h1>

            <input type="email" placeholder='enter email ' value={loginData.email} onChange={(e) => setLoginData({ ...loginData, email: e.target.value })} /> <br /> <br />

            <input value={loginData.password} onChange={(e) => setLoginData({ ...loginData, password: e.target.value })} type="password" placeholder='Enter password...' />;<br /> <br />


            <button onClick={handleLogin} >Submit</button>
        </div>
        <div>
            {isLogedIn && <p>Welcome! You are now logged in.</p>}
        </div>

    </div>

}


