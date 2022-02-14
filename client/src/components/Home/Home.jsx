import './Home.css'
import  Card  from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';
import mam from '../../utils/mam.png'
import randq from '../../utils/randq.png'
import restLogo from '../../utils/rest.png'
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
            <div className="skill-holder">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" />
            </div>
            <div className="skill-holder">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" />
            </div>
            <div className="skill-holder">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" />
            </div>
            <div className="skill-holder">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-original.svg" />
            </div>
            <div className="skill-holder">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original-wordmark.svg" />
            </div>
            <div className="skill-holder">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" />
            </div>
            <div className="skill-holder">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" />
            </div>
            <div className="skill-holder">
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
        <div className="projects container-home" >
            <h1 style={{borderBottom: '2px solid black', marginTop: '5vh'}}>Projects</h1>
            <div className='proj-card-holder'>
            <Card style={{width: '20rem'}}>
                <Card.Img variant= "top" src={mam} style={{width: '30vw' , margin: '0 auto'}}/>
                <Card.Body id="proj1">
                    <Card.Title >
                        Mamoo
                    </Card.Title>
                    <Card.Text >
                        A Full Stack Application that authenticated users can use to mark important events in their lives.
                    </Card.Text>
                </Card.Body>
            </Card>
            </div>
            <div className='proj-card-holder'>
            <Card style={{width: '20rem'}}>
                <Card.Img variant= "top" src={randq} style={{width: '30vw', margin: '0 auto'}}/>
                <Card.Body id="proj2">
                    <Card.Title>
                        Random Quest
                    </Card.Title>
                    <Card.Text>
                        A game built using React.js where users generate random enemies, attacks and outcomes.
                    </Card.Text>
                </Card.Body>
            </Card>
            </div>
            <div className='proj-card-holder'>
            <Card style={{width: '20rem'}}>
                <Card.Img variant= "top" src={restLogo} style={{width: '30vw', margin: '0 auto'}}/>
                <Card.Body id="proj3">
                    <Card.Title>
                        RESTful API
                    </Card.Title>
                    <Card.Text>
                        A demonstration of a self-built RESTful API and appropriate documentation.
                    </Card.Text>
                </Card.Body>
            </Card>
            </div>

        </div>
        <footer>

        </footer>
    </div>)
}