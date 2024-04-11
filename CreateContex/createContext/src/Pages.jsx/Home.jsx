import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../AuthContex/AuthContextProvider';


export default function Home() {
    const { logout } = useContext(AuthContext)

    const handleLogout = () => {
        logout(false)
        return <Navigate to='/login' />

    }
    return (
        <div>
            <h1>Home</h1>
            <button onClick={handleLogout}>  Logout</button>
        </div>
    )
}
