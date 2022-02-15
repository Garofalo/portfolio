import './Home.css'
import Footer from '../../components/Footer/Footer';
import Projects from '../../components/Projects/Projects';

export default function Home(){

    


    return (
    <div className='column-div'>
        

        <div className="about container-home" id="about">
            <h1 style={{borderBottom: '2px solid black', marginTop: '5vh', flexBasis: '92vw'}}>Who is Ron?</h1>

        </div>

        <div className="skills container-home" id="skills">
            <h1 style={{borderBottom: '2px solid black', marginTop: '5vh', flexBasis: '92vw'}}>Developer Toolbox</h1>

            <div className="skill-holder">
                <img alt="js logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
            </div>
            <div className="skill-holder">
                <img alt="react logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
            </div>            
            <div className="skill-holder white-bg">
                <img alt="node js logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" />
            </div>
            <div className="skill-holder white-bg">
                <img alt="express logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" />
            </div>
            <div className="skill-holder">
                <img alt="python logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" />
            </div>
            <div className="skill-holder">
                <img alt="django logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-original.svg" />
            </div>
            <div className="skill-holder white-bg">
                <img alt="flask logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original-wordmark.svg" />
            </div>
            <div className="skill-holder">
                <img alt="postgresql logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" />
            </div>
            <div className="skill-holder white-bg">
                <img alt="html logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" />
            </div>
            <div className="skill-holder white-bg">
                <img alt="css logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" />
            </div>
            <div className="skill-holder">
                <img alt="heroku logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original-wordmark.svg" />
            </div>
            <div className="skill-holder">
                <img alt="material ui logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" />
            </div>
        </div>
        <h1 style={{borderBottom: '2px solid black', width: '93vw', margin: '0 auto'}}>Projects</h1>

        <Projects/>
        
    <Footer/>
</div>)
}