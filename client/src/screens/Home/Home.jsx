import './Home.css'
import Footer from '../../components/Footer/Footer';
import Projects from '../../components/Projects/Projects';

export default function Home(){

    


    return (
    <div>
        <div className='bumper-div'  id="about"></div>
        <div className='bumper-div'  ></div>
        <div className="about container-home">
        <h1 style={{borderBottom: '2px solid black', marginTop: '5vh', flexBasis: '92vw'}}>Who is Ron?</h1>

        </div>
        <div className='bumper-div' id="skills"></div>
        <div className="skills container-home">
        <h1 style={{borderBottom: '2px solid black', marginTop: '5vh', flexBasis: '92vw'}}>Developer Toolbox</h1>

            <div className="skill-holder">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
            </div>
            <div className="skill-holder">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
            </div>            
            <div className="skill-holder white-bg">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" />
            </div>
            <div className="skill-holder white-bg">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" />
            </div>
            <div className="skill-holder">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" />
            </div>
            <div className="skill-holder">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-original.svg" />
            </div>
            <div className="skill-holder white-bg">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original-wordmark.svg" />
            </div>
            <div className="skill-holder">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" />
            </div>
            <div className="skill-holder white-bg">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" />
            </div>
            <div className="skill-holder white-bg">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" />
            </div>
            <div className="skill-holder">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original-wordmark.svg" />
            </div>
            <div className="skill-holder">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" />
            </div>
        </div>
        <div className='bumper-div' id="projects"></div>
        <Projects/>
    <Footer/>
    </div>)
}