import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "../components/Navbar/navbar"
import { App } from "./Lazycomponents/Lazycomponents";
import { SignUp } from "./Lazycomponents/Lazycomponents"
import { Login } from "./Lazycomponents/Lazycomponents"
import { PrivateRoute } from "./Lazycomponents/Lazycomponents";
import { Landing } from "./Lazycomponents/Lazycomponents"
import { Profile } from "./Lazycomponents/Lazycomponents";
import { User } from '../util/_localstorage';

function Main() {
    return (
        <>
        <React.Suspense fallback>
            <Router>
                <Navbar User={User}/>
                    <Switch>
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/login">
                            <Login />
                        </Route>
                        <Route exact path="/signup">
                            <SignUp />
                        </Route>
                        <PrivateRoute exact path="/posts">
                            <App feed={true}/>
                        </PrivateRoute>
                        <PrivateRoute exact path="/myposts">
                            <App feed={false}/>
                        </PrivateRoute>
                        <PrivateRoute path="/profile">
                            <Profile User={User}/>
                        </PrivateRoute>
                    </Switch>
            </Router>
            </React.Suspense>
        </>
    )
}

export default Main
