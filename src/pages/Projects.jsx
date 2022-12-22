import React from 'react'
import ProjectCard from '../components/ProjectCard';
import data from '../helpers/data'
import { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';



console.log(data);
const Projects = () => {
 
  const [category, setCategory] = useState('react')

  // const handleCategory = (e) => {
  //   setCategory(e.target.value)
  // }

  const filteredData = data.filter((project) => project.category === category).sort((a, b) => b.id - a.id)
  


  return (
    <div className="projects">
      <div className="projects__header">
        {/* <h1>Projects</h1> */}
        <Tabs onSelect={(k) => setCategory(k)} defaultActiveKey="react" id="uncontrolled-tab-example" className="mb-3" style={{justifyContent:'center'}}>
          <Tab eventKey="react" title="React">
            {/* <p>React</p> */}
          </Tab>
          <Tab eventKey="javascript" title="Javascript">
            {/* <p>Javascript</p> */}
          </Tab>
          <Tab eventKey="html-css" title="Html-Css">
            {/* <p>Html-Css</p> */}
          </Tab>
          <Tab eventKey="django" title="Django">
            {/* <p>Django</p> */}
          </Tab>
        </Tabs>
      </div>

    <div className="project-grid">
      {filteredData.map((project) => 
        <ProjectCard key={project.id} project={project} />
      )
      }
      </div>

      
    </div>
  )
}

export default Projects