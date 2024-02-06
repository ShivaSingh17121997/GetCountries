import React, { useState } from 'react'

export default function Toggle() {
    const [toggle, setToggle] = useState(false);
    const handleClick = () => {
        setToggle(!toggle)
    }


    return (
        <div onClick={handleClick} >
            <button>{toggle ? "unclick" : "click"}</button>
            {
               toggle && <p>This paragraph is hidden when button is clicked</p>
            }

        </div>
    )
}
