import { Col, Row } from "react-bootstrap"
import "../scss/_resume.scss"

export const ProExp = () => {
    return (
        <Row className="Exp">
            <Col>
                <h2 className="section-header text-w">Professional Experience</h2>
                <h4 className="company-name text-w">SmileDirectClub</h4>
                <h5 className="text-pink">Social Media/Content Specialist | Oct 2019 - Aug 2020</h5>
                <ul>
                    <li className="text-w">Create and design online content geared towards a variety of customers keeping mobile-device design in mind</li>
                    <li className="text-w">Maintain content on all social channels, including Instagram, Facebook, Twitter, YouTube, Pinterest and LinkedIn</li>
                    <li className="text-w">Work with web development team to create content that worked with site design and layout</li>
                </ul>
                <h5 className="text-pink extra-space">Customer Care Floor Support/Specialist | Apr 2018 - Oct 2019</h5>
                <ul>
                    <li className="text-w">Provide team members with assistance regarding company text-w standard operating procedures, software and specialty cases</li>
                    <li className="text-w">Created solutions and procedures that ensured that customers were being assisted as efficiently as possible, decreasing time spent on cases by team members</li>
                    <li className="text-w">Follow up with customers  to find solutions more geared towards their individual desires</li>
                </ul>
                <h4 className="company-name text-w">Gotta Guy Marketing</h4>
                <h5 className="text-pink">Marketing Associate  |  Jan 2018 - Dec 2018</h5>
                <ul>
                    <li className="text-w">Create advertisement material that recipients find informational and attractive</li>
                    <li className="text-w">Maintain a social media presents for dozens of insurance agents with informative and engaging posts</li>
                    <li className="text-w">Monitor engagement and activity on posts to gauge success of campaigns</li>
                </ul>
                <h4 className="company-name text-w">Richie Holsenback Productions</h4>
                <h5 className="text-pink">Owner  |  May 2016 - Present</h5>
                <ul>
                    <li className="text-w">Work with clients and end users to create media that suits their personal and professional needs that is aesthetically pleasing as well as functional</li>
                    <li className="text-w">Create a vision for clients that properly conveys the format and tone of the media I produce</li>
                    <li className="text-w">Expand and maintain a customer base and communicate with customers to resolve any creative differences</li>
                </ul>
            </Col>
        </Row>
    )
}