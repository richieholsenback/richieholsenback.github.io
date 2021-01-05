import React from "react";
import { Link } from "react-router-dom";
import { NavBar } from "../NavBar/NavBar";
import "../scss/_greet.scss"
import "../scss/_variables.scss"
import LTphoto from '../../images/LTHome.png'
import { Button, Image } from "react-bootstrap";

export const LaughTrackPage = () => {
    return (
        <div className="greet-page" id="LT">
            <NavBar />
            <div className="case-study-page">
                <Link to="/" ><Button id="case-study-back" variant="primary">Back</Button></Link>
                <div className="case-study-content">
                    <h2 className="case-study-header">Laugh Track</h2>
                    <Image id="case-study-pic" src={LTphoto} width="80%" height="auto" />
                    <a href="https://github.com/richieholsenback/laughtrack" target="_blank" rel="noreferrer">Github Repository</a>
                    <div className="case-study-descrip">
                        <p>I began performing standup in 2019 after loving the medium for most of my life. It is a rush to get on a stage and make people laugh and to have jokes to workshop and consistently improve upon. There is a great community in the standup scene and I made friends with a lot of  great and hilarious people.</p>
                        <p>One thing I noticed about these people is they tend to be disorganized, always seeking advice on jokes and, often times, a little awkward. This is where the idea for Laugh Track came around. I wanted to create a tool that could help with networking, organization and most importantly improving your craft.</p>
                        <p>The project was my Front-End capstone with the Nashville Software School. It was a 2 week sprint in which I wireframed, created an ERD, mocked the site up, began production and hit MVP. We learned React 2 weeks before beginning the project so this was an exercise in becoming comfortable with that framework. This project was the first time I utilized a component library for styling and gained a lot of knowledge on how to shape and change them to suit your needs.</p>
                        <p>The process of creating the site was my favorite part. After figuring out what comedians would value the most in a site, I went to work dreaming of the best components to suit those needs. </p>
                        <p> I wanted to make sure networking was a main component of the site. The journal component was the centerpiece of the site in my mind. I wanted to make sure a user can create a post that either showcased a previous performance or workshop an idea for a joke into a fully fledged bit. Knowing some comedians want to keep their material private, there is an option to hide journal posts from other users.</p>
                        <p>A message system in which comedians could come together, engage in conversation and joke around was a crucial part of the site. I also wanted to make sure that two users could become friends and engage further. You have an opportunity to find a comedian you know, have engaged with on the message board or just admire and follow. This gives you the opportunity to see their journal posts, joke ideas and events they created.</p>
                        <p>The events component was the last piece of the puzzle. I wanted comedians to see all of the events going on in their area. After all, if you don't perform the joke then does it matter that you ever wrote it? You can upload a poster along with all of the details of the event. </p>
                    </div>
                </div>
            </div>
        </div>

    )
}