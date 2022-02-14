import mam from '../../utils/mam.png'
import randq from '../../utils/randq.png'
import restLogo from '../../utils/save.jpg'
import yourCraft from '../../utils/yourcraft.svg'
import  Card  from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../screens/Home/Home.css'
import { useState } from 'react';

export default function Projects(){
    const [showMore, setShowMore] = useState({
        proj1 : false,
        proj2 : false,
        proj3: false, 
        proj4: false
    })
    return(
        <div className="projects container-home" >
            <h1 style={{borderBottom: '2px solid black', marginTop: '5vh'}}>Projects</h1>
            <div className='proj-card-holder'>
            <Card id="proj1"  >
                <Card.Img  variant= "top" src={mam} style={{width: '30vw' , margin: '0 auto'}}/>
                <Card.Body >
                    <Card.Title >
                        Mamoo
                    </Card.Title>
                    <Card.Text >
                        A Full Stack Application that allows authenticated users to mark important events in their lives and quantify time passed.
                    </Card.Text>

                
                {
                    showMore.proj1 === true && <>
                    <Card.Text>Deployed: Yes</Card.Text>
                    <div className='proj-icons'>

                        <div className="icon-holder">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                        </div>
                        <div className="icon-holder">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
                        </div>
                        <div className="icon-holder">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" />
                        </div>
                        <div className="icon-holder">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-original.svg" />
                        </div>
                        <div className="icon-holder">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" />
                        </div>
                    </div>
                    <div className='link-holder'>
                    <Card.Link href="https://yourmamoo.netlify.app/" target="_blank">Deployed Site</Card.Link>
                    <Card.Link href="https://github.com/Garofalo/mamoo" target="_blank">Front End Repository</Card.Link>
                    <Card.Link href="https://github.com/Garofalo/mamoobackend" target="_blank">Back End Repository</Card.Link>
                    </div>
                    </>
                }
                </Card.Body>
                <div>
                    {
                        showMore.proj1 === false ? 
                        <h4 className="show-more-button" onClick={()=>setShowMore({...showMore, proj1: !showMore.proj1})}>Show More</h4>
                        :
                        <h4 className="show-more-button" onClick={()=>setShowMore({...showMore, proj1: !showMore.proj1})}>Show Less</h4>

                    }                
                </div>
            </Card>
            </div>
            <div className='proj-card-holder'>
            <Card id="proj2" >
                <Card.Img variant= "top" src={randq} style={{width: '30vw', margin: '0 auto'}}/>
                <Card.Body >
                    <Card.Title>
                        Random Quest
                    </Card.Title>
                    <Card.Text>
                        A game built using React.js where users generate random enemies, attacks and outcomes.
                    </Card.Text>
                    {
                    showMore.proj2 === true && <>
                    <Card.Text>Deployed: Yes</Card.Text>
                    <div className='proj-icons'>

                        <div className="icon-holder">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                        </div>
                        <div className="icon-holder">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
                        </div>
                        <div className="icon-holder">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" />
                        </div>

                    </div>
                    <div className='link-holder'>
                    <Card.Link href="https://randomquest.netlify.app/" target="_blank">Deployed Site</Card.Link>
                    <Card.Link href="https://github.com/Garofalo/random-quest" target="_blank">GitHub Repository</Card.Link>
                    </div>
                    </>
                }
                </Card.Body>
                <div>
                    {
                        showMore.proj2 === false ? 
                        <h4 className="show-more-button" onClick={()=>setShowMore({...showMore, proj2: !showMore.proj2})}>Show More</h4>
                        :
                        <h4 className="show-more-button" onClick={()=>setShowMore({...showMore, proj2: !showMore.proj2})}>Show Less</h4>

                    }                
                </div>
            </Card>
            </div>
            <div className='proj-card-holder'>
            <Card id="proj3">
                <Card.Img variant= "top" src={restLogo} style={{width: '40vw', margin: '0 auto'}}/>
                <Card.Body >
                    <Card.Title>
                        RESTful API
                    </Card.Title>
                    <Card.Text>
                        A demonstration of a self-built RESTful API and appropriate documentation.
                    </Card.Text>
                    {
                    showMore.proj3 === true && <>
                    <Card.Text>Deployed: No</Card.Text>
                    <div className='proj-icons'>

                        <div className="icon-holder">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" />
                        </div>
                        <div className="icon-holder">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original-wordmark.svg" />
                        </div>
                        <div className="icon-holder">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" />
                        </div>

                    </div>
                    <div className='link-holder'>
                        <Card.Link href="https://github.com/Garofalo/random-quest" target="_blank">GitHub Repository</Card.Link>
                    </div>
                    </>
                }
                </Card.Body>
                <div>
                    {
                        showMore.proj3 === false ? 
                        <h4 className="show-more-button" onClick={()=>setShowMore({...showMore, proj3: !showMore.proj3})}>Show More</h4>
                        :
                        <h4 className="show-more-button" onClick={()=>setShowMore({...showMore, proj3: !showMore.proj3})}>Show Less</h4>

                    }
                </div>
            </Card>
            </div>
            <div className='proj-card-holder'>
            <Card id="proj4">
                <Card.Img variant= "top" src={yourCraft} style={{width: '40vw', margin: '0 auto'}}/>
                <Card.Body >
                    <Card.Title>
                        YourCraft
                    </Card.Title>
                    <Card.Text>
                        A full stack inventory application built with a team that allows all users to see what craft brewers have in stock, and allows authenticated users to create, update and delete beverages. 
                    </Card.Text>
                    {
                    showMore.proj4 === true && <>
                    <Card.Text>Deployed: Yes</Card.Text>
                    <div className='proj-icons'>

                        <div className="icon-holder">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                        </div>
                        <div className="icon-holder">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" />
                        </div>
                        <div className="icon-holder">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
                        </div>

                    </div>
                    <div className='link-holder'>
                        <Card.Link href="https://your-craft.netlify.app/" target="_blank">Deployed Site</Card.Link>
                    </div>
                    <div className='link-holder'>
                        <Card.Link href="https://github.com/kimcapgab/your-craft" target="_blank">GitHub Repository</Card.Link>
                    </div>
                    </>
                }
                </Card.Body>
                <div>
                    {
                        showMore.proj4 === false ? 
                        <h4 className="show-more-button" onClick={()=>setShowMore({...showMore, proj4: !showMore.proj4})}>Show More</h4>
                        :
                        <h4 className="show-more-button" onClick={()=>setShowMore({...showMore, proj4: !showMore.proj4})}>Show Less</h4>

                    }
                </div>
            </Card>
            </div>

        </div>
    )
}