import React from "react"
import { NavBar } from "../NavBar/NavBar"
import bird from '../../images/birbwhite.png'
import duck1 from '../../images/Duck1.png'
import breakskate from '../../images/breakskate.png'
import record from '../../images/record.png'
import "../scss/_fun.scss"
import { Image } from "react-bootstrap"

export const Fun = () => {
    return (
        <div className="fun-page">
            <NavBar />
            <div className="fun-content">
                <div className="fun-header-container">
                    <h1 className="fun-header">
                        I’m here for a good time.
            </h1>
                </div>
                <p className="fun-text">
                    In my spare time I love to skateboard, perform standup comedy, watch movies and listen to music. This is the space in which I impose all of that on you.
            </p>
                <div className="entertainment">
                    <div className="fun">
                        <Image id="goose" src={record} />
                        <div className="music">
                            <h3 id="fun-div-header">My recent jams</h3>
                            <iframe id="spotify" src="https://open.spotify.com/embed/playlist/4CkD7Bai9HfE73rvks4ILH" width="400" height="720" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                        </div>
                        <Image id="duck" src={duck1} />
                    </div>
                    <Image id="hold" src={breakskate} />

                    <div className="comedy">
                        <h3 id="fun-div-header">A playlist of my standup</h3>
                        <iframe id="youtube" src="https://www.youtube.com/embed/videoseries?list=PLM2osoqpH8dJF73pR-y5MEYP_KVZMSpd-" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                    </div>
                    <a className="secret" target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=X2WH8mHJnhM">
                        <Image id="thanks" src={bird} />
                    </a>
                </div>
            </div>
        </div>
    )
}