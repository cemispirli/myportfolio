import React from 'react'
import { Col, Container, NavLink} from 'react-bootstrap'
import { FaGithubSquare } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import profil from "../img/profil.png"

const Home = () => {
  return (
    <div className='home-div'>
      <Container className="home">
        <Col col={12} >
          <img 
          // src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png" 
          src={profil}
          alt="MyPhoto" className="avatar-img" />
          <div className="banner-text">
            <h1 >Frontend Developer</h1>
            
          
          <hr/>
          <p>React | JavaScript | Html-Css | Python | Django | Sass |  Bootstrap | Redux | Linux | Jira | SqLite | PostgreDB</p> 
           
          <div className="social-links">

          {/* LinkedIn */}
          <NavLink className="social-icon" href="https://www.linkedin.com/in/cemispirli/" rel="noopener noreferrer" target="_blank">
          <FaLinkedin style={{color: "#ffffff99", className: "linkedin", fontSize:"2.5rem"}}/>          
          </NavLink>

          {/* Github */}
          <NavLink className="social-icon" href="https://github.com/cemispirli" rel="noopener noreferrer" target="_blank">     
          <FaGithubSquare style={{color: "#ffffff99", className: "github", fontSize:"2.5rem"}} />
          </NavLink>

          </div>
          </div>
        </Col>
      </Container>
    </div>
  )
}

export default Home