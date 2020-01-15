import React, { Component }from 'react';
import PropTypes from 'prop-types';
import { renderRoutes } from 'react-router-config';


export default class App extends Component {

    render() {
        const { route, loaded } = this.props;
        return (
            <div className="vh-100 flex flex-column flex-auto">
            {
            true ?
                renderRoutes(route.routes)
                :
                <div className="flex flex-auto justify-center items-center">
                    Spin
                </div>
            }
            </div>
        );
    }
}
