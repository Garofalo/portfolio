import "./About.css"
import AboutDrop from "../AboutDrop/AboutDrop"
import { aboutList } from "./about"

export default function About(){

    const aboutDropDowns = aboutList.map((about)=>(
        <AboutDrop info={about.info} title={about.title}/>
    ))
    
    return(

        <div id="about">
            <h1 style={{padding: '0px', 
                borderBottom: '2px solid black',  
                width: '92vw', 
                margin:'0 auto 0 auto'}}>Regarding Yours Truly</h1>
                <p className='italics'>"30th try's the charm" -  Me</p>
            <h5 style={{width:"80vw", margin: "2% auto 0 auto"}}>  Full Stack Software Engineering
                allows me to fulfill my need for a creative outlet
                <span className="bold"> and </span>scratch my problem solving 
                itch while honing my professional skillset. I truly 
                am a lifelong learner, and my approach to learning a 
                new skill has led me to teach peers in a wide variety 
                of topics - from Tang Soo Do as a teenager (a Korean 
                martial art), to sales in my 20s, to professionally 
                tasting (read: drinking) beer in my late 20s and 
                early 30s. I have that same desire to learn, refine, 
                and share the skill of software development, 
                so I spend my days coding. The feeling of finally 
                figuring out a problem and everything just  
                <span className='italics'> clicks</span> into place is my daily white whale. </h5>

            {aboutDropDowns}                 
        </div>

    )
}