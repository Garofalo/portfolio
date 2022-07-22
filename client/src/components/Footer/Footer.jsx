import './Footer.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import resume from '../../utils/RonGarofaloResume.pdf'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import Contact from '../Contact/Contact';


export default function Footer(){

    return (
    <footer id="contact">


                <div className='a-contact'>
                
                    <a rel="noreferrer" 
                    href='https://github.com/Garofalo?tab=repositories' 
                    target='_blank'
                    >
                        <FontAwesomeIcon className="foot-icon"  icon={faGithub} />
                    </a>
                </div>
                <div className='a-contact'>
                    <a rel="noreferrer" 
                    href='https://www.linkedin.com/in/ron-garo/' 
                    target='_blank'>
                    <FontAwesomeIcon className="foot-icon"  icon={faLinkedin} />
                    </a>
                </div>
                <div className='a-contact'>
                        <a href={resume} 
                        download="RonGarofaloResume.pdf">

                            <FontAwesomeIcon id="download"className="foot-icon"  icon={faDownload} />

                        </a>             
                </div>
                <Contact />



            
    </footer>
    )
}