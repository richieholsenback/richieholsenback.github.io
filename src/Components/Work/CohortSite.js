import React from "react";
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
import { Link } from "react-router-dom";

export const CohortPage = () => {

    return (
        <div className="greet-page" id="CS">
            <NavBar />
            <ScrollToTop />
            <Link to="/work" ><Button id="case-study-back" variant="primary">Back</Button></Link>
            <Container >
                {/* <div className="case-study-content"> */}
                <Row>
                    <Col>
                        <h2 className="case-study-header">Cohort 43 Class Site</h2>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
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
                        <h3>The Backstory</h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>I was furloughed, I was bored, and I was broke. The unfortunate part is that I didn’t love the job I had before COVID-19 took it from me, so I really didn’t want to look for another job just like it. I decided I was going to make a change, I was going to teach myself how to code... Until I realized I didn’t know enough to know what I should learn. I looked all around, searching for some help, then I found it. The Nashville Software School had a UI/UX program starting the next month.</p>
                        <br />
                        <p>Fast forward 4 months and I had just completed the first half of the course. I had a decent knowledge of HTML, CSS, Sass, Javascript, and React. I made my own site, Laugh Track. Now, my classmates and I were tasked with creating a site that showcased all 28 individuals in our cohort.</p>
                        <h3 >The Problem</h3>
                        <p>How might we promote Demo Day and showcase Cohort 43’s dual skill sets to potential employers with the ultimate goal of employment?</p>
                        <h3 >The Solution</h3>
                        <p>We were to create a single page, React application in which potential hirers could come, see a brief description of each classmate, learn more about our program and sign up to attend our demo day, where we would be showing off our second half capstones.</p>
                        <h3 >Challenges</h3>
                        <p>There are 28 members of our cohort. It's easy to get lost in a sea of faces. We had to figure out a way to display each member of the cohort in a meaningful way.</p>
                        <br />
                        <p>Our cohort was divided into 2 sections. There were the 8 UI/UX designers and there were the 20 C# and .net developers. Both learned Front-End design in the first half of the class, but different technologies in the second. How could we differentiate the technologies learned by each student?</p>
                        <h3 >The Design Process</h3>
                        <p>Our teacher split us into 2 teams where we were to wireframe and mock up a design. We reconvened to discuss our design decisions and come to an agreement on which design was better.</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Image id="user-prof" src={mockup1} width="100%" height="auto" alt="The wireframe for laugh track" />
                    </Col>
                    <Col>
                        <Image id="user-prof" src={mockup2} width="100%" height="auto" alt="The wireframe for laugh track" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <br />
                        <p>Unfortunately, there was not a clear winner. We went to a vote, but both teams of 4 voted for their own design. We went to an impartial judge and they suggested we pick parts from each design we liked. So we did.</p>
                        <br />
                        <p>Team one used Pantone's color of the year for 2021, Illuminating, with a teal that paired well with it. The bright gold color felt fresh and exciting - a new beginning. We wanted to convey that as new hires, we can provide a fresh and aspirational face to any company that might consider hiring us.</p>
                        <br />
                        <p>Team two had a clear, card based layout that displayed the students in a clear and effective manner. We liked the way this layout showed the technologies our cohort learned over our time at NSS.</p>
                        <br />
                        <p>We came together and created a new mockup.</p>
                        <Image src={initialMockup} width="100%" height="auto" alt="The wireframe for laugh track" />
                        <Image src={initialMockup2} width="100%" height="auto" alt="The wireframe for laugh track" />
                        <br />
                        <br />
                        <p>With our brand new mockup created, we moved on to user testing.</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h3>User Testing</h3>
                        <p>We began user testing with 3 development professionals. We took their feedback and improved our site. The honeycomb design was meant to be metaphor to describe the dual nature of the class UI/UX and Back-End. While it was clever, we realized it was just noise on the page and the message was lost. The tabs were a favorite feature, but after testing they seemed to be confusing to users. We scrapped both and simplified our design. We did 2 more rounds of user testing and decided on our final design.</p>
                        <Image src={finalMockup} width="100%" height="auto" alt="The wireframe for laugh track" />
                        <br />
                        <br />
                        <p>There's a lot more to the mock up, check it out <a href="https://www.figma.com/file/85BvqGRbZcBx4YRGFsoCVA/Cohort-43-Website?node-id=0%3A1" target="_blank" rel="noreferrer">here</a></p>
                        <h3>Coding </h3>
                        <p>On a project this small, a team of 8 was more than enough people to work on the site. We delegated tasks, but there was still more people than there were jobs. We decided to have 2-3 people work on different sections, requiring high levels of communication and collaboration.</p>
                        <br />
                        <p>I worked on the Technology section with my classmate Ben. He and I designed the section in Figma, coded it and made sure the design was responsive, knowing that many people would be visiting our site on their mobile devices.</p>
                        <br />
                        <p>I also created the database that held all of the student information and the technologies we learned with my classmate Hanako. This required very close attention to detail and abundant communication, otherwise we'd be swimming in a sea of merge conflicts.</p>
                        <br />
                        <p>Check out a live version of our site <a href="https://nss-day-cohort-43.github.io/" target="_blank" rel="noreferrer">here</a></p>

                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h3>Wrapping Up</h3>
                        {/* <Image id="user-prof" src={Kellen} width="100%" height="auto" alt="Kellen's user profile"/> */}
                        <p>This project tested us as developers. It was tough working on such a small project with so many people. But even still, I learned so much. Clear communication, cooperation and relying on your teammates is crucial for a positive work flow. If any of those break down, the project can get stuck in a rut quickly. I had a few solid takeaways:</p>
                        <ul>
                            <li>Usability trumps innovative design. </li>
                            <li>User testing from the beginning helps to make better design decisions down the road.</li>
                            <li>Being a good teammate is often better than being a great coder.</li>
                        </ul>
                        <br />
                    </Col>
                </Row>
            </Container>
        </div>

    )
}