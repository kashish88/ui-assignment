import React, { createContext, useState, useContext } from "react";


const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);


export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevState) => !prevState);
    document.body.classList.toggle("dark-mode", !isDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
