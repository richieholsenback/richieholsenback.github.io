import React from "react";
import { Link } from "react-router-dom";
import { NavBar } from "../NavBar/NavBar";
import "../scss/_work.scss"
import "../scss/_variables.scss"
import LTphoto from '../../images/LTHome.png'
import Kellen from '../../images/LTCS/KellenUP.png'
import ERD from '../../images/LTCS/ERD.png'
import LTWire from '../../images/LTCS/LTWire.png'
import LTZoom from '../../images/LTCS/LTZoom.png'
import { Button, Carousel, Col, Container, Image, Row } from "react-bootstrap";
import ScrollToTop from "./Greet";

export const LaughTrackPage = () => {
    return (
        <div className="greet-page" id="LT">
            <NavBar />
            <ScrollToTop />
            <Link to="/work" ><Button id="case-study-back" variant="primary">Back</Button></Link>
            <Container >
                {/* <div className="case-study-content"> */}
                <Row>
                    <Col>
                        <h2 className="case-study-header">Laugh Track</h2>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <Image id="case-study-pic" src={LTphoto} width="100%" height="auto" />
                    </Col>
                </Row>
                <Row>
                    <Col id="gh-link">
                        <a href="https://github.com/richieholsenback/laughtrack" target="_blank" rel="noreferrer" >Github Repository</a>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {/* <div className="case-study-descrip"> */}
                        <h4>The Backstory</h4>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>I started my career (in the loosest sense) in standup in 2019. I love the process of creating, performing and improving a joke. There's nothing better than working really hard on a joke and having a big payoff. Similarly, there's nothing worse than working really hard on a joke and hearing nothing.</p>
                        <p>One thing I noticed about other comedians in the circuit is that they tend to be disorganized, always seeking advice on jokes and, often times, a little awkward. I wanted to create a tool that could help my new friends.</p>
                        <br />
                        <h5>That's when I came up with Laugh Track</h5>
                        <p>Laugh Track is a social media designed to help comedians succeed, no matter what their ultimate goal is. You can network, journal, get advice from your peers, and see all of the comedy events in your area so you know when and where you can perform your material.</p>
                        <h4>2 Weeks from Hell</h4>
                        <p>That was dramatic. It was actually really nice, I just wanted your attention. The site was part of a 2 week sprint with the Nashville Software School. In that 2 weeks I made user profiles, ERD's, wireframes, mockups, coded the site and hit MVP.</p>
                        <p>Every good site needs a good plan, so I started there.</p>
                    </Col>
                </Row>
                <Row>
                    <Col  lg={12}>
                        <Image id="user-prof" src={LTWire} width="100%" height="auto" alt="The wireframe for laugh track"/>
                        <p>Want a better view of the wireframe? <a href="https://www.figma.com/file/0DAt4BzQJH1jioAxM5gFWc/Laugh-Track?node-id=0%3A1&viewport=357%2C210%2C0.20582306385040283" target="_blank">Click here.</a></p>
                        <p>I learned the importance of planning, here. My overall site design ended up looking pretty different to this. There might be a point where you can plan too much, but I haven't found it yet.</p>
                    </Col>
                    <Col lg={12}>
                    <Image id="user-prof" src={ERD} width="80%" height="auto" alt="The ERD for laugh track"/>
                        <p>Data. Data data data. This was crucial to get right and I didn't. This was my second stab at an ERD and I learned a ton from it. The concept seemed to click right after I made my last mistake pairing data up in my database. Perfect timing.</p>

                    </Col>
                </Row>
                <Row>
                    <Col>
                    {/* <div id="lt-process">
                            <Image src={ERD} width="30%" height="auto" />
                            <h6>I made an ERD</h6>
                            <div id="wireframe-group">
                                <Image src={login} />
                                <Image src={message} />
                                <Image src={journal} />
                                <Image src={event} />
                                <Image src={following} />
                            </div>
                            <h6>I wireframed my site</h6>
                            <Image width="50%" height="auto" src={colors} />
                            <h6>I found my color pallette</h6>
                            <Image width="50%" height="auto" src={Grav} />
                            <h6>I figured out the perfect font</h6>
                        </div> */}
                    <h5>Meet Kellen. </h5>
                    <Image id="user-prof" src={Kellen} width="100%" height="auto" alt="Kellen's user profile"/>

                    <p>Kellen could use a little help. Like many comedians, Kellen has big dreams but few of the necessary skills you need to succeed as an adult, much less become famous. But Kellen is very funny and has a ton of potential.</p>
                    <br />
                    <h4>How can Laugh Track help Kellen as a comedian? </h4>
                    <p>Thanks for asking. Check out <a href="https://www.loom.com/share/a92363cd10444721b327f51ce64dbc17" target="_blank">this presentation</a> for a guided tour of the site, from Kellen's perspective. </p>
                    <br />
                    <h4></h4>
                    <p>This site was a blast to make. The biggest takeaway I had was seeing my progression from day 1 of the class to then. I could see how much I had learned in that time. 3 months before I was unsure of what HTML tags would be appropriate in which places. I assumed I would never understand Git or Github. Javascript functions seemed un-graspable. But I had proof that none of that was true. I did it. I made a real website! I learned React, I mastered a component library, I had an idea that turned into a real life application. I received a lesson in knowing I can. I hit MVP early and got to work on stretch goals. I learned that I could. </p>
                    </Col>
                </Row>
            {/* </div> */}
            {/* </div> */}
            </Container>
        </div >

    )
}