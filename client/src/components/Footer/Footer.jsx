import './Footer.css'

import resume from '../../utils/RonGarofalo.pdf'



export default function Footer(){

    return (
    <footer id="contact">
            <h1 style={{
            borderBottom: '2px solid black',
             marginTop: '5vh', 
             width: '92vw'}}>Contact</h1>
             <div className='contact-info'>
                <div className='a-contact'>
                    <a rel="noreferrer" href='https://github.com/Garofalo?tab=repositories' target='_blank'>Public GitHub Repositories</a>
                </div>
                <div className='a-contact'>
                    <a rel="noreferrer" href='https://www.linkedin.com/in/ron-garo/' target='_blank'>Message me on Linked In</a>
                </div>
            <div className='a-contact'>
                    <a href={resume} download="RonGarofaloResume.pdf">Download my resume</a>             
            </div>

                </div>
            
    </footer>
    )
}