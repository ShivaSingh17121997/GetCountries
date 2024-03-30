import React, { useContext } from 'react'
import ThemeContext, { themeContext } from './ThemeContext'

export default function ThemedComponent() {
    const { theme } = useContext(ThemeContext)
    return (
        <div style={{ backgroundColor: theme = "light" ? "black" : "white" }} >
            <h2>This is themed component</h2>
        </div>
    )
}
