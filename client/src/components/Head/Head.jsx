import { ThemeContext, themes } from "../../context/ThemeContext"
import { useState } from "react"
import '../../App.css'
import { Nav, Navbar } from "react-bootstrap"
import './Head.css'

export default function Head(){

    const [darkMode, setDarkMode] = useState(false)
    const variant = darkMode ? "dark" : "light"
    const buttonWord = darkMode ? "Light" : "Dark"
    const navDark = darkMode ? "dark-bg" : "light-bg"
    return(
    <header>

        <Navbar className={`fixed-top ${navDark}`} variant={variant}>
            <Nav>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#skills">Toolbox</Nav.Link>                
                <Nav.Link href="#projects">Projects</Nav.Link>                
                <Nav.Link href="#contact">Contact</Nav.Link>            
            </Nav>

        </Navbar>
        <div className="header-bottom">
            <h4>Ron Garofalo || Full Stack Engineer</h4>
            <div>
                <ThemeContext.Consumer>
                {
                    ({changeTheme})=>(
                        <button onClick={()=>{
                            setDarkMode(!darkMode);
                            changeTheme(
                                darkMode ? themes.light : themes.dark)
                        }}>
                            {buttonWord}
                        </button>
                    )
                }
                </ThemeContext.Consumer>
            </div>
            </div>
    </header>)
}