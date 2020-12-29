import "../scss/_resume.scss"

export const TechStack = () => {
    return (
        <div className="ProExp">
            <h2 className="exp-section-header text-white">Tech Stack</h2>
            <div className="tech-stack-section">
                <div className="tech-stack-division">
                    <h4 className="exp-company text-white">UX</h4>
                    <ul className="job-descrip">
                        <li className="exp-descrip-list text-white">Information Architecture</li>
                        <li className="exp-descrip-list text-white">Persona Development</li>
                        <li className="exp-descrip-list text-white">Wireframing</li>
                        <li className="exp-descrip-list text-white">Prototyping</li>
                    </ul>
                </div>
                <div className="tech-stack-division">
                    <h4 className="exp-company text-white">Development</h4>
                    <ul className="job-descrip">
                        <li className="exp-descrip-list text-white">HTML</li>
                        <li className="exp-descrip-list text-white">CSS</li>
                        <li className="exp-descrip-list text-white">JavaScript</li>
                        <li className="exp-descrip-list text-white">SCSS</li>
                    </ul>
                </div>
                <div className="tech-stack-division">
                    <h4 className="exp-company text-white">Design</h4>
                    <ul className="job-descrip">
                        <li className="exp-descrip-list text-white">Web</li>
                        <li className="exp-descrip-list text-white">Responsive</li>
                        <li className="exp-descrip-list text-white">Interaction</li>
                        <li className="exp-descrip-list text-white">Application/Interface</li>
                    </ul>
                </div>
                <div className="tech-stack-division">
                    <h4 className="exp-company text-white">Creative</h4>
                    <ul className="job-descrip">
                        <li className="exp-descrip-list text-white">Photoshop</li>
                        <li className="exp-descrip-list text-white">Illustrator</li>
                        <li className="exp-descrip-list text-white">Lightroom</li>
                        <li className="exp-descrip-list text-white">Premiere Pro</li>
                        <li className="exp-descrip-list text-white">After Effects</li>
                    </ul>
                </div>
            </div>
        </div>)
}