import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "../components/Navbar/navbar"
import { App } from "./Lazycomponents/Lazycomponents";
import { SignUp } from "./Lazycomponents/Lazycomponents"
import { Login } from "./Lazycomponents/Lazycomponents"
import { PrivateRoute } from "./Lazycomponents/Lazycomponents";
import { Landing } from "./Lazycomponents/Lazycomponents"
import { Profile } from "./Lazycomponents/Lazycomponents";
import { PasswordChange } from "./Lazycomponents/Lazycomponents";
import { Post } from "./Lazycomponents/Lazycomponents";
import { useSelector } from 'react-redux';
import "../sass-styles/global.scss"
import ErrorModal from '../messages/ErrorModal';
import SuccessModal from '../messages/SuccessModal';

function Main() {
    const url = useSelector(state => state.authdata)
    return (
        <>
        <React.Suspense fallback>
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
                        <PrivateRoute exact path="/posts">
                            <App feed={true}/>
                        </PrivateRoute>
                        <PrivateRoute path="/post">
                            <Post feed={true}/>
                        </PrivateRoute>
                        <PrivateRoute exact path="/myposts">
                            <App feed={false}/>
                        </PrivateRoute>
                        <PrivateRoute path="/profile">
                            <Profile />
                        </PrivateRoute>
                        <PrivateRoute exact path={`/${url}`}>
                            <PasswordChange />
                        </PrivateRoute>
                    </Switch>
                <ErrorModal />
                <SuccessModal />
            </Router>
            </React.Suspense>
        </>
    )
}

export default Main
