import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

/*
const routes = [{
    path: '/',
    Component: HomePage,
    exact: true, // only display when the route is exactly this
}];
*/

const routes = [];

export const Routes = () => (
    <Router>
        <Switch>
            {routes.map((route, index) => (
                <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                >
                    <route.Component />
                </Route>
            ))}
        </Switch>
    </Router>
)