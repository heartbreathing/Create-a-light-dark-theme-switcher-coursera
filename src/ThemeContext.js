import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext(undefined);


export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(theme => (theme === 'light' ? 'dark' : 'ight'));
    };

    const value = {
        theme,
        toggleTheme
    }
    
    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );

};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider')
    }
    return context;
};
