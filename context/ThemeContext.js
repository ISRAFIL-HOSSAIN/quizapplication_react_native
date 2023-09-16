import React,{createContext, useContext,useState} from "react";
import { Colors } from "../utils/Colors";

const ThemeContext = createContext();

export function ThemeProvider({children}){
    const [isDarkMode, setisDarkMode ] = useState(false);

    const toggleTheme = () =>{
        setisDarkMode(prevMode => !prevMode);
    }

    const theme = isDarkMode ? Colors.dark : Colors.light; 

    return(
        <ThemeContext.Provider value={{isDarkMode, toggleTheme, theme}} >
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme(){
    return useContext(ThemeContext);
}