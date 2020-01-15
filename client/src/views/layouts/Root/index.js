import React, { Component }from 'react';
import { renderRoutes } from 'react-router-config';

const Root = ({ route }) => (
    <div className="vh-100">
        {renderRoutes(route.routes)}
    </div>
);

export default Root;

