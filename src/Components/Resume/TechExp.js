import "../scss/_resume.scss"

export const TechExp = () => {
    return (
        <div className="TechExp">
            <h2 className="exp-section-header text-white">Technical Experience</h2>
            <h4 className="exp-company text-white">Nashville Software School</h4>
            <h5 className="exp-position text-pink">Front-End UI/UX Developer | August 2020 - Present</h5>
            <ul className="job-descrip">
                <li className="exp-descrip text-white">Develop dynamic single-page applications using React in addition to modern ES6+ JavaScript</li>
                <li className="exp-descrip text-white">Learned fundamentals such as HTML, CSS, JSON, modular code, reusable components, database structure and using Entity Relationship Diagrams</li>
                <li className="exp-descrip text-white">Work with team members to create sites with user experience in mind, lead user testing sessions in order to gain knowledge on how to improve user interface and enhance the site based on those results</li>
                <li className="exp-descrip text-white">Exposed to an Agile environment through frequent group projects including daily stand ups, planning, ticket assignments and problem solving</li>
                <li className="exp-descrip text-white">Used Githib to perform and review pull requests to ensure working code free of merge conflicts</li>
            </ul>
        </div>
    )
}