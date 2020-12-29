import React from "react"
import { NavBar } from "../NavBar/NavBar"
import "../scss/_fun.scss"
import photo from "../../images/birbwhite.png"

export const Fun = () => {
    return (
        <div className="fun-page">
            <NavBar />
            <div className="fun-content">
                <h1 className="fun-header">
                    I’m here for a good time.
            </h1>
                <p className="fun-text">
                    In my spare time I love to skateboard, perform standup comedy, watch movies and listen to music. This is the space in which I impose all of that on you.
            </p>
            <div className="entertainment">
                <iframe id="spotify" src="https://open.spotify.com/embed/playlist/4CkD7Bai9HfE73rvks4ILH" width="400" height="480" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                <iframe id="youtube" width="853.33" height="480" src="https://www.youtube.com/embed/cr1Ee2OonVo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    )
}