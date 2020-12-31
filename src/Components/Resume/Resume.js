import { Button } from "react-bootstrap"
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
            <div className="resume-section-header">
                <h1 className="resume-header">Resumé</h1>
                <a href={resume} download>
                <Button>Download as PDF</Button>
                </a>
            </div>
            <TechExp />
            <ProExp />
            <TechStack />
            <Education />
        </div>
    )
}