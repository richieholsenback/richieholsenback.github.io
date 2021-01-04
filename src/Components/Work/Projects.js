import { Button, Col, Modal, Row } from "react-bootstrap";
import React, { useState } from "react"
import { Image } from "react-bootstrap";
import LTphoto from '../../images/isometric-web-pages-mockup.png'
import "../scss/_greet.scss"
import "../scss/_variables.scss"

export function LaughTrack() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Col id="project-card-container" >

                <a onClick={handleShow} id="project-card">
                    <Image id="project-pics" src={LTphoto} width="85%" height="auto" />
                    <h4 className="project-name">Laugh Track</h4>
                </a>

            </Col>

            <Modal show={show} onHide={handleClose}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                
            >
                <div id="project-card">
                    <Modal.Header >
                        <Modal.Title>Laugh Track</Modal.Title>
                    </Modal.Header>
                    <Modal.Body> <a href="https://github.com/richieholsenback/laughtrack" target="_blank">Github Repository</a></Modal.Body>
                    <Modal.Body>Laugh Track was my front-end capstone at the Nashville Software School. It is a ReactJS based application that utilizes JSON, the Semantic-UI design library and marrrr. The project was a 2 week sprint and was a practice in CRUD, agile development, wireframing and prototyping. The goal of
the app is to help comedians succeed in terms of networking, workshopping material, hosting events and marketing themselves. </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
            </Button>
                    </Modal.Footer>
                </div>
            </Modal>
        </>
    );
}

export function ClassSite() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Col id="project-card-container" >

                <a onClick={handleShow} id="project-card">
                    <Image id="project-pics" src={LTphoto} width="85%" height="auto" />
                    <h4 className="project-name">Cohort 43 Class Site</h4>
                </a>

            </Col>

            <Modal show={show} onHide={handleClose}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <div id="project-card">
                    <Modal.Header >
                        <Modal.Title>Laugh Track</Modal.Title>
                    </Modal.Header>
                    <Modal.Body> <a href="https://github.com/nss-day-cohort-43/nss-day-cohort-43.github.io" target="_blank">Github Repository</a></Modal.Body>
                    <Modal.Body>My classmates and I worked on this site to display our class and encourage attendance to our demo day. The challenges we faced were finding a way to showcase 28 people with different focuses (UI/UX devs and C#/ .Net devs), displaying all we learned in short yet interesting format, and marketing our design skills with the site itself. My main focus was the technology section and the database that contained all the student and technology information. We did user testing to determine changes we needed to make to the site to ensure a user-friendly experience. </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
            </Button>
                    </Modal.Footer>
                </div>
            </Modal>
        </>
    );
}
export function FinalCap() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Col id="project-card-container" >

                <a onClick={handleShow} id="project-card">
                    <Image id="project-pics" src={LTphoto} width="85%" height="auto" />
                    <h4 className="project-name">Final Capstone</h4>
                </a>

            </Col>

            <Modal show={show} onHide={handleClose}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <div id="project-card">
                    <Modal.Header >
                        <Modal.Title>Laugh Track</Modal.Title>
                    </Modal.Header>
                    <Modal.Body> <a href="https://github.com/nss-day-cohort-43/nss-day-cohort-43.github.io" target="_blank">Github Repository</a></Modal.Body>
                    <Modal.Body>A work in progress </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
            </Button>
                    </Modal.Footer>
                </div>
            </Modal>
        </>
    );
}