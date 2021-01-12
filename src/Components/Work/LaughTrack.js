import React from "react";
import { Link } from "react-router-dom";
import { NavBar } from "../NavBar/NavBar";
import "../scss/_work.scss"
import "../scss/_variables.scss"
import LTphoto from '../../images/LTHome.png'
import { Button, Image } from "react-bootstrap";
import ScrollToTop from "./Greet";

export const LaughTrackPage = () => {
    return (
        <div className="greet-page" id="LT">
            <NavBar />
            <ScrollToTop />
            <div className="case-study-page">
                <Link to="/work" ><Button id="case-study-back" variant="primary">Back</Button></Link>
                <div className="case-study-content">
                    <h2 className="case-study-header">Laugh Track</h2>
                    <Image id="case-study-pic" src={LTphoto} width="80%" height="auto" />
                    <a href="https://github.com/richieholsenback/laughtrack" target="_blank" rel="noreferrer">Github Repository</a>
                    <div className="case-study-descrip">
                        <p>I began performing standup in 2019 after loving the medium for most of my life. It is a rush to get on a stage and make people laugh and to have jokes to workshop and consistently improve upon. There is a great community in the standup scene and I made friends with a lot of  great and hilarious people.</p>
                        <p>One thing I noticed about these people is they tend to be disorganized, always seeking advice on jokes and, often times, a little awkward. This is where the idea for Laugh Track came around. I wanted to create a tool that could help with networking, organization and most importantly improving your craft.</p>
                            <br />
                        <p>The project was my Front-End capstone with the Nashville Software School. It was a 2 week sprint in which I wireframed, created an ERD, mocked the site up, began production and hit MVP. We learned React 2 weeks before beginning the project so this was an exercise in becoming comfortable with that framework. This project was the first time I utilized a component library for styling and gained a lot of knowledge on how to shape and change them to suit your needs.</p>
                        <p>The process of creating the site was my favorite part. After figuring out what comedians would value the most in a site, I went to work dreaming of the best components to suit those needs. </p>
                        <p> What I came up with was that comedians need a place to organize and develop their material, they need a place to see upcoming events in their area and they need a place to network with other comedians and create a community.</p>
                            <br />
                        <p>I developed a site that has a messaging feature where users can talk casually and joke around, creating a rapport. Users can then follow one another and become friends. There is a journal component where users can showcase their previous performances and have their new friends give advice on how to improve all facets of their performance. The journal also has a section where users can write down their joke ideas to workshop them and improve their bits. Both facets of the journal have an option to keep their posts private as well. And what is a joke if you don't have a place to perform it? Users can see events happening in their area so they have an opportunity to perform their newly workshopped material. </p>
                        <p>The events component was the last piece of the puzzle. I wanted comedians to see all of the events going on in their area. After all, if you don't perform the joke then does it matter that you ever wrote it? You can upload a poster along with all of the details of the event. </p>
                            <br />
                        <p>The site was a blast to make. The biggest takeaway I had was seeing my progression from day 1 to then. I could see how much I had learned in that time. 3 months before I was unsure of what HTML tags would be appropriate in which places. I assumed I would never understand Git or Github. Javascript functions seemed un-graspable. But I had proof that none of that was true. I did it. I made a real website! I learned React, I mastered a component library, I had an idea that turned into a real life application. I received a lesson in knowing I can. I hit MVP early and got to work on stretch goals. I learned that I could. </p>
                    </div>
                </div>
            </div>
        </div>

    )
}