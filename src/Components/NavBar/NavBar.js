import React from "react";
import { Nav } from "react-bootstrap";
import "../scss/_navBar.scss"

export const NavBar = props => {
    return (
        <>

            <Nav defaultActiveKey="/home" as="ul" className="navbar">
                <Nav.Item as="li" className="navbar__item active">
                    <Nav.Link className="navbar__link" href="/">
                        <h2 className="navtext navHeader">Richie Holsenback</h2>
                    </Nav.Link>
                </Nav.Item>
                <div className="nav-choices">
                    <Nav.Item as="li" className="navbar__item">
                        <Nav.Link className="navbar__link" href="/">
                            <h4 className="navtext">Work</h4>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li" className="navbar__item">
                        <Nav.Link className="navbar__link" href="/resume">
                            <h4 className="navtext">Resumé</h4>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li" className="navbar__item">
                        <Nav.Link className="navbar__link" href="/contact">
                            <h4 className="navtext">Contact</h4>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li" className="navbar__item">
                        <Nav.Link className="navbar__link" href="/fun">
                            <h4 className="navtext">Fun</h4>
                        </Nav.Link>
                    </Nav.Item>
                </div>
            </Nav>

            {/* <img id="headerBG" src={photo} width="100%" alt="header art"/> */}
        </>
    );
};
