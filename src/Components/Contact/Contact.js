import { Button, Col, Container, Image, Row } from "react-bootstrap"
import { NavBar } from "../NavBar/NavBar"
import shake from '../../images/handshake.png'
import "../scss/_contact.scss"

export const ContactSection = () => {
    return (
        <div className="contact-page">
            <NavBar />
            <Container className="contact-container">
                <Row>
                    <Col m={12}>
                        <p>
                            I’m excited to make excellent, user focused websites with you and your team.
                            Let’s get in touch!
                </p>
                    </Col>
                </Row>
                <Row>
                    <Col >
                        <a href="https://www.linkedin.com/in/richie-holsenback/" target="_blank" rel="noreferrer" >
                            <Button id="btn">
                                LinkedIn
                            </Button>
                        </a>
                    </Col>
                    <Col >
                        <a href="mailto:richieholsenback@gmail.com" target="_blank" rel="noreferrer" >
                            <Button id="btn">
                                Email
                            </Button>
                        </a>
                    </Col>
                </Row>
                <Image id="shake" src={shake} />
            </Container>
        </div>
    )
}