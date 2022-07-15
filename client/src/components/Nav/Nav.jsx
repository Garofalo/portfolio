import { ThemeContext, themes } from "../../context/ThemeContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faToolbox,faDiagramProject, faMessage, faLightbulb, faHome,  } from "@fortawesome/free-solid-svg-icons";
import '../../App.css'
import { Nav, Navbar, Container } from "react-bootstrap"
import './Nav.css'


export default function NavBar({darkMode, setDarkMode}){
   
    const variant = darkMode ? "dark" : "light"
    const navDark = darkMode ? "dark-bg" : "light-bg"
    
    return(
    <header>

        <Navbar className={`fixed-top ${navDark}`} variant={variant}>
            <Nav>
                <FontAwesomeIcon className="nav-icon" icon={faHome} />
                <Nav.Link href="#home">Home</Nav.Link>
                <FontAwesomeIcon className="nav-icon" icon={faUser} />
                <Nav.Link href="#about">About</Nav.Link>
                <FontAwesomeIcon className="nav-icon" icon={faToolbox}/>
                <Nav.Link href="#skills">Toolbox</Nav.Link>
                <FontAwesomeIcon className="nav-icon" icon={faDiagramProject}/>             
                <Nav.Link href="#projects">Projects</Nav.Link>
                <FontAwesomeIcon className="nav-icon" icon={faMessage}/>                
                <Nav.Link href="#contact">Contact</Nav.Link>
                  
                <Container id='button-container'>
                    <ThemeContext.Consumer>
                    {
                        ({changeTheme})=>(
                            
                            <Nav.Link onClick={()=>{
                                setDarkMode(!darkMode);
                                changeTheme(
                                    darkMode ? themes.light : themes.dark)
                            }}>
                                <FontAwesomeIcon className="nav-icon" icon={faLightbulb}/>
                            </Nav.Link>
                        )
                    }
                    </ThemeContext.Consumer>
                </Container>            
            </Nav>


        </Navbar>

    </header>
    )
}