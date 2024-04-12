import React, { useContext } from 'react'
import { ThemeContexts } from '../AuthContext/ThemeContext'

export default function Home() {
    const {Theme, toggletheme} = useContext(ThemeContexts);
  return (
    <div style={{height:"100vh" , backgroundColor:Theme?"white":"black"}} >
        <div>
            <button onClick={toggletheme} >{Theme?"Dark Mode": "Light Mode"}</button>
        </div>
    </div>
  )
}
