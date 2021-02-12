import React from "react";
import { Link } from "react-router-dom";
import { NavBar } from "../NavBar/NavBar";
import "../scss/_work.scss"
import "../scss/_variables.scss"
import stoned from '../../images/stoned.jpg'
import Kellen from '../../images/LTCS/KellenUP.png'
import OFHome from '../../images/OFHome.png'
import ERD from '../../images/oferd.png'
import OFWire from '../../images/OF Wireframe.png'
import CaroUP from '../../images/CaroUP.png'
import mockup from '../../images/Mockup.png'
import { Button, Carousel, Col, Container, Image, Row } from "react-bootstrap";
import ScrollToTop from "./Greet";

export const Ourflix = () => {
    return (
        <div className="greet-page" id="CS">
            <NavBar />
            <ScrollToTop />
            <Link to="/work" ><Button id="case-study-back" variant="primary">Back</Button></Link>
            <Container >
                {/* <div className="case-study-content"> */}
                <Row>
                    <Col>
                        <h2 className="case-study-header">Ourflix</h2>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col xs={12}>
                        <Image id="case-study-pic" src={OFHome} width="100%" height="auto" />
                    </Col>
                </Row>
                <Row>
                    <Col id="gh-link">
                        <a href="https://github.com/richieholsenback/ourflix" target="_blank" rel="noreferrer" >Github Repository</a>
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
                        <p>We've all been there. No one can decide on what movie to watch. You end up spending 2 hours deciding on which 1 and a half hour movie to watch, and you decide on the first decision that no one was excited about. This app ends that problem once and for all.</p>
                        <h4 id="h4">How can we help users spend less time deciding what to watch and more time watching?</h4>
                        <p>This site was my final capstone at the Nashville Software School. It was a 3 week sprint, where we were meant to wireframe, mock up, create user personas, journey maps, user test, back up our information architecture, create ERD's, code and user test again. I was very excited to start, so I began 2 weeks early.</p>
                        <p>I faced a few challenges while creating this app. Netflix limited access to their API back in 2013, so I had to find a third party API. The swipe feature was an essential feature of the application. I needed to find a way to make a reliable swipe feature. This would also be my first project utilizing Firebase's realtime database and authorization features.</p>
                        <p>I came across <a href="https://rapidapi.com/user/unogs">unogsNG</a>, a fairly extensive and up to date API. The data was not as extensive as I'd hoped, but it was the best option. It would limit my ability to filter, but it was still my best option. The swipe feature was solved by using <a href="https://www.npmjs.com/package/react-tinder-card">React Tinder Card</a> by Jakob Unnebäck. The Firebase implementation was a consistent learning experience. Authorization and fetching from the database were very different than I was used to, but through a lot of trial and error I had the components functioning how I needed them to.</p>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col  lg={12}>
                        <Image id="user-prof" src={OFWire} width="100%" height="auto" alt="The wireframe for ourflix"/>
                        <p>Want a better view of the wireframe? <a href="https://www.figma.com/file/xasfgEcT81lBbrkNJzNupf/Capstone?node-id=0%3A1" target="_blank">Click here.</a></p>
                        <p>I had the general idea of a card with a movie showing up, you could swipe to the right if you were interested in watching and left if you were not. You could get more information on the movie by pressing the details button. The design, for the most part, did not change much from this design.</p>
                    </Col>
                    <Image id="user-prof" src={ERD} width="80%" height="auto" alt="The ERD for ourflix"/>
                    <Col lg={12}>
                        <p>The ERD always brings a lot of pressure and excitement because it's the backbone of the app. This one was expecially tricky because of the right part of the diagram, the results. With a time crunch, it didn't seem worth making my own API full of movies and shows on Netflix. So with that I decided to go with a 3rd party API of all of the content on Netflix. Netflix cut off public access to their API back in 2013, So I was stuck with an official API. I had to use the data they provided me, which was typically plentiful but lacking at times.</p>
                        <br />
                    </Col>
                    <Image id="user-prof" src={CaroUP} width="80%" height="auto" alt="The ERD for ourflix"/>
                    <Col lg={12}>
                        <p>My first user persona was more of an observation than pondering a fictitious user. Carolyn is my girl friend, and I've seen her and her roommates try to decide on what movie to watch. It's a process. Knowing that she would be part of the target demographic of the app made her the perfect potential user.</p>
                        <p>I knew I could come up with general design layout I liked, I've done that before. For this app I wanted to stick to someone else's rules. So who better to follow when making a Netflix based app than Netflix? I found plenty of materials outlining color schemes, fonts, how a button should look and more on the internet. A Netflix themed Netflix app was born.</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <h5>Getting my hands dirty</h5>
                    <Image id="user-prof" src={mockup} width="100%" height="auto" alt="Ourflix Mockup"/>

                    <p>The design did not change much between the wireframe and mock up. There's plenty more features and pages to check out on my <a href="https://www.figma.com/file/xasfgEcT81lBbrkNJzNupf/Capstone?node-id=0%3A1" target="_blank">Figma.</a></p>
                    <br />
                    <p>I user tested the site and gained a lot of perspective from my users. Like every other developer before, my app was not quite as intuitive as I had hoped. Many had never used tinder before and did not understand the swipe. They viewed the thumbs up and down as ratings. They thought they were going to meet people who also wanted to watch the movies they wanted to watch (I stopped telling people it was like Tinder for Netflix after that. No leading statements!)</p>
                    <p>The button icons have changed to an X and a check, and testing proved those to be more effective in displaying meaning. I am working on a tutorial that plays the first time you log in to explain the swipe feature, as well as a larger tour of the app that assures you that you won't have to meet strangers and watch movies.</p>
                    <br />
                    <h4 id="h4">Then, the coding commenced.</h4>
                    <p>Check out the live site <a>here.</a></p>
                    <p>At the time of writing this, I have hit MVP. I still want to find a way to implement a filter function, get buttons working for a swipe and implement groups and a few other features, but as of now I am quite proud of my skateboard. This site was a great show of how I've been able to change my way of thinking into that of a real developer. I'm learning new things, connecting dots and testing the way that will help me to succeed in my career as a UI/UX Developer. I want this site to be a practice in agile development, with steady improvements until it is a fully-fledged app.</p>
                    <h5>Lessons Learned</h5>
                    <p>What a bittersweet app. I had a lot of fun and just as many frustrations. It was my last project at the Nashville Software School. It was the thing in between me and the real world. I loved making this app because it had shown a full 6 months of progression. I was worlds better at coding than I was 6 months ago, and the most exciting bit was knowing that in 6 months I'd be even better! I saw how much I learned, how much I knew and how much I could work through. Ourflix will always be one of my favorite projects. </p>
                    </Col>
                </Row>
            {/* </div> */}
            {/* </div> */}
            </Container>
        </div >

    )
}