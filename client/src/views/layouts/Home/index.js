import React, { Component } from "react";
import {Link} from "react-router-dom";


class Home extends Component {

    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div className={"flex flex-auto flex-row flex-wrap items-center justify-center pa1"}>
                <p>Home</p>
            </div>
        );
    }
}

export default Home
