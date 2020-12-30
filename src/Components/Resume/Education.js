import "../scss/_resume.scss"

export const Education = () => {
    return (
        <div className="edu-section">
            <h2 className="exp-section-header text-white">Education</h2>
            <div className="indent">
                <div className="Edu">
                    <h4 className="exp-company text-white extra-space">Nashville Software School</h4>
                    <h5 className="exp-position text-pink">UI/UX Design, Front-End Development | Aug 2020 - Present</h5>
                </div>
                <div className="Edu">
                    <h4 className="exp-company text-white extra-space" >Auburn University</h4>
                    <h5 className="exp-position text-pink">Bachelor of Science, Major in Finance | Aug 2011 - May 2016</h5>
                </div>
            </div>
        </div>
    )
}