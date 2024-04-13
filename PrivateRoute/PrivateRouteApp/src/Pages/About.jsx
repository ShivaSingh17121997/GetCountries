import React, { useContext, useState } from 'react'
import { ThemeContexts } from '../AuthContext/ThemeContext'

export default function About() {
    const { Theme, toggletheme } = useContext(ThemeContexts);

    const [count, setCount] = useState(0);


    JSON.stringify(localStorage.setItem("count", count));
    const handleDecrease = () => {
        setCount(prev => prev - 1)

    };

    const handleIncrease = () => {
        setCount(prev => prev + 1)
    };

    const countVal = JSON.parse(localStorage.getItem("count"))

    console.log(countVal)


    return (
        <div style={{ height: "100vh", backgroundColor: Theme ? "white" : "black" }} >
            <button onClick={toggletheme} >{Theme ? "Dark Mode" : "Light Mode"}</button>
            <div>
                <h1 style={{ color: Theme ? "black" : "white" }} >  About</h1>
                <div>
                    <h1 style={{ color: Theme ? "black" : "white" }} >Counter app</h1>
                    <p style={{ color: Theme ? "black" : "white" }} > localStorageVal{countVal}</p>
                    <button disabled={count === 0} onClick={handleDecrease}  >Substract - </button>
                    <h1 style={{ color: Theme ? "black" : "white" }} >{count}</h1>
                    <button onClick={handleIncrease} >Addition+</button>

                </div>






            </div>

        </div>
    )
}
;