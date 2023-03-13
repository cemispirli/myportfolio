import React from 'react'
import ProjectCard from '../components/ProjectCard';
import { useState, useEffect } from 'react'
import { Tab, Tabs } from 'react-bootstrap';
import paginate from '../components/utils'
import projectsData from '../helpers/data'
import '../css/Projects.css'


const Projects = () => {
 
  const [category, setCategory] = useState('react')
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const [page, setPage] = useState(0)
  const [cards, setCards] = useState([])

  const filteredData = projectsData.filter((project) => project.category === category).sort((a, b) => b.id - a.id)

  
  useEffect(() => {
    setData(paginate(filteredData))
    setLoading(false)
  }, [category, filteredData])

  useEffect(() => {
    setPage(0)
  }, [category])

  useEffect(() => {
    if (loading) return
    setCards(data[page])
    window.scrollTo({top: 0});
  }, [ loading, page, data])


  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1
      if (nextPage > data.length - 1) {
        nextPage = 0
      }
      return nextPage
    })
  }
  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1
      if (prevPage < 0) {
        prevPage = data.length - 1
      }
      return prevPage
    })
  }

  const handlePage = (index) => {
    setPage(index)
  }


  return (
    <div className="projects">
      <div className="projects__header">
        <Tabs onSelect={(k) => setCategory(k)}
        defaultActiveKey="react" id="uncontrolled-tab-example" className="mb-3" style={{justifyContent:'center'}}>
          <Tab eventKey="react" title="React" value="react">
          </Tab>
          <Tab eventKey="javascript" title="Javascript" value="javascript">
          </Tab>
          <Tab eventKey="html-css" title="Html-Css" value="html-css">
          </Tab>
          <Tab eventKey="django" title="Django" value="django">
          </Tab>
        </Tabs>
      </div>

<h1>{loading ? 'loading...' : ''}</h1>

      <div className="projects__container">

    <div className="project-grid">
      
      {cards.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
      </div>
      
      <div className='btn-container'>
            <button className='prev-btn' onClick={prevPage}>
              prev
            </button>
            {data.map((item, index) => {
              return (
                <button
                  key={index}
                  className={`page-btn ${index === page ? 'active-btn' : null}`}
                  onClick={() => handlePage(index)}
                >
                  {index + 1}
                </button>
              )
            })}
            <button className='next-btn' onClick={nextPage}>
              next
            </button>
          </div>

          </div>

      
    </div>
  )
}

export default Projects