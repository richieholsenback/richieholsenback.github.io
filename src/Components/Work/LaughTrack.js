import React from "react";
import { Link } from "react-router-dom";
import { NavBar } from "../NavBar/NavBar";
import "../scss/_work.scss"
import "../scss/_variables.scss"
import LTphoto from '../../images/LTHome.png'
import Kellen from '../../images/LTCS/KellenUP.png'
import ERD from '../../images/LTCS/ERD.png'
import LTWire from '../../images/LTCS/LTWire.png'
import code from '../../images/LTCS/LTCode.png'
import codeProud from '../../images/LTCS/CodeProud.png'
import { Button, Carousel, Col, Container, Image, Row } from "react-bootstrap";
import ScrollToTop from "./Greet";

export const LaughTrackPage = () => {
    return (
        <div className="greet-page" id="CS">
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
                <Row className="justify-content-md-center">
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
                        <h5>The Backstory</h5>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>It's the same feeling you get right before you jump out of an airplane, nervous anticipation. There cannot be a worse feeling than getting on stage in front of a bunch of strangers, trying to make them laugh and then hearing silence. Alternatively, the rush you get whenever you get roaring laughter is invigorating. I began my incredibly amateur career in standup comedy in 2019. I was hooked immediately.</p>
                        <br />
                        <p>If you've ever tried speaking to someone who does standup comedy, you'll quickly realize they're a special breed. They tend to be a little socially awkward, very disorganized and have no idea when or where anything is happening. I wanted to create an application that could help these individuals become better.</p>
                        <h3 >The Problem</h3>
                        <p>How can I help comedians improve their craft, create connections and ultimately succeed?</p>
                        <h3 >The Solution</h3>
                        <p>I decided to create a journal of sorts. The main journal component would have two parts. The first would be a place for comedians to workshop material they hadn't fully fleshed out yet with help from other users. the second would be a place where they could post videos of their previous performances, make notes and receive feedback from other users. There would be a messaging feature, an events page and a place to become friends with other users.</p>
                        <h3 >Challenges</h3>
                        <p>3 months before starting this project, I was anxious that when I was writing HTML I would use a Div where I should've used a Section. Now I'm going to be coding a proper website by myself in ReactJS, which I had started to learn 3 weeks prior. I was excited and nervous, but felt up to the task.</p>
                        <br />
                        <p>I had previous practice with creating forms and displaying information from them, but the way I envisioned the messaging feature working would be different. I wanted it to be similar to a Facebook feed, with one input at the top and the messages cascading down. I was unsure of how the code would work for this part.</p>
                        <br />
                        <p>The friend feature seemed to be the most daunting. I did not understand what it meant that I'd be creating an object that represented a friendship. I also had no idea how to get two keys in the object to represent a friendship. It was all very confusing to me.</p>
                        <br />
                        <h3 >The Design Process</h3>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col lg={12}>
                        <Image id="user-prof" src={LTWire} width="100%" height="auto" alt="The wireframe for laugh track" />
                        <p>Want a better view of the wireframe? <a href="https://www.figma.com/file/0DAt4BzQJH1jioAxM5gFWc/Laugh-Track?node-id=0%3A1&viewport=357%2C210%2C0.20582306385040283" target="_blank">Click here.</a></p>
                        <br />
                        <p>The design process was not my best showing. I learned the importance of planning, here. My overall site design ended up looking pretty different to what I planned, since all I had planned was a wireframe. This was a lesson where I learned utilizing a mock up is very important. Trying to design while in a development mindset can, and did, lead to lots of careless mistakes.</p>
                        <br />
                        <p>I wanted to use a style library for this project because I knew it would be important in my future to learn how to use one properly. I landed on the <a href="https://react.semantic-ui.com/" target="_blank" rel="noreferrer">Semantic UI React library</a>. I really chose it based off the buttons and input styles and there wasn't too much thought besides that.</p>
                        <Image id="user-prof" src={Kellen} width="100%" height="auto" alt="Kellen's user profile" />
                        <p>I used the persona of Kellen to guide my process. He was, in my mind, the typical user. He's ambitious, a dreamer, but has few of the necessary skills needed to become a full-time comedian.</p>
                    </Col>
                    <Col lg={12}>
                        <Image id="user-prof" src={ERD} width="80%" height="auto" alt="The ERD for laugh track" />
                        <p>The ERD was another pain point for me. I learned quickly that this is a place to take your time and get it right. I did not and wasted a decent amount of time fixing my mistakes in the database. It's not sexy or attractive, but it is worthwhile.</p>
                <Row className="justify-content-md-center">
                    <Col>
                        <h3 >Coding</h3>
                        <p>I was nervous to start, but decided to get things started with what I knew how to do. I made a homepage with a nav bar. I filled out a database with temporary information and got it working. I listed out that information on pages. The messaging feature ended up being more simple than I was afraid of, just a matter of fetching, listing and a simple form. A huge relief, you can imagine.</p>
                        <br />
                        <p>The first struggle I encountered was creating friends. I had all of the users laid out, but didn't quite know how to translate users to friends.</p>
                        <Image id="user-prof" src={code} width="100%" height="auto" alt="add user button" />
                        <br />
                        <p>admittedly I'm writing this case study 3 months later, and this is not how I would write it today. There's definitely some redundant data. But I was proud of myself! I organized the data so the active user was not the userId. That was because if I did the opposite and fetched from that data, the active user would show in their own friend's list. I felt clever and like I had conquered a previously inconceivable task.</p>
                        <br />
                        <p>Related to the friends, I wanted to make sure that if you added a user as a friend, they wouldn't show in the user list again. I knew this would entail the use of a filter function, and I was intimidated. It took a while to grasp, and I even did a few tutorials to try to understand the filter function better, but I got it working!</p>
                        <Image id="user-prof" src={codeProud} width="100%" height="auto" alt="add user button" />
                        <br />
                        <h3 >Wrapping Up</h3>
                        <p>Looking back, if I did this project again I would do it very differently. There would be more UI/UX planning, I would have done a mock up, user testing and made different design choices entirely. But I'm still very proud of this social media I created. It was my first big solo project and set me up well to learn more in the second half of my class. The mistakes, the triumphs and the lessons were all worthwhile. </p>
                        <br />
                        <p>I have looked back at this project many times and every time I have the thought "I should change the way that looks." But I'm not going to. It's a great reminder of the growth I've made in a short time. Every mistake is a lesson.</p>
                        <br />
                    </Col>
                </Row>

                    </Col>
                </Row>
            </Container>
        </div >

    )
}