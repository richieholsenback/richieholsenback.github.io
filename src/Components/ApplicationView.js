import React from "react";
import { Route } from "react-router-dom"
import { ContactSection } from "./Contact/Contact";
import { Resume } from "./Resume/Resume";
import { GreetingSection } from "./Work/Greet";
import { Fun } from "./Fun/Fun";
import "./scss/_navBar.scss"
import { LaughTrackPage } from "./Work/LaughTrack";
import { CohortPage } from "./Work/CohortSite";
import { ProjectPage } from "./Work/Work";

export const ApplicationViews = props => {
    return (
        <>
            <Route exact path='/'>
                <GreetingSection />
            </Route>
            
            <Route exact path='/work'>
                <ProjectPage />
            </Route>

            <Route exact path='/contact'>
                <ContactSection />
            </Route>
            
            <Route exact path='/resume'>
                <Resume />
            </Route>
            
            <Route exact path='/fun'>
                <Fun />
            </Route>
            
            <Route exact path='/laugh-track'>
                <LaughTrackPage />
            </Route>
            
            <Route exact path='/cohort-site'>
                <CohortPage />
            </Route>
        </>
    )
}