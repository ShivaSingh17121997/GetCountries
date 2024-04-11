import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages.jsx/Home';
import Login from '../Pages.jsx/Login';
import Signup from '../Pages.jsx/Signup';
import About from '../Pages.jsx/About';
import PrivateRoutess from './PrivateRoutess';

export default function AllRoutess() {
    return (
        <div>
            <Routes>
                <Route path="/" element={
                    <PrivateRoutess>
                        < Home />
                    </PrivateRoutess>} />

                <Route path="/login" element={< Login />} />
                <Route path="/signup" element={< Signup />} />

                <Route path="/about" element={
                    <PrivateRoutess>
                        < About />
                    </PrivateRoutess>
                } />


            </Routes>
        </div>
    )
}
