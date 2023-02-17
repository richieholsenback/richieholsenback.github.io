import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../scss/_navBar.scss"

export const NavBar = props => {
    return (
        <>
            <Navbar expand="lg" bg="transparent" id="navbar-container">
                <Link to="/"><Navbar.Brand id="navHeader1" >Richie Holsenback</Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav defaultActiveKey="/" as="ul" >
                        <div id="navbar">
                            <div id="nav-choices">
                                <Nav.Item className="navbar__item">
                                    <Link className="navbar__link" to="/work">
                                        <h4 id="navtext">Work</h4>
                                    </Link>
                                </Nav.Item>
                                <Nav.Item className="navbar__item">
                                    <Link className="navbar__link" to="/resume">
                                        <h4 id="navtext">Résumé</h4>
                                    </Link>
                                </Nav.Item>
                                <Nav.Item className="navbar__item">
                                    <Link className="navbar__link" to="/contact">
                                        <h4 id="navtext">Contact</h4>
                                    </Link>
                                </Nav.Item>
                                <Nav.Item className="navbar__item">
                                    <Link className="navbar__link" to="/fun">
                                        <h4 id="navtext">Fun</h4>
                                    </Link>
                                </Nav.Item>
                            </div>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            {/* <img id="headerBG" src={photo} width="100%" alt="header art"/> */}
        </>
    );
};
