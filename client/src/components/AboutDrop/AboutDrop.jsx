import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faAngleDown, faAngleUp} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function AboutDrop({title, info}){

    const [showMore, setShowMore] = useState(true)

    return( 
        <div>
            { showMore ? 
            <div onClick={()=>setShowMore(false)} className="about-title-holder">
                <FontAwesomeIcon className='arrow' size='lg'  icon={faAngleDown}/>
                <h1>{title}</h1>
            </div>                :
            <div  onClick={()=>setShowMore(true)} className="show-more">
                <div className="about-title-holder">
                    <FontAwesomeIcon className='arrow'icon={faAngleUp}/>
                    <h1>{title}</h1>
                </div>
                <h4>{info}</h4>
            </div>
            }
        </div>
    )
}