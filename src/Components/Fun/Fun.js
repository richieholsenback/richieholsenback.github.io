import React from "react"
import { NavBar } from "../NavBar/NavBar"
import bird from '../../images/birbwhite.png'
import duck1 from '../../images/Duck1.png'
import breakskate from '../../images/breakskate.png'
import record from '../../images/record.png'
import "../scss/_fun.scss"
import { Col, Container, Image, Row } from "react-bootstrap"

export const Fun = () => {
    return (
        <div className="fun-page">
            <NavBar />
            <Container className="fun-content">
                <Row className="fun-header-container">
                    <Col>
                        <h1 className="fun-header">
                            I’m here for a good time.
            </h1>
                    </Col>
                </Row>
                <Row >
                    <Col>
                        <p className="fun-text">
                            In my spare time I love to skateboard, perform standup comedy, watch movies and listen to music. This is the space in which I impose all of that on you.
            </p>
                    </Col>
                </Row>
                <Row id="music-row">
                    <Col xs={4}>
                        <Image id="record" src={record} />
                    </Col>
                    <Col xs={4}>
                        <h3 id="fun-div-header">My recent jams</h3>
                        <iframe id="spotify" src="https://open.spotify.com/embed/playlist/4CkD7Bai9HfE73rvks4ILH" width="300" height="540" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                    </Col>
                    <Col xs={4}>
                        <Image id="duck" src={duck1} />
                    </Col>
                </Row>
                <Row >
                    <Col id="skate-hold">
                        <Image id="hold" src={breakskate} />
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col id="center">
                        <h3 id="fun-div-header">A playlist of my standup</h3>
                        <iframe id="youtube" src="https://www.youtube.com/embed/videoseries?list=PLM2osoqpH8dJF73pR-y5MEYP_KVZMSpd-" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </Col>
                </Row>
                <Row >
                    <Col>
                        <a className="secret" target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=X2WH8mHJnhM">
                            <Image id="thanks" src={bird} />
                        </a>
                    </Col>
                </Row>
            </Container>
        </div >
    )
}