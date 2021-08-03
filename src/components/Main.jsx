import React from 'react'
import Navbar from "./Navbar/navbar";
import App from "./App";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import SignUp from "./Auth/Signup"
import Login from "./Auth/Login"
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Landing from "./Design/Landing"

function Main() {
    return (
        <>
            <Router>
            <Navbar />
                <Switch>
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/login">
                        <Login />
                    </Route>
                    <Route exact path="/signup">
                        <SignUp />
                    </Route>
                    <PrivateRoute exact path="/posts" component={App} />
                </Switch>
            </Router>
        </>
    )
}

export default Main
