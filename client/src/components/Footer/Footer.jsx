import './Footer.css'
import git from '../../utils/github.svg'

export default function Footer(){
    return (
    <footer id="contact">
            <h1 style={{
            borderBottom: '2px solid black',
             marginTop: '5vh', 
             flexBasis: '92vw'}}>Sources</h1>
             <div className='contact-info'>
                <div className='a-contact'>
                    <img className='white-bg' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original-wordmark.svg" />
                </div>
                <div className='a-contact'>
                    <img src={git}/>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />

                </div>
             </div>
    </footer>
    )
}