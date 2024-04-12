import React, { useContext } from 'react'
import { AuthContext } from '../AuthContext/AuthContextProvider'

export default function AllRasta({ children }) {

    const { isAuth } = useContext(AuthContext);

    try {
        if (!isAuth) {
            alert("You are not Authorizes login first")
            return <Navigate to="/login" />

        }

    } catch (error) {
        console.log("there is error ")
    }

    return (
        <div>
            {children}
        </div>
    )
}
