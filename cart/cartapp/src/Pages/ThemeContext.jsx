import React, { createContext, useState, useContext } from 'react';

// Create a context object
const themeContext = createContext();

// Create a provider component
export const ThemeContext = ({ children }) => {
  const [theme, setTheme] = useState('light');

  // Function to toggle theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <themeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </themeContext.Provider>
  );
};

// Custom hook to access theme context
export const useTheme = () => useContext(themeContext);
