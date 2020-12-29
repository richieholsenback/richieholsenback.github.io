import React from "react";
import { Route } from "react-router-dom"
import { ContactSection } from "./Contact/Contact";
import { NavBar } from "./NavBar/NavBar";
import { Resume } from "./Resume/Resume";
import { GreetingSection } from "./Work/Greet";
import { Fun } from "./Fun/Fun";
import "./scss/_navBar.scss"
import { ProjectList } from "./Work/ProjectList";

export const ApplicationViews = props => {
    return (
        <>
            <Route exact path='/'>
                {/* <NavBar /> */}
                <GreetingSection />
            </Route>

            <Route exact path='/contact'>
                {/* <NavBar /> */}
                <ContactSection />
            </Route>
            
            <Route exact path='/resume'>
                {/* <NavBar /> */}
                <Resume />
            </Route>
            
            <Route exact path='/fun'>
                {/* <NavBar /> */}
                <Fun />
            </Route>
        </>
    )
}