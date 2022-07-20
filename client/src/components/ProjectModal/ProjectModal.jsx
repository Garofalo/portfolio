import { useState } from "react"
import {  Modal, Image } from "react-bootstrap";
import "./ProjectModal.css"

export default function ProjectModal({
    deployed, 
    title, 
    image, 
    description,
    links,
    secondRepo}){

    const [showMore, setShowMore] = useState(false)
    
    return(
        <div className="project-modal">
            {image && <>
            <Image
            fluid 
            alt={`${title}`}
            src={require(`../../utils/${image}`)} 
            onClick={()=>setShowMore(true)}/>
            <h3>{title}</h3>
            <Modal
                centered 
                size='md' 
                className="black-font" 
                show={showMore} 
                onHide={()=>setShowMore(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>
                       {title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="proj-body">
                <Image
                fluid 
                alt={`${title}`}
                src={require(`../../utils/${image}`)} 
                />
                    <h4>{description}</h4>
                    <h4>{`Deployed: ${deployed}`}</h4>
                </Modal.Body>
                <Modal.Footer>
                    {secondRepo ? 
                    <>
                        <a rel="noreferrer" 
                            href={links[1]} 
                            target="_blank">Deployed Site</a>
                        <a rel="noreferrer" 
                            href={links[0]} 
                            target="_blank">Frontend Repo</a>
                        <a rel="noreferrer" 
                            href={secondRepo} 
                            target="_blank">Backend Repo</a>
                    </> 
                    :
                    <>
                        {
                            links[1] && 
                            <a rel="noreferrer" 
                                href={links[1]} 
                                target="_blank">Deployed Site</a>
                        }

                        {   links[0] !== "private" &&
                            <a rel="noreferrer" 
                        href={links[0]} 
                        target="_blank">GitHub Repo</a>}

                    </>
                    }
                </Modal.Footer>
            </Modal>
            </>}
        </div>
    )
}