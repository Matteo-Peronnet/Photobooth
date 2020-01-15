import React from "react";
import Lottie from 'react-lottie';
import { withRouter } from "react-router";
import * as animationData from './Lottie/camera.json'
import { EVENTS } from "../../../utils";

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};


const { ipcRenderer } = require('electron')

const Home = ({history}) => {

    ipcRenderer.on('event', (props, arg) => {
        if (EVENTS.BUTTON === arg) {
            history.push('/camera')
        }
    })

    return (
        <div className="flex flex-column justify-center items-center h-100">
            <h1 className="white ttu">Appuyez sur le bouton</h1>
            <Lottie
                options={defaultOptions}
                height={400}
                width={400}
            />
        </div>
    )

}

export default withRouter(Home);
