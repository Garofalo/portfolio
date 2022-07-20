import { ThemeContext, themes } from "../../context/ThemeContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faToolbox,faDiagramProject, faMessage, faLightbulb, faHome,  } from "@fortawesome/free-solid-svg-icons";
import '../../App.css'
import { Nav, Navbar } from "react-bootstrap"
import './Nav.css'



export default function NavBar({darkMode, setDarkMode}){
   
    const variant = darkMode ? "light" : "dark"
    const navDark = darkMode ? "light-bg" : "dark-bg"
    
    return(
    <header >
 
        <Navbar id='nav' collapseOnSelect expand='sm' className={`fixed-top ${navDark}`} variant={variant}>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>

                    <ThemeContext.Consumer>
                    {
                        ({changeTheme})=>(
                            
                            <Nav.Link onClick={()=>{
                                setDarkMode(!darkMode);
                                changeTheme(
                                    darkMode ? themes.dark : themes.light)
                            }}>
                                <FontAwesomeIcon className="nav-icon" icon={faLightbulb}/>
                            </Nav.Link>
                        )
                    }
                    </ThemeContext.Consumer>

            <Navbar.Collapse>
            <Nav>
                <FontAwesomeIcon className="nav-icon" icon={faHome} />
                <Nav.Link href="#home">Home</Nav.Link>
                <FontAwesomeIcon className="nav-icon" icon={faUser} />
                <Nav.Link href="#about">About</Nav.Link>
                <FontAwesomeIcon className="nav-icon" icon={faToolbox}/>
                <Nav.Link href="#bulb">Toolbox</Nav.Link>
                <FontAwesomeIcon className="nav-icon" icon={faDiagramProject}/>             
                <Nav.Link href="#raccoon">Projects</Nav.Link>
                <FontAwesomeIcon className="nav-icon" icon={faMessage}/>                
                <Nav.Link href="#contact">Contact</Nav.Link>
                  
          
            </Nav>
            </Navbar.Collapse>


        </Navbar>

    </header>
    )
}