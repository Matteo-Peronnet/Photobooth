import React from "react";
import ReactDOM from "react-dom";
import { renderRoutes } from 'react-router-config';
import { HashRouter } from 'react-router-dom';
import routes from './routes/routes';
import "./app.css";


ReactDOM.render(
<HashRouter>
        {renderRoutes(routes)}
</HashRouter>, document.getElementById("root"));
