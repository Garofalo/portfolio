import emailjs from 'emailjs-com'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import { Modal, Button, Form } from 'react-bootstrap';


export default function Contact(){

    const REACT_APP_PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY


    const [form, setForm] = useState({
        from: "",
        company: "",
        message: "",
        email:""
    })

    const [popout, setPopout] = useState(false)

    function sendEmail(e){
        e.preventDefault();
        if(form.from !== "" && form.subject !== "" && form.message !== ""){
            try{
                const res = emailjs.send('contact_service','port_contact',
                form, `${REACT_APP_PUBLIC_KEY}`)
                if(res){
                    setForm({
                        from: "",
                        company: "",
                        message: "",
                        email:""
                    })
                    setPopout(false)
                }
        
            } catch(error){
                    throw error
                }
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
          ...form,
          [name]: value,    
        });
      };
    
    
    return(
        <div className='a-contact'>

            <FontAwesomeIcon 
            id="email"
            className="foot-icon"  
            icon={faAt} 
            onClick={()=>setPopout(true)}/>
            <Modal 
                centered 
                size='md' 
                className="black-font" 
                show={popout}
                onHide={()=>setPopout(false)} 
                >
                <Modal.Header closeButton>
                    <Modal.Title>
                       Howdy! Say hi!
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form onSubmit={sendEmail}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter Name (required)"
                            value={form.from}
                            name="from"
                            onChange={handleChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Company</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter Company"
                            value={form.company}
                            name="company"
                            onChange={handleChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control 
                            type="email" 
                            placeholder="Enter Email (required)"
                            value={form.email}
                            name="email"
                            onChange={handleChange} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Message</Form.Label>
                        <Form.Control
                            rows={4}
                            as="textarea" 
                            name="message"
                            placeholder="Enter Message"
                            value={form.message}
                            onChange={handleChange} />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>

                </Modal.Body>
            </Modal>
            
        </div>        
    )
}