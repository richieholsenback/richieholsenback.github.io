import { Button, Image } from "react-bootstrap"
import { NavBar } from "../NavBar/NavBar"
import shake from '../../images/handshake.png'
import "../scss/_contact.scss"

export const ContactSection = () => {
    return (
        <div className="contact-page">
            <NavBar />
            <div className="contact-container">
                <p className="contact-text">
                    I’m excited to make excellent, user focused websites with you and your team.
                    Let’s get in touch!
                </p>
                <div className="button-section">
                    <a href="https://www.linkedin.com/in/richie-holsenback/" target="_blank" rel="noreferrer" className="button-left">
                        <Button id="btn" className="button-left" button-content-container>
                            <div className="button-contents">
                                <svg xmlns="http://www.w3.org/2000/svg" id="button-icon" width="20" height="20" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" /></svg>
                            LinkedIn
                            </div>
                        </Button>
                    </a>
                    <a href="mailto:richieholsenback@gmail.com" target="_blank" rel="noreferrer" className="button-right" >
                        <Button id="btn" className="button-right" button-content-container>
                            <div className="button-contents">
                                <svg xmlns="http://www.w3.org/2000/svg" id="button-icon" width="20" height="20" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                                </svg>
                            Email
                            </div>
                        </Button>
                    </a>
                </div>
                <Image id="shake" src={shake} />
            </div>
        </div>
    )
}