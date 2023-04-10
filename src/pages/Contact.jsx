import React from 'react'
import { Col,Container,Row } from 'react-bootstrap'
import { FaPhoneSquareAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import profil from "../img/profil.png"
import '../css/Contact.css'



const Contact = () => {
  return (
    <div>
      <div className="contact-body" >
        <Container className="contact-container" fluid="md">
          <Row >
            <Col md> 
            <img
              src={profil}
              alt="avatar"
              style={{height: '12em', margin: '1em',borderRadius:"50%"}}
               />
               <h2>Cem İspirli</h2>
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>👋 I'm Cem İspirli, I'm a frontend developer. I started my journey at the end of 21. I have proficiency to work in HTML5, CSS3 and JS and React. I am currently focused on learning Django.</p>

            </Col>
            <Col md className="contact-list">
              
              <Row><h1>Contact Me</h1></Row>
              
              <Row className='row-list'>

                             
            
                <h5 style={{ fontFamily: 'Anton'}}>              
                    <MdEmail style={{ fontSize: '40px',marginRight:"1rem"}}/> 
                    <a href="mailto:cemispirli08@gmail.com" className="NavLink-Contact">cemispirli08@gmail.com</a> 
                </h5>
                
              </Row>
            </Col>
            </Row>
          </Container>
      </div>
      </div>
  )
}

export default Contact
