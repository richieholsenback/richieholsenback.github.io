import { Button } from "react-bootstrap";
import React from "react"
import { Image } from "react-bootstrap";
import photo from '../../images/IMG_0151.jpeg'
import { NavBar } from "../NavBar/NavBar";
import "../scss/_greet.scss"


export const GreetingSection = () => {
    return (
        <div className="work-page">
            <NavBar />
            <div className="main-container">
                <Image src={photo} width="25%" height="auto" />
                <div className="greet-info">
                    <h1>Richie Holsenback</h1>
                    <p>
                        I’m a UI/UX designer and a front end developer. I am excited about the idea of working with
                        agile teams to create beautiful, responsive applications that are user focused and user tested.
                </p>
                    <Button size="xl" variant="flat">See My Work</Button>
                </div>
            </div>
            <div className="project-half">
                <h3>Recent Work</h3>
                <div className="project-section">
                    <div className="project-card">
                        <div className="square"></div>
                        <a href="https://github.com/richieholsenback/laughtrack" target="_blank"><h4 className="project-name text-white">Laugh Track</h4></a>
                    </div>
                    <div className="project-card">
                        <div className="square"></div>
                        <a href="https://github.com/richieholsenback/laughtrack" target="_blank"><h4 className="project-name text-white">Laugh Track</h4></a>
                    </div>
                    <div className="project-card">
                        <div className="square"></div>
                        <a href="https://github.com/richieholsenback/laughtrack" target="_blank"><h4 className="project-name text-white">Laugh Track</h4></a>
                    </div>
                </div>
            </div>
        </div>
    )
}