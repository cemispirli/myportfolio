import React from 'react'
import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import '../css/Navbar.css'

const Navbarx = () => {
  const [expanded, setExpanded] = useState(false);

  const navstyle = { 
    color: 'white',
    textDecoration: 'none',
  }

  return (
    <div >
      <Navbar bg="light" expand="md" className='header-color  ' expanded={expanded} >
      <div className='container-fluid pe-4 ps-4 me-3'>
        <Navbar.Brand style={navstyle} ><NavLink className=' active'style={navstyle} onClick={() => setExpanded(expanded & false)} to="/" >MyPortfolio</NavLink></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav " onClick={() => setExpanded(expanded ? false : "expanded")} />
        <Navbar.Collapse id="basic-navbar-nav "  >
          <Nav className="justify-content-end flex-grow-1 me-5   ">
            <NavLink className='ms-5 active'style={navstyle} onClick={() => setExpanded(expanded & false)} to="/">Home</NavLink>
            <NavLink className='ms-5 active'style={navstyle} onClick={() => setExpanded(expanded & false)} to="aboutme" >About Me</NavLink>
            <NavLink className='ms-5 active'style={navstyle} onClick={() => setExpanded(expanded & false)} to="projects" >Projects</NavLink>
            <NavLink className='ms-5 active'style={navstyle} onClick={() => setExpanded(expanded & false)} to="MyCv" >My Cv</NavLink>
            <NavLink className='ms-5 active'style={navstyle} onClick={() => setExpanded(expanded & false)} to="Certificates" >Certificates</NavLink>
            <NavLink className='ms-5 active'style={navstyle} onClick={() => setExpanded(expanded & false)} to="contact" >Contact</NavLink>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
    </div>
  )
}

export default Navbarx