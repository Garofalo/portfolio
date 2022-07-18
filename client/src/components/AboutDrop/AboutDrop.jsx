import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faAngleDown, faAngleUp} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function AboutDrop({title, info}){

    const [showMore, setShowMore] = useState(true)

    return(
        <div>
            { showMore ? 
            <div className="about-title-holder">
                <FontAwesomeIcon className='arrow' size='lg' onClick={()=>setShowMore(false)}icon={faAngleDown}/>
                <h1>{title}</h1>
            </div>                :
            <div className="show-more">
                <div className="about-title-holder">
                    <FontAwesomeIcon className='arrow' onClick={()=>setShowMore(true)} icon={faAngleUp}/>
                    <h1>{title}</h1>
                </div>
                <h4>{info}</h4>
            </div>
            }
        </div>
    )
}