import React from "react";
import { Link } from "react-router-dom";
import { NavBar } from "../NavBar/NavBar";
import "../scss/_work.scss"
import "../scss/_variables.scss"
import OFHome from '../../images/OFHome.png'
import OFWire from '../../images/OF Wireframe.png'
import CaroUP from '../../images/CaroUP.png'
import MarkUP from '../../images/MarkUP.png'
import ofJourney from '../../images/ofJourneyMap.png'
import mockup from '../../images/Mockup.png'
import mobilemockup from '../../images/MobileMock.png'
import code from '../../images/ofcode.png'
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import ScrollToTop from "./Greet";

export const Ourflix = () => {
    return (
        <div className="greet-page" id="CS">
            <NavBar />
            <ScrollToTop />
            <Link to="/work" ><Button id="case-study-back" variant="primary">Back</Button></Link>
            <Container >
                {/* <div className="case-study-content"> */}
                <Row>
                    <Col>
                        <h2 className="case-study-header">Ourflix</h2>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col xs={12}>
                        <Image id="case-study-pic" src={OFHome} width="100%" height="auto" />
                    </Col>
                </Row>
                <Row>
                    <Col id="gh-link">
                        <p><a href="https://github.com/richieholsenback/ourflix" target="_blank" rel="noreferrer" >Github Repository</a></p>
                    </Col>
                </Row>
                <Row>
                    <Col id="gh-link">
                        <p><a href="https://www.loom.com/share/edf24dcf06924e3385bb7bbebbb07a32" target="_blank" rel="noreferrer" >Check out a demo of Ourflix</a></p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {/* <div className="case-study-descrip"> */}
                        <h3>The Backstory</h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>You finally got home after a long day and all you want to do is sit down with a friend and watch a movie. You get changed into your comfiest clothes, get your favorite snack and a drink, and find the softest spot on the couch. Then, for the next 2 hours, you and your friend argue about what to watch. It’s exhausting. No one can agree on what they want. And at the end of the argument, you end up picking the movie neither of you are excited about. I want to change that process with Ourflix.</p>
                        <br />
                        <p>This project was my backend capstone for the Nashville Software School. Since my last capstone, I had taken 2 months of classes teaching me how to be a UI/UX Designer. This project would have things previous projects had - user personas, ERD’s and wireframes - but it would need more to make it a true UI/UX project.</p>
                        <h3 >The Problem</h3>
                        <p>How can I build an application that helps users waste less time deciding what to watch?</p>
                        <h3 >The Solution</h3>
                        <p>I wanted to create a Tinder-esque application where, rather than a potential romantic mate, users are presented with a move or tv show they can show interest in our toss aside. From there, users can compare their liked movies and show with other users, their friends, and see what both users have in common. </p>
                        <h3 >Challenges</h3>
                        <p>This was a big project. I had the idea around the time I started at NSS, but around the time of my first capstone I knew I couldn’t get anywhere near making it work. Come time for my second and I was still intimidated. This was a 3 week sprint, and if I did not finish I did not graduate. I knew I’d have to put in overtime, but I was ready. </p>
                        <br />
                        <p>I knew from the beginning that this project was going to be tough. Even in the research phase before I created a single wireframe, I hit a road bump. Netflix has an API, however, they limited access to that API in 2013. I attempted to gain access, but to no avail. </p>
                        <br />
                        <p>The Tinder swipe was the most intriguing piece. It was clearly outside of the scope of my knowledge and, given the 3 week time-span, I did not believe I had time to learn how to create a reliable function that could accomplish what I needed it to. I would be forced to turn to a third party plugin that would allow for the functionality, and those always have dragons hiding in the code waiting to be fought.</p>
                        <br />
                        <p>I was going to implement Firebase into my application so users could sign in with Google. I wanted to use the database that Firebase offered so any user anywhere could use the site. It would lose purpose if you couldn’t find friends who were also using the app.</p>
                        <h3 >The Design Process</h3>
                        <p>I was so excited for my project that I needed up starting 2 weeks early. I wanted to make sure I made a good website. I started with the wireframe.</p>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col lg={12}>
                        <Image id="user-prof" src={OFWire} width="100%" height="auto" alt="The wireframe for ourflix" />
                        <p>Want a better view of the wireframe? <a href="https://www.figma.com/file/xasfgEcT81lBbrkNJzNupf/Capstone?node-id=0%3A1" target="_blank">Click here.</a></p>
                        <br />
                        <p>The format really fell into place. The tinder layout simplified things, present a user with an option and let them choose. Easy enough! How to lay out information about the movie was the only hesitancy I had, but ultimately decided that movie posters typically give you enough information on first glance, but I needed to give an option to see more if it wasn’t abundantly clear.</p>
                        <br />
                        <p>Defining who my users would be was my next step. I created two personas, one being a twenty-something adult female and the other being a forty-ish dad. They seemed different enough to really catch who the user base might be and what their motives were.</p>
                    </Col>
                    <Image id="user-prof" src={MarkUP} width="80%" height="auto" alt="The ERD for ourflix" />
                    <Image id="user-prof" src={CaroUP} width="80%" height="auto" alt="The ERD for ourflix" />
                    <Col lg={12}>
                        <p>The journey of selecting a movie was an important mindset to step into. Knowing pain points could help with the overall effectiveness of the app.</p>
                        <br />
                    </Col>
                    <Image id="user-prof" src={ofJourney} width="80%" height="auto" alt="The ERD for ourflix" />
                    <Col lg={12}>
                        <p>With that, I decided I was ready to mock up. I knew I could create a color sceme that might look nice, but I wanted another challenge. I decided to stay within Netflix’s style guides. I wanted to use the same fonts, colors, buttons and everything else that Netflix does. Staying within the bounds of another company’s guidelines is what I’ll be doing in my career, might as well start here</p>
                        <Image id="user-prof" src={mockup} width="100%" height="auto" alt="Ourflix Mockup" />
                        <Image id="user-prof" src={mobilemockup} width="100%" height="auto" alt="Ourflix Mockup" />
                        <p>There's much more to the mockup, <a href="https://www.figma.com/file/xasfgEcT81lBbrkNJzNupf/Capstone?node-id=0%3A1" target="_blank">Click here to check it out.</a></p>

                        <p>I made 2 mock ups for the site, knowing that while I was creating a website on desktop, this would typically be accessed by a smart phone. It makes sense given the target demographics are much more heavy phone users than desktop.</p>
                        <br />
                        <p>Largely, the design did not change much between the wireframe and mockup. I added in color, changed the fonts and smaller tweaks. I made the mock up into a prototype and commenced user testing in the mobile mock up.</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h3 >User Testing</h3>
                        <p>In user testing, I, like many other designers, found that my design was not as intuitive as I had believed it was. Users who had never used a dating app were confused about which way to swipe. They revealed that the thumbs up and thumbs down conveyed a rating rather than an interest level. They would get to the end of the list of movies and not know what to do next.</p>
                        <br />
                        <p>I was excited to address the changes and begin a second round of testing. I implemented a tutorial at the beginning that seemed to clear the air. I replaced the thumbs up and down with a check mark and an X. I made the navigation a bit more obvious so it drew the eye. The solutions weren’t perfect, but they worked! I was excited, but unfortunately hit the end of my timebox. I needed to start coding or I would never finish the app.</p>
                        <h3 >Coding</h3>
                        <p>It was time to code, and I was pretty excited. I knew there was a ton of work, but the idea was so fun that I was excited to tackle it all. The app was written in React and used the React-Bootstrap component library. I have grown to thoroughly enjoy both, this portfolio site uses both of those as well.</p>
                        <br />
                        <p>Not having the Netflix API was a setback, but there were alternatives. I found the <a href="https://rapidapi.com/unogs/api/unogsng" target="_blank" rel="noreferrer">unongs API</a> that has, as far as I know, an updated catalogue of titles. Issues arose when I realized the API took 10 seconds to fetch the data. For the sake of education, I made a copy of the API. I had no intent of distributing or making a financial gain on the site so I felt it was ok. The image quality was still low, but finding posters that would fit the size format was difficult and I could not spare the time to search for ones that did. It also limited my ability to filter due to the fact that most of that information was not included in the database. Minor setbacks, but largely a win.</p>
                        <br />
                        <p>The Tinder swipe was solved with <a href="https://www.npmjs.com/package/react-tinder-card" target="_blank" rel="noreferrer">React Tinder Card by Jakob Unnebäck</a>. It had the best functionality I found, but still had shortcomings. The buttons would have to be sacrificed due to limitations with the way the code worked. They would swipe the card, but the movie or show would not be liked or disliked. It was too large of a flaw to work around, but the swipe worked just as I had hoped.</p>
                        <br />
                        <p>Firebase took a lot of time to figure out. I am used to RESTful API calls where you can embed and expand given the ID in one data subset matched the naming of another. However, Firebase’s realtime database does not allow for that. I am quite proud of the workaround I figured out.</p>
                        <Image id="user-prof" src={code} width="100%" height="auto" alt="Fetch call from firebase" />
                        <p>As you can see, I grew very familiar with Oject.keys, Object.values and Object.entries. If you know of a better way to tackle this issue or want to chat more about my solution, <a href="mailto:richieholsenback@gmail.com" target="_blank" rel="noreferrer">please reach out</a>!</p>
                        <br />
                        <h3 >Wrapping Up</h3>
                        <p>This project was bigger than I imagined it would be. I have never struggled more with code than I did here, but I have also never learned as much than I did with this project. For every struggle, there were 5 more moments where I felt like I triumphed.</p>
                        <br />
                        <p>The end result does not look like the mockup. I wish it did. But I’m still very proud of this project. I had valuable practice with UI/UX techniques, I learned about promises with fetch calls, I learned how to use Firebase. I never would have known that without this project. I’m not finished with it, either. I want to work on this project more and keep learning from it. I want to get the buttons figured out, I want to add groups, I want to make this application as great as it can be.</p>
                        <br />

                    </Col>
                </Row>
            </Container>
        </div >

    )
}