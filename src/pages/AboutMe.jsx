import React from "react";
import { Col, Row } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";
import profil from "../img/profil.png";
import "../css/AboutMe.css";

const AboutMe = () => {
  return (
    <div className="aboutme-row">
      <Row>
        <Col xs={12} md={4} className="aboutme-left-col">
          <div style={{ textAlign: "center" }}>
            <img
              src={profil}
              alt="avatar"
              style={{
                height: "200px",
                borderRadius: "50%",
                border: "2px solid #0374ff4a",
              }}
            />
          </div>

          <h1 style={{ paddingTop: "2em", paddingBottom: "10px" }}>
            Cem İspirli
          </h1>
          <h4 style={{ color: "#00000085" }}>Frontend Developer</h4>
          <hr className="aboutme-lefthr" />
          <p className="aboutme-p">
            +1 years experienced in IT and an expert front end developer,
            interested in writing codes, skilled at developing complex
            solutions, creating responsive designs, possessing strong creative
            thinking skills, highly energetic and integrated with strong
            troubleshooting abilities. Quickly grasp new technologies and
            concepts to develop innovative and creative solutions to problems.
            Always eager to learn various technologies, tools and libraries.
            Especially interested in the Front end/Web Development, HTML, CSS,
            JS, React. Excited to learn new things and improve, lifetime
            student.
          </p>
          <hr className="aboutme-lefthr" />

          <h5>Phone</h5>
          <p>+(90) 506-642-14-48</p>
          <h5>Email</h5>
          <p>cemispirli08@gmail.com</p>
          <h5>Github</h5>
          <p>www.github.com/cemispirli</p>
          <hr className="aboutme-lefthr" />
        </Col>
        <Col xs={12} md={8} className="aboutme-right-col">
          <h2>Experience</h2>

          <Row>
            <Col xs={12} md={4}>
              <h4 style={{ marginTop: "10px" }}>2022 - Present</h4>
            </Col>
            <Col xs={12} md={8}>
              <h4 style={{ marginTop: "10px" }}>Clarusway</h4>
              <p style={{ textAlign: "justify" }}>
                Developed interactive, responsive and scalable frontend using
                HTML5, CSS3, JavaScript ES6, React,Designing a website with
                HTML, CSS, SASS(SCSS) and Bootstrap-5 codes,Support HTML and CSS
                projects using JS Dom manipulation and event
                listeners,Developing the payment page of the e-commerce website
                with JS functions using DOM, iterator, callback functions,
                string array functions and events,Requesting apis using Async,
                Await and Fetch structures to view data from various
                platforms,Enabling customers to make transactions on their
                websites using json, local storage, and array methods,Using
                state hook and component structures in various projects Working
                with React-router, bootstrap and axios libraries for
                user-friendly preparation of prepared websites, Combined
                Material UI and Semantic UI libraries to achieve better UI
                experience, State management applied using React States and
                Redux, Studied on Version Control Systems(Git & Github),
                Software Development Life Cycle (SDLC), Used SCRUM & Agile
                methodologies and JIRA while working on individual & group
                projects
              </p>
            </Col>
          </Row>
          <hr style={{ borderTop: "3px solid #e22947" }} />
          <h2>Education</h2>

          <Row>
            <Col xs={12} md={4}>
              <h4 style={{ marginTop: "10px" }}>2007 - 2011</h4>
            </Col>
            <Col xs={12} md={8}>
              <h4 style={{ marginTop: "10px" }}>Turkish Military Academy</h4>
              <p style={{ textAlign: "justify" }}>
                Turkish Military Academy or traditionally known as Harbiye; It
                is a military school in Ankara, which is the active officer
                resource of the Turkish Land Forces, providing education at the
                undergraduate level.
              </p>
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={4}>
              <h4 style={{ marginTop: "10px" }}>2021 - 2022</h4>
            </Col>
            <Col xs={12} md={8}>
              <h4 style={{ marginTop: "10px" }}>Clarusway</h4>
              <p style={{ textAlign: "justify" }}>
                Clarusway is a Virginia-based IT training school specializing in
                Cloud & DevOps Engineering, Cybersecurity, Data Analytics, Data
                Science, Machine Learning, Deep Learning, Full Stack
                Development, Front End Development, Back End Development and
                Salesforce.
              </p>
            </Col>
          </Row>

          <hr style={{ borderTop: "3px solid #e22947" }} />

          <h2>Skills</h2>

          <Row>
            <Col xs={4} md={4}>
              <h5>React</h5>
            </Col>
            <Col xs={8} md={8}>
              <ProgressBar
                style={{ margin: "auto", width: "100%" }}
                now={100}
                animated
              />
            </Col>
          </Row>

          <Row>
            <Col xs={4} md={4}>
              <h5>Javascript</h5>
            </Col>
            <Col xs={8} md={8}>
              <ProgressBar
                style={{ margin: "auto", width: "100%" }}
                now={100}
                animated
              />
            </Col>
          </Row>

          <Row>
            <Col xs={4} md={4}>
              <h5>Html-Css</h5>
            </Col>
            <Col xs={8} md={8}>
              <ProgressBar
                style={{ margin: "auto", width: "100%" }}
                now={100}
                animated
              />
            </Col>
          </Row>

          <Row>
            <Col xs={4} md={4}>
              <h5>Django</h5>
            </Col>
            <Col xs={8} md={8}>
              <ProgressBar
                style={{ margin: "auto", width: "100%" }}
                now={40}
                animated
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default AboutMe;
