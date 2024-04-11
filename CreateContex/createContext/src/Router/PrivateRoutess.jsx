import React, { useContext, useEffect } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { AuthContext } from '../AuthContex/AuthContextProvider';


export default function PrivateRoutess({ children }) {
    // const navigate = useNavigate();
    const { isAuth } = useContext(AuthContext);


    if (!isAuth) {
        alert("login first !")
        return < Navigate to="/login" />
    }




    return (children)
}
