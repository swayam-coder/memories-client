import { combineReducers } from "redux";
import postsDetails from "./posts";
import authProvider from "./auth"

export default combineReducers({
    posts: postsDetails,
    authProvider
})