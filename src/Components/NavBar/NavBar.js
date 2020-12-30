import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../scss/_navBar.scss"

export const NavBar = props => {
    return (
        <>
            <Navbar bg="light" expand="lg" bg="transparent">
                <Navbar.Brand className="navtext navHeader navbar__item navbar__link" href="/">Richie Holsenback</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav defaultActiveKey="/" as="ul">
                        <div className="navbar">
                        <div className="nav-choices">
                            <Nav.Item className="navbar__item">
                                <Nav.Link className="navbar__link" href="/">
                                    <h4 className="navtext">Work</h4>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="navbar__item">
                                <Nav.Link className="navbar__link" href="/resume">
                                    <h4 className="navtext">Resumé</h4>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="navbar__item">
                                <Nav.Link className="navbar__link" href="/contact">
                                    <h4 className="navtext">Contact</h4>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="navbar__item">
                                <Nav.Link className="navbar__link" href="/fun">
                                    <h4 className="navtext">Fun</h4>
                                </Nav.Link>
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
