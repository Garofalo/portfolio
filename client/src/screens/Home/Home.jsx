
import './Home.css'
import Footer from '../../components/Footer/Footer';
import Projects from '../../components/Projects/Projects';
import logo from '../../utils/rest.png'
import netlify from '../../utils/netlify.png'
import '../../components/Parallax/Parallax.css'

export default function Home({darkMode}){
    const isDark = darkMode ? "dark-content" : "light-content"
    return (
    <div className='column-div'>
        <div className={`parallax forest `} id="home">
            <div className={`parallax-title ${isDark}`}>
                <span>Ron Garofalo</span>
            </div>
        </div>

        <div className="about container-home" id="about">
            <h1 style={{padding: '0px', borderBottom: '2px solid black',  width: '92vw', margin:'0 auto 0 auto'}}>Regarding Yours Truly</h1>
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
                Development, so I spend my days coding. That feeling of                     
                finally figuring out a problem and everything just 
                <span className='italics'> clicks</span> into place is my daily white whale. </h2>

        </div>
        <Projects />
        <div className={`parallax racoon`} >
            <div id='racoon' className={`parallax-title ${isDark}`} >
                <span>Developer Toolbox</span>
            </div>    
        </div>
        <div className="skills container-home" id="skills">
            <div className="skill-holder">
                <img alt="python logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" />
                <h4>200+ Hours</h4>
                <h4>20+ Projects</h4>
            </div>            
            <div className="skill-holder">
                <img alt="js logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                <h4>200+ Hours</h4>
                <h4>20+ Projects</h4>
            </div>
            <div className="skill-holder">
                <img alt='vscode logo' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" />
                <h4>200+ Hours</h4>
                <h4>20+ Projects</h4>
            </div>
            <div className="skill-holder">
                <img alt="react logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
                <h4>200+ Hours</h4>
                <h4>20+ Projects</h4>
            </div>
            <div className="skill-holder ">
                <img alt="html logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" />
                <h4>200+ Hours</h4>
                <h4>Every Project</h4>
            </div>
            <div className="skill-holder">
                <img alt="css logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" />
                <h4>200+ Hours</h4>
                <h4>Every Project</h4>
            </div>
            <div className="skill-holder">
                <img alt='google logo' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" />
                <h4>200+ Hours</h4>
                <h4>Every Project</h4>
            </div>

            <div className="skill-holder">
                <img alt='github logo' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" />
                <h4>100+ Hours</h4>
                <h4>20+ Projects</h4>
            </div>            
            <div className="skill-holder">
                <img alt='npm logo' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" />
                <h4>50+ Hours</h4>
                <h4>20+ Projects</h4>
            </div>
            <div className="skill-holder">
                <img alt="django logo" src={netlify} />
                <h4>50+ Hours</h4>
                <h4>5+ Projects</h4>
            </div>
            <div className="skill-holder">
                <img alt='pycharm logo' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-original-wordmark.svg" />
                <h4>50+ Hours</h4>
                <h4>15+ Projects</h4>
            </div>
            <div className="skill-holder">
                <img alt='figma logo' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" />    
                <h4>50+ Hours</h4>
                <h4>5+ Projects</h4>
            </div>          
                   
            <div className="skill-holder">
                <img alt="django logo" src={logo} />
                <h4>50+ Hours</h4>
                <h4>6 Projects</h4>
            </div>
            <div className="skill-holder ">
                <img alt="flask logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original-wordmark.svg" />
                <h4>50+ Hours</h4>
                <h4>3 Projects</h4>
            </div>
            <div className="skill-holder">
                <img alt="postgresql logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" />
                <h4>50+ Hours</h4>
                <h4>10 Projects</h4>
            </div>
            <div className="skill-holder ">
                <img alt="express logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" />
                <h4>25+ Hours</h4>
                <h4>5 Projects</h4>
            </div>
            <div className="skill-holder">

                <img alt='mongo db logo' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" />
                <h4>25+ Hours</h4>
                <h4>10 Projects</h4>
            </div>
            <div className="skill-holder">
                <img alt='pandas logo' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original-wordmark.svg" />
                <h4>25+ Hours</h4>
                <h4>10 Projects</h4>
            </div>
            <div className="skill-holder">
                <img alt="heroku logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original-wordmark.svg" />
                <h4>25+ Hours</h4>
                <h4>10 Projects</h4>
            </div>
            <div className="skill-holder">
                <img alt="material ui logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" />
                <h4>10+ Hours</h4>
                <h4>2 Projects</h4>
            </div>
            <div className="skill-holder">
                <img alt='sqlite logo' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original-wordmark.svg" />
                <h4>5+ Hours</h4>
                <h4>1 Project</h4>
            </div>
        </div>            
        






        <div className={`parallax pitt`} >
            <div className={`parallax-title ${isDark}`} >
                <span>Contact</span>
            </div>    
        </div>
    <Footer />
</div>)
}