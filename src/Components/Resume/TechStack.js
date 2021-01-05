import { Col, Row } from "react-bootstrap"
import "../scss/_resume.scss"

export const TechStack = () => {
    return (
        <div className="Exp" >
        <Row id="tech-stack-container">
            <h2 className="section-header text-white">Tech Stack</h2>
            <div className="tech-stack-section indent">
                <Col s={4} className="tech-stack-division">
                    <h4 className="stack-title text-white">UX</h4>
                    <ul className="tech-descrip">
                        <li className="tech-descrip-list text-white">Information Architecture</li>
                        <li className="tech-descrip-list text-white">Persona Development</li>
                        <li className="tech-descrip-list text-white">Wireframing</li>
                        <li className="tech-descrip-list text-white">Prototyping</li>
                    </ul>
                </Col>
                <Col s={4} className="tech-stack-division">
                    <h4 className="stack-title text-white">Development</h4>
                    <ul className="tech-descrip">
                        <li className="tech-descrip-list text-white">HTML</li>
                        <li className="tech-descrip-list text-white">CSS</li>
                        <li className="tech-descrip-list text-white">JavaScript</li>
                        <li className="tech-descrip-list text-white">SCSS</li>
                    </ul>
                </Col>
                <Col s={4} className="tech-stack-division">
                    <h4 className="stack-title text-white">Design</h4>
                    <ul className="tech-descrip">
                        <li className="tech-descrip-list text-white">Web</li>
                        <li className="tech-descrip-list text-white">Responsive</li>
                        <li className="tech-descrip-list text-white">Interaction</li>
                        <li className="tech-descrip-list text-white">Application/Interface</li>
                    </ul>
                </Col>
                <Col s={4} className="tech-stack-division">
                    <h4 className="stack-title text-white">Creative</h4>
                    <ul className="tech-descrip">
                        <li className="tech-descrip-list text-white">Photoshop</li>
                        <li className="tech-descrip-list text-white">Illustrator</li>
                        <li className="tech-descrip-list text-white">Lightroom</li>
                        <li className="tech-descrip-list text-white">Premiere Pro</li>
                        <li className="tech-descrip-list text-white">After Effects</li>
                    </ul>
                </Col>
            </div>
        </Row>
        </div>
        )
}