import React from "react";
import { Link } from "react-router-dom";
import { NavBar } from "../NavBar/NavBar";
import "../scss/_greet.scss"
import "../scss/_variables.scss"
import LTphoto from '../../images/LTHome.png'
import { Button, Image } from "react-bootstrap";

export const CohortPage = () => {
    return (
        <div className="greet-page" id="LT">
            <NavBar />
            <div className="case-study-page">
                <Link to="/" ><Button id="case-study-back" variant="primary">Back</Button></Link>
                <div className="case-study-content">
                    <h2 className="case-study-header">Cohort 43 Class Website</h2>
                    <Image id="case-study-pic" src={LTphoto} width="80%" height="auto" />
                    <a href="https://github.com/nss-day-cohort-43/nss-day-cohort-43.github.io" target="_blank" rel="noreferrer">Github Repository</a>
                    <div className="case-study-descrip">
                        <p>I was one of the many people who lost their job due to the COVID-19 pandemic. I used that time to learn how to code and attended the Nashville Software School. The bootcamp was a 6 month intense course that taught me and my classmates all about front-end development, UI and UX principles and working in an agile environment.</p>
                        <p>The entire class went through the first half of the course learning Front-End development then we split into 2 groups: The UI/UX crew and the C# and .net crew. The UI/UX crew was tasked with creating a site that showcased the members of the cohort and all we had learned during the course. </p>
                        <p>Our team faced challenges while creating the site. Due to the COVID-19 pandemic, we had to create the site while being fully remote. There are 25 members in our cohort and 2 different focuses, so we needed to figure out a way to differentiate between who is learning what technologies. Having a team of 8 artists meant a lot of compromise had to happen in order to create a final product.</p>
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