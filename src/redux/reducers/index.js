import { combineReducers } from "redux";
import postsDetails from "./posts";
import authProvider from "./auth"
import messageProvider from "./messages";

export default combineReducers({
    posts: postsDetails,
    authProvider,
    messageProvider
})