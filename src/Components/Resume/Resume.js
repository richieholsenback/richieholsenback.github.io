import { Button } from "bootstrap"
import { Education } from "./Education"
import { ProExp } from "./ProExp"
import { TechExp } from "./TechExp"
import "../scss/_resume.scss"
import { TechStack } from "./TechStack"
import { NavBar } from "../NavBar/NavBar"

export const Resume = () => {
    return (
        <div className="resume-section">
            <NavBar />
            <div className="resume-section-header">
                <h1 className="resume-header">Resumé</h1>
                <button>Download as PDF</button>
            </div>
            <TechExp />
            <ProExp />
            <TechStack />
            <Education />
        </div>
    )
}