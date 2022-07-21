import emailjs from 'emailjs-com'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import { Modal, Button } from 'react-bootstrap';


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
                       Send Me an Email!
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={sendEmail}>
                        <input required 
                            type="text" 
                            name="from"
                            value={form.from}
                            onChange={handleChange}/>
                        <label>*Name</label>
                        <input required 
                            type="text" 
                            name="company"
                            value={form.company}
                            onChange={handleChange}/>
                        <label>*Company</label>
                        <input required 
                            type="text" 
                            name="email"
                            value={form.email}
                            onChange={handleChange}/>
                        <label>*Email</label>
                        <textarea required
                            rows='4' 
                            type="text" 
                            name="message"
                            value={form.message}
                            onChange={handleChange}/>
                        <label>*Message</label>
                        <Button variant='contained' 
                            type="submit">Submit</Button>
                    </form>
                </Modal.Body>
            </Modal>
            
        </div>        
    )
}