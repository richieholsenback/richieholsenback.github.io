import { Col, Row } from "react-bootstrap"
import "../scss/_resume.scss"

export const Education = () => {
    return (
        <Row className="Exp">
            <Col>
            <h2 className="section-header text-w">Education</h2>
                <div className="Edu">
                    <h4 id="h4" className="company-name text-w extra-space">Nashville Software School</h4>
                    <h5 className="text-pink">UI/UX Design, Front-End Development | Aug 2020 - Present</h5>
                </div>
                <div className="Edu">
                    <h4 id="h4" className="company-name text-w extra-space" >Auburn University</h4>
                    <h5 className="text-pink">Bachelor of Science, Major in Finance | Aug 2011 - May 2016</h5>
                </div>
            
            </Col>
        </Row>
    )
}