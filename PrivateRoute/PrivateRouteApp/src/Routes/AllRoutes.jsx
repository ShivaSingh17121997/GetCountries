import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import About from '../Pages/About';
import PrivateRoutes from './PrivateRoutes';

export default function AllRoutes() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<PrivateRoutes> <Home /> </PrivateRoutes>} />
                <Route path='/login' element={<Login />} />
                <Route path='/about' element={<PrivateRoutes><About /></PrivateRoutes>} />
            </Routes>
        </div>
    )
}
