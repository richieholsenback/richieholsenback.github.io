import React from "react"
import { NavBar } from "../NavBar/NavBar"
import "../scss/_fun.scss"

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
                    <div className="music">
                        <h3>My recent jams</h3>
                        <iframe id="spotify" src="https://open.spotify.com/embed/playlist/4CkD7Bai9HfE73rvks4ILH" width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                    </div>
                    <div className="comedy">
                        <h3>A playlist of my standup</h3>
                        <iframe id="youtube" src="https://www.youtube.com/embed/videoseries?list=PLM2osoqpH8dJF73pR-y5MEYP_KVZMSpd-" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}