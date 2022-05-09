import mam from '../../utils/mamproj.svg'
import randq from '../../utils/randproj.svg'
import restLogo from '../../utils/save.jpg'
import yourCraft from '../../utils/yourcraft.svg'
import  Card  from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../screens/Home/Home.css'
import logo from '../../utils/ronproj.svg'
import './Projects.css'

export default function Projects(){

    return(
        <div id="projects">
        <h1  style={{borderBottom: '2px solid black', width: '93vw', margin: '0 auto'}}>Projects</h1>

        <div className="projects container-home">
            <div className='proj-card-holder'>
                <Card id="proj1"  >
                    <Card.Img  alt="mamoo" variant= "top" className="proj-img" src={mam} />
                    <Card.Body >
                        <Card.Title >
                            Mamoo
                        </Card.Title>
                        <Card.Text >
                            A Full Stack Application that allows authenticated users to mark important events in their lives and quantify time passed.
                        </Card.Text>

                        <Card.Text>Deployed: Yes</Card.Text>
                        <div className='proj-icons'>

                            <div className="icon-holder">
                                <img alt="js logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                            </div>
                            <div className="icon-holder">
                                <img alt="react logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
                            </div>
                            <div className="icon-holder">
                                <img alt="python logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" />
                            </div>

                            <div className="icon-holder">
                                <img alt="postgresql logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" />
                            </div>
                        </div>
                        <div className='link-holder'>
                            <Card.Link href="https://yourmamoo.netlify.app/" target="_blank">Deployed Site</Card.Link>
                            <Card.Link href="https://github.com/Garofalo/mamoo" target="_blank">Front End Repository</Card.Link>
                            <Card.Link href="https://github.com/Garofalo/mamoobackend" target="_blank">Back End Repository</Card.Link>
                        </div>

                    </Card.Body>

                </Card>
            </div>
            <div className='proj-card-holder'>
                <Card id="proj2" >
                    <Card.Img alt="random quest" className="proj-img" variant= "top" src={randq} />
                    <Card.Body >
                        <Card.Title>
                            Random Quest
                        </Card.Title>
                        <Card.Text>
                            A game built using React.js where users generate random enemies, attacks and outcomes.
                        </Card.Text>

                        <Card.Text>Deployed: Yes</Card.Text>
                        <div className='proj-icons'>

                            <div className="icon-holder">
                                <img alt="js logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                            </div>
                            <div className="icon-holder">
                                <img alt="react logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
                            </div>
                            <div className="icon-holder">
                                <img alt="node js logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" />
                            </div>

                        </div>
                        <div className='link-holder'>
                            <Card.Link href="https://randomquest.netlify.app/" target="_blank">Deployed Site</Card.Link>
                            <Card.Link href="https://github.com/Garofalo/random-quest" target="_blank">GitHub Repository</Card.Link>
                        </div>

                    </Card.Body>

                </Card>
            </div>
            <div className='proj-card-holder'>
                <Card id="proj3">
                    <Card.Img alt="restful flask api" className="proj-img" variant= "top" src={restLogo} />
                    <Card.Body >
                        <Card.Title>
                            RESTful API
                        </Card.Title>
                        <Card.Text>
                            A demonstration of a self-built RESTful API and appropriate documentation.
                        </Card.Text>

                        <Card.Text>Deployed: No</Card.Text>
                        <div className='proj-icons'>

                            <div className="icon-holder">
                                <img alt="python logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" />
                            </div>
                            <div className="icon-holder">
                                <img alt="flask logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original-wordmark.svg" />
                            </div>


                        </div>
                        <div className='link-holder'>
                            <Card.Link href="https://github.com/Garofalo/random-quest" target="_blank">GitHub Repository</Card.Link>
                        </div>

                    </Card.Body>

                </Card>
            </div>
            <div className='proj-card-holder'>
                <Card id="proj4">
                    <Card.Img alt="yourcraft" className="proj-img" variant= "top" src={yourCraft} />
                    <Card.Body >
                        <Card.Title>
                            YourCraft
                        </Card.Title>
                        <Card.Text>
                            A full stack inventory application built with a team that allows all users to see what craft brewers have in stock, and allows authenticated users to create, update and delete beverages. 
                        </Card.Text>

                        <Card.Text>Deployed: Yes</Card.Text>
                        <div className='proj-icons'>

                            <div className="icon-holder">
                                <img alt="js logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                            </div>
                            <div className="icon-holder">
                                <img alt="express logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" />
                            </div>
                            <div className="icon-holder">
                                <img alt="react logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
                            </div>
                        </div>
                        <div className='link-holder'>
                            <Card.Link href="https://your-craft.netlify.app/" target="_blank">Deployed Site</Card.Link>
                        </div>
                        <div className='link-holder'>
                            <Card.Link href="https://github.com/kimcapgab/your-craft" target="_blank">GitHub Repository</Card.Link>
                        </div>
                    </Card.Body>
                </Card>
            </div>
            <div className='proj-card-holder'>
                <Card id="proj5">
                    <Card.Img alt="ron" variant= "top" className="proj-img" src={logo} />
                    <Card.Body >
                        <Card.Title>
                            This Site
                        </Card.Title>
                        <Card.Text>
                            My latest Portfolio 
                        </Card.Text>

                        <Card.Text>Deployed: Hopefully</Card.Text>
                        <div className='proj-icons'>
                            <div className="icon-holder">
                                <img alt="js logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                            </div>
                            <div className="icon-holder">
                                <img alt="react logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
                            </div>
                        </div>
                        <div className='link-holder'>
                            <Card.Link href="https://github.com/Garofalo/portfolio" target="_blank">GitHub Repository</Card.Link>
                        </div>
                    </Card.Body>
                </Card>
            </div>
            </div>
        </div>
    )
}