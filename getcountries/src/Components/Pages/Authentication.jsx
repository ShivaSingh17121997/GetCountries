import React, { useState } from 'react';

export default function Authentication() {
    const [signupData, setSignupData] = useState({ email: '', password: '' });
    const [loginData, setLoginData] = useState({ email: '', password: '' });
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleSignup = () => {
        setSignupData({ ...signupData }); // Update signupData, not loginData
        alert('Signup successful! Please log in.');
    };

    const handleLogin = () => {
        if (loginData.email === signupData.email && loginData.password === signupData.password) {
            alert('Login successful!');
            setIsLoggedIn(true);
        } else {
            alert('Invalid email or password. Please try again.');
        }
    };

    return (
        <div>
            <h2>Signup</h2>
            <input
                type="email"
                placeholder="Email"
                value={signupData.email}
                onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
            /> <br /><br />
            <input
                type="password"
                placeholder="Password"
                value={signupData.password}
                onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
            /> <br /><br />
            <button onClick={handleSignup}>Sign Up</button>

            <h2>Login</h2>
            <input
                type="email"
                placeholder="Email"
                value={loginData.email}
                onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
            /><br /><br />
            <input
                type="password"
                placeholder="Password"
                value={loginData.password}
                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
            /> <br /><br />
            <button onClick={handleLogin}>Login</button>

            {isLoggedIn && <p>Welcome! You are now logged in.</p>}
        </div>
    );
}
