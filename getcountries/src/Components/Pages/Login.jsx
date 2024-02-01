import React from 'react'
import { useState } from 'react';
import { authcontext } from '../authcontextprovider/Authcontext';
import { useContext } from 'react';
import {useNavigate, Navigate} from "react-router-dom"


export default function Login() {

    const [loginData, setLogindata] = useState({ email: '', password: '' });
    const { authState, login } = useContext(authcontext)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch("https://reqres.in/api/login", {
                method: "POST",
                body: JSON.stringify({
                    email: loginData.email,
                    password: loginData.password

                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })

            res = await res.json()
            console.log(res)
            //update user
            login(res.token)


        } catch (error) {
            console.log(error)
        }

        if(authState.isAuth){
            console.log("directed to homepage")
           return <Navigate to ="/"/>
        }

    }


    return <div>
        <form onSubmit={handleSubmit} >

            <input value={loginData.email} onChange={(e) => setLogindata({ ...loginData, email: e.target.value })} type="email" /> <br />

            <input value={loginData.password} onChange={(e) => setLogindata({ ...loginData, password: e.target.value })} type="password" /> <br />

            <input type="submit" />

        </form>

    </div>
}
