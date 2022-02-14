import './Footer.css'
import git from '../../utils/github.svg'
import { useNavigate } from 'react-router-dom'

export default function Footer(){
    const nav = useNavigate()
    return (
    <footer id="contact">
            <h1 style={{
            borderBottom: '2px solid black',
             marginTop: '5vh', 
             flexBasis: '92vw'}}>Contact</h1>
             <div className='contact-info'>
             <div className='a-contact'>
                    <a href='https://github.com/Garofalo?tab=repositories' target='_blank'><button >Public Github Repositories</button></a>
                </div>
                <div className='a-contact'>
                    <a href='https://www.linkedin.com/in/ron-garo/' target='_blank'><button >Message me on Linked In</button></a>
                </div>
             </div>
    </footer>
    )
}