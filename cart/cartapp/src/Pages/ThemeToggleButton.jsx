import React, { useContext } from 'react'
import { themeContext } from './ThemeContext'

export default function ThemeToggleButton() {
    const {toggleTheme} = useContext(themeContext);
    return (
        <div>
            <button onClick={toggleTheme} >Toggle Theme</button>
        </div>
    )
}
