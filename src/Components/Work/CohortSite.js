import React from "react";
import { Link } from "react-router-dom";
import { NavBar } from "../NavBar/NavBar";
import "../scss/_work.scss"
import "../scss/_variables.scss"
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import ScrollToTop from "./Greet";
import C43photo from '../../images/C43CS/c43Pre.png'
import mockup1 from '../../images/C43CS/co431.png'
import mockup2 from '../../images/C43CS/Screen Shot 2021-01-14 at 11.45.44 AM.png'
import initialMockup2 from '../../images/C43CS/c43initial2.png'
import initialMockup from '../../images/C43CS/c43initial.png'
import finalMockup from '../../images/C43CS/c43MockFinal.png'

export const CohortPage = () => {

    return (
        <div className="greet-page" id="CS">
            <NavBar />
            <ScrollToTop />
            <Container >
                {/* <div className="case-study-content"> */}
                <Row>
                    <Col>
                        <h2 className="case-study-header">Cohort 43 Class Site</h2>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <Image id="case-study-pic" src={C43photo} width="100%" height="auto" />
                    </Col>
                </Row>
                <Row>
                    <Col id="gh-link">
                        <a href="https://github.com/richieholsenback/laughtrack" target="_blank" rel="noreferrer" >Github Repository</a>
                        <br />
                        <a href="https://nss-day-cohort-43.github.io/" target="_blank" rel="noreferrer">Live Site</a>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {/* <div className="case-study-descrip"> */}
                        <h5>The Backstory</h5>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>I, like many others, had a job. Then, because of the COVID-19 pandemic of 2020, I did not have a job, like many others. Rather than sit around and wait for the pandemic to end and for my job to start back again, I decided to join the Nashville Software School for Front-End Development and UI/UX Design.</p>
                        <p>My classmates in the UI/UX track, a team of 8, were tasked with building a site that would display the many talented individuals in our class. We split further into 2 teams to create 2 wireframes, mockups and presentations. We were to discuss and vote on which design we should continue ahead with.</p>
                        <h4 id="h4">Our problem Statement</h4>
                        <h3>How might we promote Demo Day and showcase Cohort 43’s dual skill sets to potential employers with the ultimate goal of employment?</h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h3>Team 1's Design</h3>
                        <Image id="user-prof" src={mockup1} width="100%" height="auto" alt="The wireframe for laugh track" />
                    </Col>
                    <Col>
                        <h3>Team 2's Design</h3>
                        <Image id="user-prof" src={mockup2} width="100%" height="auto" alt="The wireframe for laugh track" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <br />
                        <h4 id="h4">We hit, what could only be referred to as, an impasse</h4>
                        <p>We did not think that both groups would just think their own design was the best. There was a tie that could not be broken since both teams had 4 people on them.</p>
                        <h5>We decided to compromise</h5>
                        <p>After discussion, we realized both teams brought good ideas to the table. We decided to merge the 2 into a hybrid design.</p>
                        <p>Team one used Pantone's color of the year for 2021, Illuminating, with a teal that paired well with it. The bright gold color felt fresh and exciting - a new beginning. We wanted to convey that as new hires, we can provide a fresh and aspirational face to any company that might consider hiring us.</p>
                        <p>Team two had a clear, card based layout that displayed the students in a clear and effective manner. We liked the way this layout showed the technologies our cohort learned over our time at NSS.</p>
                        <h3>We came together and created a new mockup.</h3>
                        <Image src={initialMockup} width="100%" height="auto" alt="The wireframe for laugh track" />
                        <Image src={initialMockup2} width="100%" height="auto" alt="The wireframe for laugh track" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h5>User Testing</h5>
                        <p>We began user testing with 3 development professionals. We took their feedback and improved our site. We did 2 more rounds of user testing and decided on our final design.</p>
                        <h3>The Final Mockup</h3>
                        <Image src={finalMockup} width="100%" height="auto" alt="The wireframe for laugh track" />
                        <p>Check out a live version of our class site <a href="https://nss-day-cohort-43.github.io/" target="_blank" rel="noreferrer">here.</a></p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h5>We learned so much </h5>
                        {/* <Image id="user-prof" src={Kellen} width="100%" height="auto" alt="Kellen's user profile"/> */}

                        <ul>
                            <li>Usability trumps innovative design. </li>
                            <li>User testing from the beginning helps to make better design decisions down the road.</li>
                            <li>We learned how to facilitate remote user tests.</li>
                        </ul>
                        <p>This project tested us. It ended up taking longer and being a bit more stressful than any of us imagined it would. But we learned to works as a team and that means compromise. It means killing your darlings in order to make a sexy, innovative design more tame and usable. we learned about using component libraries to their fullest, but still within the bounds they set. I could go on, but I will spare you. This was a project I'm very proud of.</p>
                    </Col>
                </Row>
                {/* </div> */}
                {/* </div> */}
            </Container>
        </div>

    )
}

// # Welcome to Nashville Software School's Cohort 43 Class Website

// View the live site [here](https://nss-day-cohort-43.github.io/)

// ## Project Overview

// ## Challenge Statement

// How might we promote Demo Day and showcase Cohort 43’s dual skill sets to potential employers with the ultimate goal of employment?

// ## Planning

// This project started off with the class splitting into 2 teams to wireframe and mock up a class site, with the end goal of showcasing our designs, defending them and compromising on which project we should move ahead with.

// <img src="RMImages/Screen Shot 2021-01-14 at 11.45.44 AM.png" width=500>

// <img src="RMImages/co431.png" width=500>

// After discussion, we realized both teams brought good ideas to the table. We decided to merge the 2 into a hybrid design.

// One team used Pantone's color of the year for 2021, Illuminating, with a teal that paired well with it. The bright gold color felt fresh and exciting - a new beginning. We wanted to convey that as new hires, we can provide a fresh and aspirational face to any company that might consider hiring us.

// The other team had a clear, card based layout that displayed the students in a clear and effective manner. We liked the way this layout showed the technologies our cohort learned over our time at NSS.

// We came together and created a new mockup.

// <img src="RMImages/combinedMockUp.png" width=500>

// ## User Testing

// We began user testing with 3 development professionals. We took their feedback and improved our site. We did 2 more rounds of user testing and decided on our final design.

// <img src="RMImages/c43Final.png" width=500>

// ## Lessons Learned

// + User testing from the beginning helped us make better design decisions. We realized usability trumps innovative design.
// + We learned how to facilitate remote user tests.

// ## To Install
// In the project directory, run:
// `npm install`

// Followed by:

// `npm start`
// Runs the app in the development mode.

// Open http://localhost:3000 to view it in the browser.

// The page will reload if you make edits.
// You will also see any lint errors in the console.