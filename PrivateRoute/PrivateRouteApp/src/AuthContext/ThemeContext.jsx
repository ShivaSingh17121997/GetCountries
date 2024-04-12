import React, { createContext, useState } from 'react'


export const ThemeContexts = createContext()

export default function ThemeContext({ children }) {

    const [Theme, setTheme] = useState(false);

    const toggletheme = () => {
        setTheme(prev => !prev)
    }
    return (
        <div>
            <ThemeContexts.Provider value={{ Theme, toggletheme }}>
                {children}
            </ThemeContexts.Provider>

        </div>
    )
}
