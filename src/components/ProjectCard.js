import React from 'react'
import {Card } from 'react-bootstrap';
import { NavLink} from 'react-bootstrap'
import { FaGithubSquare } from 'react-icons/fa'
import { MdOutlineLiveTv } from 'react-icons/md'
import '../css/ProjectCard.css'


const ProjectCard = ({project,id}) => {
  return (
    <div key={project.id} className="project-card">
        <Card  style={{ width: '18rem',height:'25rem' }}>
            <Card.Img variant="top" src={project.gif} />
            <Card.Body>
                <Card.Title  >{project.name}</Card.Title>
                <Card.Text style={{height:"7rem"}}>
                {project.desc.length > 100 ? project.desc.substring(0, 150) + "..." : project.desc }
                </Card.Text>
                <div className="project-links" >
                {/* Github */}
                <NavLink className="project-icon" href={project.github} rel="noopener noreferrer" target="_blank" title='Github'   >    
                <FaGithubSquare className="project-icon-fa" style={{className: "github", fontSize:"2.5rem", hover:{color:"#67e811"}
              }} />
                </NavLink>
                {/* Live Site */}
                <NavLink className="project-icon"  href={project.liveSite} rel="noopener noreferrer" target="_blank" title='LiveSite' >
                <MdOutlineLiveTv style={{ className: "livesite", fontSize:"2.5rem"}}/>
                </NavLink> 
                </div>
            </Card.Body>
        </Card>
          </div>
  )
}

export default ProjectCard