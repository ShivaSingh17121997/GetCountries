import React, { useContext } from 'react';
import ThemeContext from '../AuthContex/ThemeContex';

export default function About() {
  // const { Theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={{ backgroundColor:  "white" }}>
      {/* <button onClick={toggleTheme}>{Theme ? "Dark Mode" : "Light Mode"}</button> */}
    </div>
  );
}
