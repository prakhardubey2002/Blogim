"use client"

import { createContext, useState } from "react"

export const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
    const[mode, setMode] = useState("dark");
    const toggle = () => {
        setMode((prev) => (prev === "dark" ? "light" : "dark"));
    };
    return (

        <ThemeContext.Provider value={{ mode, toggle }} >
            <div className={`theme ${mode}`} >
                {/* both class Theme and mode are glodal classes and can be accessed from global.css */}
                {children}
            </div>
        </ThemeContext.Provider>
    )
}