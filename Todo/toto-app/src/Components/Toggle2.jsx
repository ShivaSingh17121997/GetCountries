import React, { useState } from 'react'

export default function Toggle2() {
    const [toggle, setToggle] = useState(false)
    const [hi, setHi] = useState(false)

    const handleToggle = () => {
        setToggle(!toggle)
    }

    return (
        <div>
            <button onClick={handleToggle} >{toggle ? "show" : "hide"}</button>
            {toggle && <div>
                <button onClick={() => setHi(!hi)} >{hi ? "show" : "hide"}</button>
                {hi && <div>
                    <button>aye</button>
                    <button>hi</button></div>}
                <button> hello</button>
            </div>}s
        </div>
    )
}
