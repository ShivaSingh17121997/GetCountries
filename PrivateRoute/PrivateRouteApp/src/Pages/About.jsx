import React, { useContext } from 'react'
import { ThemeContexts } from '../AuthContext/ThemeContext'

export default function About() {
    const { Theme, toggletheme } = useContext(ThemeContexts);

    return (
        <div style={{ height:"100vh", backgroundColor: Theme ? "white" : "black" }} >
            <div>
                <h1  style={{text:"black"}} >  About</h1>
                <button onClick={toggletheme} >{Theme ? "Dark Mode" : "Light Mode"}</button>
            </div>

        </div>
    )
}
