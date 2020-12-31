import { Button, Col, Row } from "react-bootstrap";
import React from "react"
import { Image } from "react-bootstrap";
import photo from '../../images/me.png'
import { NavBar } from "../NavBar/NavBar";
import "../scss/_greet.scss"
import "../scss/_variables.scss"
import { Link } from "react-router-dom";
import resume from "../../images/RichieHolsenbackResumeV3.pdf"


export const GreetingSection = () => {
    return (
        <div className="greet-page">
            <NavBar />
            <div className="main-container">
                <Image id="prof-pic" src={photo} thumbnail fluid />
                <div className="greet-info">
                    <h1 id="greet-title">Richie Holsenback</h1>
                    <p id="greet-blurb">
                        I’m a UI/UX designer and a front end developer. I am excited about the idea of working with
                        agile teams to create beautiful, responsive applications that are user focused and user tested.
                    </p>
                    <div id="link-buttons" >
                        <div id="link" >
                            <a href="https://www.linkedin.com/in/richie-holsenback/" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="white" class="bi bi-linkedin" viewBox="0 0 16 16">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                            </svg>
                            </a>
                            <a href="mailto:richieholsenback@gmail.com" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="white" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                            </svg>
                            </a>
                            <a href="https://github.com/richieholsenback" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="white" class="bi bi-github" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                            </svg>
                            </a>
                            <a href={resume} download>
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="white" class="bi bi-file-earmark-text" viewBox="0 0 16 16">
                                <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                                <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                            </svg>
                            </a>
                        </div>
                        {/* <div id="button" >
                            <Button size="xl" className="btn custom-btn" onclick="document.getElementById('project-half').scrollIntoView()">See My Work</Button>
                        </div> */}
                    </div>
                </div>
                </div>
                <div className="project-half" id="project-half">
                    <h3 id="project-header">Recent Work</h3>
                    <Row className="project-section" fluid>
                        <Col className="project-card">
                            <div className="square"></div>
                            <a href="https://github.com/richieholsenback/laughtrack" target="_blank">
                                <h4 className="project-name">Laugh Track</h4>
                            </a>
                        </Col>
                        <Col className="project-card">
                            <div className="square"></div>
                            <a href="https://github.com/nss-day-cohort-43/nss-day-cohort-43.github.io" target="_blank">
                                <h4 className="project-name">NSS Cohort 43 Website</h4>
                            </a>
                        </Col>
                        <Col className="project-card">
                            <div className="square"></div>
                            <a href="https://github.com/richieholsenback/laughtrack" target="_blank">
                                <h4 className="project-name">Laugh Track</h4>
                            </a>
                        </Col>
                    </Row>
            </div>
        </div>
    )
}