import React, { createContext, useState } from 'react'
export const themeContext = createContext();
export default function ThemeContex({ children }) {

    const [theme, settheme] = useState(false);

    const darkMode = () => {
        settheme(true)
    }

    const lightMode = () => {
        settheme(false)
    }

    return (
        <div>

            <themeContext.Provider value={{ theme, darkMode, lightMode }} >
                {children}
            </themeContext.Provider>

        </div>
    )
}
