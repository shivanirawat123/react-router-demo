import React from "react";
import {Switch,Route} from "react-router-dom";
import Home from './../pages/Home';
import About from './../pages/About';
import Users from './../pages/Users';

function Routes(){
    return(
        <Switch>
        {/* less specific paths on bottom */}
            <Route exact path="/about">
                <About />
            </Route>
            <Route exact path="/users">
                <Users />
            </Route>
            <Route exact path="/">
                <Home />
            </Route>
        </Switch>
    )
}

export default Routes;
