import { Button, Col, Container, Row } from "react-bootstrap";
import React, { useEffect } from "react"
import { Image } from "react-bootstrap";
import photo from '../../images/me.png'
import { NavBar } from "../NavBar/NavBar";
import "../scss/_greet.scss"
import "../scss/_variables.scss"
import resume from "../../images/RichieHolsenbackResumeV3.pdf"
import { Link, useLocation } from "react-router-dom";
import point from '../../images/point.png'
import thumbs from '../../images/thumbs.png'
import skatebird from '../../images/skatebird.png'
import pc from '../../images/PC.png'

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

export const GreetingSection = () => {
    return (
        <div className="greet-page">
            <NavBar />
            <Container>
                <Row id="main-section">
                    <Col s={12} md={12} lg={6}>
                        <Image id="prof-pic" src={photo} thumbnail />
                    </Col>
                    <Col md={8} lg={6}>
                        <Row>
                            <Col xl={12}>
                                <h1 id="greet-title">I'm Richie Holsenback</h1>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={12}>
                                <p id="greet-blurb">
                                    I’m a UI/UX designer and a front end developer. I am excited about the idea of working with
                                    agile teams to create beautiful, responsive applications that are user focused and user tested.
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={2} lg={2}>
                                <a href="https://www.linkedin.com/in/richie-holsenback/" target="_blank" rel="noreferrer">
                                    <svg id="icon-svg" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="#FFF6E9"><path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.39 0 4.18 1.56 4.18 4.89v6.21z" />
                                    </svg>
                                </a>
                            </Col>
                            <Col xs={2} lg={2}>
                                <a href="mailto:richieholsenback@gmail.com" target="_blank" rel="noreferrer">
                                    <svg id="icon-svg" xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke=" #FFF6E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>
                                    </svg>
                                </a>
                            </Col>
                            <Col xs={2} lg={2}>
                                <a href="https://github.com/richieholsenback" target="_blank" rel="noreferrer">
                                    <svg id="icon-svg" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill=" #FFF6E9" class="bi bi-github" viewBox="0 0 16 16">
                                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                    </svg>
                                </a>
                            </Col>
                            <Col xs={2} lg={2}>
                                <a href={resume} target="_blank" rel="noreferrer">
                                    <svg id="icon-svg" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke=" #FFF6E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z" /><path d="M14 3v5h5M16 13H8M16 17H8M10 9H8" /></svg>
                                </a>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Link to="/work"><Button size="xl" id="btn">See My Work</Button></Link>
                            </Col>
                        </Row>
                    </Col >
                </Row>
                <Row id="sub-section">
                    <Col lg={4}>
                        <Image src={point} id="point" />
                    </Col>
                    <Col lg={8}>
                        <h2 id="greet-sub-titles">“If you just focus on getting better, and not being the best, you have such a good time” -James Acaster</h2>
                    </Col>
                </Row>
                <Row id="sub-section">
                    <Col lg={8}>
                        <h2 id="greet-sub-titles">User focused. User Tested. User Approved.</h2>
                        <p>Design should benefit the user. I have developed a passion for creating websites and applications that have the user and their goals in mind from the very beginning. Conducting research about the target user base, creating user personas and journey maps, making experience maps and interaction flows. Designing wireframes, mockups, and prototypes that have information architecture, reactive design, and accessibility in mind. Bringing the site to life using HTML, CSS, Javascript, ReactJS, and Scss. Knowing I can help a user succeed in their goals with my knowledge and skill is an incredible feeling.</p>
                    </Col>
                    <Col lg={4}>
                        <Image src={pc} id="point" />
                    </Col>
                </Row>
                <Row id="sub-section">
                    <Col lg={4}>
                        <Image src={skatebird} id="point" />
                    </Col>
                    <Col lg={8}>
                        <h2 id="greet-sub-titles">Building skateboards.</h2>
                        <p>I'm focused on building something simple first and going from there. Build a skateboard. It's simple, but it accomplishes the goal. Then keep working until you have a scooter. Keep working until you've got a motorcycle. Don't stop until you've got a Lamborghini.</p>
                        <Link to="/work"><Button size="xl" id="btn">See My Skateboards</Button></Link>
                    </Col>
                </Row>
            </Container>
        </div >
    )
}