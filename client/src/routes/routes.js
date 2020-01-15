import React from 'react';
import Root from '../views/layouts/Root/';
import Home from '../views/layouts/Home';
import Camera from '../views/layouts/Camera';

const routes = [
    {
        component: Root,
        routes: [
            {
                path: '/',
                exact: true,
                component: Home
            },
            {
                path: '/camera',
                exact: true,
                component: Camera
            },
        ]
    }
]


export default routes;
