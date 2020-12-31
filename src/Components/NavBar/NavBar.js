import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../scss/_navBar.scss"

const headerBrand = () => {
    if ((window).width() < 1090){
        return(
            <>
            <h1>RH</h1>
            </>
        )
    } else {
        return(
            <>
            <h1>Richie Holsenback</h1>
            </> 
        )
    }
}
export const NavBar = props => {
    return (
        <>
            <Navbar bg="light" expand="lg" bg="transparent">
                <Navbar.Brand id="navHeader" className="navtext navbar__item navbar__link" href="/">Richie Holsenback</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav defaultActiveKey="/" as="ul">
                        <div id="navbar">
                        <div id="nav-choices">
                            <Nav.Item className="navbar__item">
                                <Nav.Link className="navbar__link" href="/">
                                    <h4 id="navtext">Work</h4>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="navbar__item">
                                <Nav.Link className="navbar__link" href="/resume">
                                    <h4 id="navtext">Resumé</h4>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="navbar__item">
                                <Nav.Link className="navbar__link" href="/contact">
                                    <h4 id="navtext">Contact</h4>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="navbar__item">
                                <Nav.Link className="navbar__link" href="/fun">
                                    <h4 id="navtext">Fun</h4>
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
