import { Col, Row } from "react-bootstrap"
import "../scss/_resume.scss"

export const ProExp = () => {
    return (
        <Row className="Exp">
            <Col>
                <h2 className="section-header text-w">Professional Experience</h2>
                <h4 id="h4" className="company-name text-w">SmileDirectClub</h4>
                <h5 className="text-pink">Social Media/Content Specialist | Oct 2019 - Aug 2020</h5>
                <ul>
                    <li className="text-w">Collaborate with creative and development teams in an iterative process to ensure final results matched the goal of the project</li>
                    <li className="text-w">Plan overall brand strategy as well as individual pieces of content that conveyed the overall message that SmileDirectClub wanted to convey</li>
                    <li className="text-w">Monitor sentiment of customer base and made changes based on feedback as it related to content previously posted</li>
                </ul>
                <h5 className="text-pink extra-space">Customer Care Floor Support/Specialist | Apr 2018 - Oct 2019</h5>
                <ul>
                    <li className="text-w">Assisted team members as they interacted with customers instructing them of the company's standard operating procedures, software and specialty cases</li>
                    <li className="text-w">Created new solutions and procedures that ensured that customers were being assisted, increasing efficiency and decreasing overall time spent on cases by 22%</li>
                    <li className="text-w">Follow up with individual customers to find solutions more geared towards their individual needs and desires</li>
                </ul>
                {/* <h4 id="h4" className="company-name text-w">Gotta Guy Marketing</h4>
                <h5 className="text-pink">Marketing Associate  |  Jan 2018 - Dec 2018</h5>
                <ul>
                    <li className="text-w">Mockup designs for external clients to present and rationalize design decisions</li>
                    <li className="text-w">Study market trends in different cities around the United States to understand which strategies would be best suited to individual areas</li>
                    <li className="text-w">Ensure that all advertising materials were ADA compliant and accessible to all who would receive the information</li>
                </ul> */}
                <h4 id="h4" className="company-name text-w">Richie Holsenback Productions</h4>
                <h5 className="text-pink">Owner  |  May 2016 - Present</h5>
                <ul>
                    <li className="text-w">Storyboard a vision with clients that I would then turn into a full length film, photoshoot or design</li>
                    <li className="text-w">Collaborate with brands to create content that suited their specific needs for a project while maintaining their corporate branding</li>
                    <li className="text-w">Organize and maintain a large database of large files with accessibility and efficiency in mind</li>
                </ul>
            </Col>
        </Row>
    )
}