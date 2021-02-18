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
import ofJourney from '../../images/ofJourneyMap.png'
import mockup from '../../images/Mockup.png'
import code from '../../images/ofcode.png'
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
                        <p><a href="https://github.com/richieholsenback/ourflix" target="_blank" rel="noreferrer" >Github Repository</a></p>
                    </Col>
                </Row>
                <Row>
                    <Col id="gh-link">
                        <p><a href="https://www.loom.com/share/edf24dcf06924e3385bb7bbebbb07a32" target="_blank" rel="noreferrer" >Check out a demo of Ourflix</a></p>
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
                        <h4 >The Problem</h4>
                        <h3>How can we help users spend less time deciding what to watch and more time watching?</h3>
                        <p>This site was my final capstone at the Nashville Software School. It was a 3 week sprint, where I wireframed, mocedk up, created user personas, journey mapped, user tested, ensured good information architecture, created ERD's, coded and user tested again. I couldn't wait to start, and knew my project was going to be fairly ambitious, so I began wireframing 2 weeks early.</p>
                        <p>I faced a few challenges while creating this app. Netflix limited access to their API back in 2013, so I had to find a third party API. The swipe feature was an essential feature of the application. I needed to find a way to make a reliable swipe feature. This would also be my first project utilizing Firebase's realtime database and authorization features.</p>
                        <p>I came across <a href="https://rapidapi.com/user/unogs">unogsNG</a>, a fairly extensive and up to date API. The data was not as extensive as I'd hoped, but it was the best option. It would limit my ability to filter, but it was still my best option. The swipe feature was solved by using <a href="https://www.npmjs.com/package/react-tinder-card">React Tinder Card</a> by Jakob Unnebäck. The Firebase implementation was a consistent learning experience. Authorization and fetching from the database were very different than I was used to, but through a lot of trial and error I had the components functioning how I needed them to.</p>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col lg={12}>
                        <Image id="user-prof" src={OFWire} width="100%" height="auto" alt="The wireframe for ourflix" />
                        <p>Want a better view of the wireframe? <a href="https://www.figma.com/file/xasfgEcT81lBbrkNJzNupf/Capstone?node-id=0%3A1" target="_blank">Click here.</a></p>
                        <p>I had the general idea of a card with a movie showing up, you could swipe to the right if you were interested in watching and left if you were not. You could get more information on the movie by pressing the details button. The design, for the most part, did not change much from this design.</p>
                    </Col>
                    <Image id="user-prof" src={ERD} width="80%" height="auto" alt="The ERD for ourflix" />
                    <Col lg={12}>
                        <p>The ERD always brings a lot of pressure and excitement because it's the backbone of the app. This one was expecially tricky because of the right part of the diagram, the results. With a time crunch, it didn't seem worth making my own API full of movies and shows on Netflix. So with that I decided to go with a 3rd party API of all of the content on Netflix. Netflix cut off public access to their API back in 2013, So I was stuck with an official API. I had to use the data they provided me, which was typically plentiful but lacking at times.</p>
                        <br />
                    </Col>
                    <Image id="user-prof" src={CaroUP} width="80%" height="auto" alt="The ERD for ourflix" />
                    <Col lg={12}>
                        <p>My first user persona was more of an observation than pondering a fictitious user. Carolyn is my girlfriend, and we've wasted countless hours trying to decide on what movie to watch. We've not seen the same things and at times our movie preferences can seem like polar opposites. It's a process. Knowing that she would be part of the target demographic of the app made her the perfect potential user.</p>
                    </Col>
                    <Image id="user-prof" src={ofJourney} width="80%" height="auto" alt="The ERD for ourflix" />
                    <Col lg={12}>
                        <p>The journey map detailed the point at which Carolyn and her roommates decide to watch a movie until they have made a decision and are watching the movie.</p>
                        <p>I knew I could come up with general design layout I liked, I've done that before. For this app I wanted to stick to someone else's rules. So who better to follow when making a Netflix based app than Netflix? I found plenty of materials outlining color schemes, fonts, how a button should look and more on the internet. A Netflix themed Netflix app was born.</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h5>Getting my hands dirty</h5>
                        <Image id="user-prof" src={mockup} width="100%" height="auto" alt="Ourflix Mockup" />

                        <p>I knew I could come up with general design layout I liked, I've done that before. For this app I wanted to stick to someone else's rules. So who better to follow when making a Netflix based app than Netflix? I found plenty of materials outlining color schemes, fonts, how a button should look and more on the internet. A Netflix themed Netflix app was born.</p>
                        <p>The design did not change much between the wireframe and mock up. There's plenty more features and pages to check out on my <a href="https://www.figma.com/file/xasfgEcT81lBbrkNJzNupf/Capstone?node-id=0%3A1" target="_blank">Figma.</a></p>
                        <br />
                        <p>I user tested the site and gained a lot of perspective from my users. Like every other developer before, my app was not quite as intuitive as I had hoped. Many had never used tinder before and did not understand the swipe. They viewed the thumbs up and down as ratings. They thought they were going to meet people who also wanted to watch the movies they wanted to watch (I stopped telling people it was like Tinder for Netflix after that. No leading statements!)</p>
                        <p>The button icons have changed to an X and a check, and testing proved those to be more effective in displaying meaning. I am working on a tutorial that plays the first time you log in to explain the swipe feature, as well as a larger tour of the app that assures you that you won't have to meet strangers and watch movies.</p>
                        <br />
                        <h4 id="h4">Then, the coding commenced.</h4>
                        <p>I struggled understanding the in's and out's of fetch calls with firebase.</p>
                        <Image id="user-prof" src={code} width="100%" height="auto" alt="Fetch call from firebase" />
                        <p>This is the fetch call. There are probably 100 better ways to do it (and if you know of a better way, please <a href="mailto:richieholsenback@gmail.com" target="_blank" rel="noreferrer">let me know</a>,) but I learned so much from this piece of code. We typically would fetch the friends from the server and expand on the userId. Firebase does not allow such things, so we had to get resourceful. This code does a lot of pulling from a database, transforming it into the format I needed it, and making sure all of the sub-functions were completed before declaring the function as a whole as completed. I would love to chat more about it if you're interested in hearing more about the process!</p>
                        <p> Then I fought the swipe function. I tried to implement it without taking the time to understand how it worked. This, believe it or not, was a mistake. I ended up reading the documentation front to back a few times, pulling in the source code examples and tinkered a lot. I ended up getting the swipe feature working just as I wanted, but the buttons did not have the functionality I was hoping for. Version 2 will have buttons in which a user can like or dislike any show they desire.</p>
                        <p>My API struggled to get me the information I needed quickly enough. It took over 10 seconds to load all of the movies and shows, and I knew I'd lose the attention of my users in that span of time. Since this was an educational exercise and not a capitalist venture, I downloaded the API into my firebase database. I acknowledged the potential ethical dilemma, but since I planned on never releasing a version in which I could profit I decided it was a fair decision. This did give me more control over the database and what was in it, which was tremendously helpful.</p>
                        <p><a href="https://www.loom.com/share/edf24dcf06924e3385bb7bbebbb07a32" target="_blank" rel="noreferrer" >Check out a demo of Ourflix</a></p>
                        <br />
                        <p>At the time of writing this, I have hit MVP. You can swipe on a movie to determine your interest, you can compare with your friends and you can check out your own profile. There's CRUD implementation in the user profile as well. I still want to find a way to implement a filter function, get buttons working for a swipe, implement groups and a few other features, which I am working on now. This site was a great show of how I've been able to change my way of thinking into that of a real developer. I'm learning new things, connecting dots and testing the way that will help me to succeed in my career as a UI/UX Developer. I want this site to be a practice in agile development, with steady improvements until it is a fully-fledged app.</p>
                        <h5>Lessons Learned</h5>
                        <p>What a bittersweet app. I had a lot many frustrations but even more mountain-top moments. It was my last project at the Nashville Software School. It was the thing in between me and the real world. I loved making this app because it had shown a full 6 months of progression. I was worlds better at coding than I was 6 months ago, and the most exciting bit was knowing that in 6 months I'd be even better! I saw how much I learned, how much I knew and how much I could work through. Ourflix will always be one of my favorite projects. </p>
                    </Col>
                </Row>
                {/* </div> */}
                {/* </div> */}
            </Container>
        </div >

    )
}