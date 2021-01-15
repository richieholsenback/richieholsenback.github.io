import React from "react";
import { Link } from "react-router-dom";
import { NavBar } from "../NavBar/NavBar";
import "../scss/_work.scss"
import "../scss/_variables.scss"
import { Button, Image } from "react-bootstrap";
import ScrollToTop from "./Greet";
import C43photo from '../../images/c43Pre.png'

export const JournalCS = () => {
    
    return (
        <div className="greet-page" id="LT">
            <NavBar />
            <ScrollToTop />
            <div className="case-study-page">
                <Link to="/work" ><Button id="case-study-back" variant="primary">Back</Button></Link>
                <div className="case-study-content">
                    <h2 className="case-study-header">My Coding Journal</h2>
                    {/* <Image id="case-study-pic" src={C43photo} width="80%" height="auto" /> */}
                    <a id="github-link" href="https://github.com/richieholsenback/journal" target="_blank" rel="noreferrer">Github Repository</a>
                    <div className="case-study-descrip">
                        <p>The Nashville Software School is one of those places where a day feels like a month and a month feels like an hour. Keeping up with what you're learning can feel like an additional job on top of a 7 hour school day.</p>
                            <br />
                        <p>Our instructors suggested we create a journal to keep tabs on it all. It was early in the class so I didn't have a great grasp on HTML or CSS yet, much less JavaScript. So it had to work, but it was going to be basic.</p>
                            <br />
                        <p>I wanted to make sure it was efficient, since I knew at the end of a long day I wasn't going to want to spend much time writing about everything I learned for an hour. But I also wanted it to be in depth and fun, so it had to have some personality.</p>
                        <p>I made a simple site with a form and a list of past posts. Nothing fancy, but it got the job done. It had a subject line, a description and asked how much of a grip I felt like I had on the material. I put it in a lovely green and tried, with limited knowledge, to make it look good. I did the best I could.</p>
                            <br />      
                        <p>This being my very first project, I was very proud to see how it turned out. It was a real, functioning website that feasibly  could go on the internet. It was a huge first step for me and ignited my excitement for the beginning of my software development career!</p>
                    </div>
                </div>
            </div>
        </div>

    )
}