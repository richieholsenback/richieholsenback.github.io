import { Button, Col, Container, Row } from "react-bootstrap";
import React, { useState, useEffect } from "react"
import { Image } from "react-bootstrap";
import photo from '../../images/me.png'
import { NavBar } from "../NavBar/NavBar";
// import "../scss/_work.scss"
import "../scss/_greet.scss"
import "../scss/_variables.scss"
import resume from "../../images/RichieHolsenbackResumeV3.pdf"
import LTphoto from '../../images/Standup.png'
import C43photo from '../../images/PC.png'
import { Link } from "react-router-dom";

export const ProjectPage = () => {
    return (
        <div className="work-page">
            <NavBar />
            <div id="projects-all">
                <h3 id="project-header">Recent Work</h3>
                <Container id="Container">
                    <Row id="margin" noGutters>
                        <Col xl={6}>
                            <Link to="/laugh-track" >
                                <Image src={LTphoto} width="100%" height="auto" />
                            </Link>
                        </Col>
                        <Col xl={6}>
                            <h4 className="project-title">Laugh Track</h4>
                            <p className="project-text date">November 2020</p>
                            <p className="project-text">Designed to help comedians improve, organize and succeed.</p>
                            <Link to="/laugh-track"><Button size="sm" id="btn-sm">Case Study</Button></Link>
                        </Col>
                    </Row>
                    <Row id="large-screen" noGutters>
                        <Col xl={6}>
                            <h4 className="project-title">Cohort 43 Class Site</h4>
                            <p className="project-text date">December 2020</p>
                            <p className="project-text">Showcasing the talented individuals at the Nashville Software School in Cohort 43</p>
                            <Link to="/cohort-site"><Button size="sm" id="btn-sm">Case Study</Button></Link>
                        </Col>
                        <Col xl={6}>
                            <Link to="/cohort-site" >
                                <Image src={C43photo} width="100%" height="auto" />
                            </Link>
                        </Col>
                    </Row>
                    <Row id="small-screen" noGutters>
                        <Col xl={6}>
                            <Link to="/cohort-site" >
                                <Image src={C43photo} width="100%" height="auto" />
                            </Link>
                        </Col>
                        <Col xl={6}>
                            <h4 className="project-title">Cohort 43 Class Site</h4>
                            <p className="project-text date">December 2020</p>
                            <p className="project-text">Showcasing the talented individuals at the Nashville Software School in Cohort 43</p>
                            <Link to="/cohort-site"><Button size="sm" id="btn-sm">Case Study</Button></Link>
                        </Col>
                    </Row>
                    <Row id="margin" noGutters>
                        <Col xl={6}>
                            <Link to="/cohort-site" >
                                <Image src={LTphoto} width="100%" height="auto" />
                            </Link>
                        </Col>
                        <Col xl={6}>
                            <h4 className="project-title">Cohort 43 Class Site</h4>
                            <p className="project-text date">December 2020</p>
                            <p className="project-text">Showcasing the talented individuals at the Nashville Software School in Cohort 43</p>
                            <Link to="/cohort-site"><Button size="sm" id="btn-sm">Case Study</Button></Link>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}