import { Button, Container } from "react-bootstrap"
import { Education } from "./Education"
import { ProExp } from "./ProExp"
import { TechExp } from "./TechExp"
import "../scss/_resume.scss"
import { TechStack } from "./TechStack"
import { NavBar } from "../NavBar/NavBar"
import resume from "../../images/RichieHolsenbackResumeV3.pdf"

export const Resume = () => {
    return (
        <div className="resume-section">
            <NavBar />
            <Container>
                <div className="resume-section-header">
                    <h1 className="resume-header">Resumé</h1>
                    <a href={resume} download>
                        <Button id="btn-alt"><svg id="resume-button" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke=" #5B5B7A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 9l-5 5-5-5M12 12.8V2.5" /></svg>  Download as PDF</Button>
                    </a>
                </div>
                <TechExp />
                <ProExp />
                <TechStack />
                <Education />
            </Container>
        </div>
    )
}