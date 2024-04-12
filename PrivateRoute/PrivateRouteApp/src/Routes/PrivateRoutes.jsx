import React, { useContext } from 'react'
import { AuthContext } from '../AuthContext/AuthContextProvider'
import { Navigate } from 'react-router-dom';

export default function PrivateRoutes({ children }) {
    const { isAuth } = useContext(AuthContext);

    try {
        if (!isAuth) {
            console.log("Login first")
            return <Navigate to="/login" />
        };
    } catch (error) {
        console.log("there is some error in privae route")
    }


    return (
        <div>
            {children}
        </div>
    )
};
