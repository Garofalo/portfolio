import { ThemeContext, themes } from "../../context/ThemeContext"
import { useState } from "react"
import '../../App.css'

export default function Head(){

    const [darkMode, setDarkMode] = useState(false)


    return(
    <header>
        <ThemeContext.Consumer>
                {
                    ({changeTheme})=>(
                        <button onClick={()=>{
                            setDarkMode(!darkMode);
                            changeTheme(
                                darkMode ? themes.light : themes.dark)
                        }}>
                            Switch Mode
                        </button>
                    )
                }
        </ThemeContext.Consumer>
    </header>)
}