import { useState, useEffect,  } from "react";
import { ThemeContext, themes } from "../context/ThemeContext";


export default function ThemeContextWrapper(props){
    const [theme, setTheme] = useState(themes.dark)

    function changeTheme(theme){
        setTheme(theme)
    }
    useEffect(()=>{

        switch(theme){
            
            case themes.dark:
                document.body.classList.add('dark-content')
                document.body.classList.remove('light-content')
                
                break;
            
            case theme.light:
            default:

                document.body.classList.remove('dark-content')
                document.body.classList.add('light-content')
                break;
        }
    },[theme])

    return(
        <ThemeContext.Provider value={{theme: theme, changeTheme: changeTheme}}>
            {props.children}
        </ThemeContext.Provider>
    );
}