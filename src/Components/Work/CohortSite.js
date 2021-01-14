import React from "react";
import { Link } from "react-router-dom";
import { NavBar } from "../NavBar/NavBar";
import "../scss/_work.scss"
import "../scss/_variables.scss"
import { Button, Image } from "react-bootstrap";
import ScrollToTop from "./Greet";
import C43photo from '../../images/c43Pre.png'

export const CohortPage = () => {
    
    return (
        <div className="greet-page" id="LT">
            <NavBar />
            <ScrollToTop />
            <div className="case-study-page">
                <Link to="/work" ><Button id="case-study-back" variant="primary">Back</Button></Link>
                <div className="case-study-content">
                    <h2 className="case-study-header">Cohort 43 Class Website</h2>
                    <Image id="case-study-pic" src={C43photo} width="80%" height="auto" />
                    <a id="github-link" href="https://github.com/nss-day-cohort-43/nss-day-cohort-43.github.io" target="_blank" rel="noreferrer">Github Repository</a>
                    <a id="live-link" href="https://nss-day-cohort-43.github.io/" target="_blank" rel="noreferrer">Live Site</a>
                    <div className="case-study-descrip">
                        <p>I was one of the many people who lost their job due to the COVID-19 pandemic. I used that time to learn how to code and attended the Nashville Software School. The bootcamp was a 6 month intense course that taught me and my classmates all about front-end development, UI and UX principles and working in an agile environment.</p>
                            <br />
                        <p>We wanted the site to showcase the members of the cohort and all we had learned during the course in an effort to appeal to hiring managers. Our cohort was split into 2 disciplines, the UI/UX developers and the .net/C# developers.</p>
                            <br />
                        <p>Our team faced challenges while creating the site. Due to the COVID-19 pandemic, we had to create the site while being fully remote. There are 25 members in our cohort and 2 different focuses, so we needed to figure out a way to differentiate between who is learning what technologies. Having a team of 8 artists meant a lot of compromise had to happen in order to create a final product.</p>
                        <p>The goal was to drive traffic to our personal sites, Github and LinkedIn profiles. We wanted to make sure that all members of the cohort were hired as soon as possible, the NSS average being within 4 months.</p>
                            <br />
                        <p>Our process started off with two teams of 4 dividing up and creating wireframes, ERD's and mockups. We joined back together and presented what we had come up with. We decided what worked best for both sites and combined the best parts to create a new mockup. We used previous class websites for design tips, looked at different sites for design inspiration and decided to go with the 2021 "color of the year" according to Pantone, yellow, and a teal that paired well. We wanted our site to feel fresh and modern.</p>
                        <p>We delegated tasks and worked on the sections. I was in charge of the technology section and the database that contained all of the student and technology data. We created a few different versions after doing multiple rounds of user testing and came up with our final design.</p>
                        <p> My marketing background came into play as I encouraged the team to keep it simple and appeal to potential employers. We decided on the headline of "Hire your next
developer" as opposed to a more artistic design to let our site visitors know exactly what they could do on our site. We opted for minimalist design in an effort to keep things from being busy. Our main goal was to follow the Steve Krug model of "Don't Make Me Think."</p>
                            <br />      
                        <p>I love projects like these because the things I learned almost feel tangible. I lead my first user testing session and learned how to properly guide without asking leading questions. I learned how to work on a larger team on a project and the importance of communication and delegation. I learned new ways to code, style and produce a functional and attractive website. I look forward to engaging in more of these projects in the future!</p>
                    </div>
                </div>
            </div>
        </div>

    )
}