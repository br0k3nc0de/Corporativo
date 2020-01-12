import React from "react";

import Login from '../src/class/Login';
import Home from '../src/class/Home';
import { Switch, Route } from 'react-router-dom';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/home" component={Home} />
        </Switch>
    );
}

export default Routes;