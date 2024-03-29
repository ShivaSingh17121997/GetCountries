import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import About from '../Pages/About'
import SignUp from '../Pages/SignUp'

export default function Routing() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path='/signup' element={ <SignUp/> } />

            </Routes>
        </div>
    )
}
