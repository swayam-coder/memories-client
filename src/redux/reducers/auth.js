// eslint-disable-next-line no-unused-vars
import { AUTH, REFRESH, LOGOUT, RESET, URLSTATUS } from "../constants/auth";

const reducerobj = { authdata : null, warnings: null, reseturl: null, URLstatus: null, successmsgs: null }

const authProvider = (auth = reducerobj, action) => {
    switch (action.type) {
        case AUTH:
            localStorage.setItem('profile', JSON.stringify({ ...action?.payload }));
            return {...auth, authdata: action.payload}
        case LOGOUT:
            localStorage.clear();
            return {...auth, authdata: null}
        // case REFRESH:
        //     localStorage.setItem('profile', {...JSON.stringify(...JSON.parse(localStorage.getItem("profile"), AccessToken: action.payload})
        //     return {...auth, authdata: {...auth?.authdata, AccessToken: action.payload}}
        case RESET:
            return {...auth, reseturl: action.payload}
        case URLSTATUS:
            return {...auth, URLstatus: action.payload}
        default:
            return auth;
    }
}

export default authProvider;