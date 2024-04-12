import React, { useState, createContext } from 'react';

export const ThemeContext = createContext();

export default function ThemeContextProvider({ children }) {
    const [theme, setTheme] = useState(false);

    const toggleTheme = () => {
        setTheme(prev => !prev);
    }

    return (
        <div>
            <ThemeContext.Provider value={{ toggleTheme, theme }}>
                {children}
            </ThemeContext.Provider>
        </div>
    );
}
