import './Home.css'
import Footer from '../../components/Footer/Footer';
import Projects from '../../components/Projects/Projects';
import { useState } from 'react';

export default function Home(){
    const [showMore, setShowMore] = useState(false)
    return (
    <div className='column-div'>
        

        <div className="about container-home" id="about">
            <h1 style={{borderBottom: '2px solid black',  width: '92vw', margin:'5vh auto 0 auto'}}>Who is Ron?</h1>
            <h2 style={{width:"80vw", margin: "2% auto 0 auto"}}>  I take great pride in my ability to creatively 
                and efficiently solve problems. Full Stack Software
                Engineering allows me to fulfill my need to be creative 
                <span className="bold"> and </span>scratch my problem 
                solving itch while my professional skillset gets sharper.</h2>
                <br/>
                <h2 style={{width:"80vw", margin: "2% auto 0 auto"}}>Truly a lifelong learner, my approach to learning a skill 
                has led me to teach peers in a wide variety of topics - 
                from Tang Soo Do as a teenager (a Korean martial art), 
                to sales in my 20s, to professionally tasting (read: 
                drinking) beer in my late 20s and early 30s. I have that 
                same desire to learn and hone the skill of Software                     
                Development, so I try tospend my days coding. That feeling of                     
                finally figuring out a problem and everything just 
                <span className='italics'> clicks</span> into place is my daily white whale. </h2>

        </div>

        <div className="skills container-home" id="skills">
            <h1 style={{borderBottom: '2px solid black', marginTop: '5vh', width: '92vw'}}>Developer Toolbox</h1>

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
        <h1 id="projects" style={{borderBottom: '2px solid black', width: '93vw', margin: '0 auto'}}>Projects</h1>

        <Projects />
        
    <Footer />
</div>)
}