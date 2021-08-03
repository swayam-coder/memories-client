const authProvider = (state = { authdata : null }, action) => {
    switch (action.type) {
        case "AUTH":
            localStorage.setItem('profile', JSON.stringify({ ...action?.payload }));
            return {...state, authdata: action.payload}
        // case "AUTH-WARNING":
        //     return action.payload;
        case "LOGOUT":
            localStorage.clear();
            return {...state, authdata: null}
        default:
            return state;
    }
}

export default authProvider;