import React from "react";

import Login from '../src/class/Login';
import Home from '../src/class/Home';
import Services from '../src/class/Services';
import Contact from "../src/class/Contact";
import { Switch, Route } from 'react-router-dom';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/login" component={Login} />
        </Switch>
    );
}

export default Routes;