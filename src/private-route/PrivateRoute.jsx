import { Route, Redirect } from "react-router-dom";
import { useState } from "react";

const PrivateRoute = ({component: Component , ...rest}) => {
    const [User, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    return (
        <Route 
            {...rest}
            render = {props => {
                return User ? <Component {...props} /> : <Redirect to="/login" />
            }}
        />
    )
}

export default PrivateRoute;