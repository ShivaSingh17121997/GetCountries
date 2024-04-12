import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../AuthContex/AuthContextProvider';
// import ThemeContex from '../AuthContex/ThemeContex';



export default function Home() {
    const { logout } = useContext(AuthContext)
    // const { darkMode, lightMode } = useContext(ThemeContex);

    // const handleDarkmode = () => {
    //     lightMode(true);
    // }

    const handleLogout = () => {
        logout(false)
        return <Navigate to='/login' />

    }
    return (
        <div >
            <h1>Home</h1>
            <button onClick={handleLogout}>  Logout</button>
        </div>
    )
}
