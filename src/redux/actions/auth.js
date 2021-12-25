import * as api from "../../api";
import { AUTH, REFRESH, RESET, URLSTATUS } from "../constants/auth";
import { SUCCESS, WARNING }  from "../constants/message"

export const socialsignupfailure = (error, history) => async(dispatch) => {
    dispatch({type: WARNING, payload: error.message})
    history.push("/signup")
}

export const socialloginfailure = (error, history) => async(dispatch) => {
    dispatch({type: WARNING, payload: error.message})
    history.replace("/login")
}

export const sociallogin = (AccessToken, result, history) => async (dispatch) => {
    try {
        dispatch({type: AUTH, payload: {AccessToken, result}});
        history.replace("/posts");
    } catch (e) {
        console.log(e);
    }
}

export const signup = (formData, history) => async (dispatch) => {
    try {
        const response = await api.signup(formData);

        if(response.data.message) {
            const { message } = response
            dispatch({type: WARNING, payload: {message, time: new Date()}})
            return
        }

        dispatch({type: AUTH, payload: response.data});
        history.replace("/posts")
    } catch (e) {
        console.log(e);
    }
}

export const login = (formData, history) => async (dispatch) => {
    try {
        const response = await api.login(formData)

        console.log(response);

        if(response.data.message) {
            const { message } = response
            dispatch({type: WARNING, payload: {message, time: new Date()}})
            return
        }

        dispatch({type: AUTH, payload: response.data});
        history.replace("/posts");
    } catch (e) {
        console.log(e);
    }
}

export const refresh = (refreshToken) => async (dispatch) => {
    try {
        const response = await api.refresh(refreshToken)

        if(response.data.message) {  // this will have a different type of popup
            const { message } = response
            dispatch({type: WARNING, payload: {message, time: new Date()}})
            return
        }

        dispatch({type: REFRESH, payload: response.data.NewAccessToken})
    } catch (error) {
        console.log(error);
    }
}

export const confirmPassword = (password) => async (dispatch) => {
    try {
        const response = await api.confirmPassword(password)

        if(response.data.message) {  // this will have a different type of popup
            const { message } = response
            dispatch({type: WARNING, payload: {message, time: new Date()}})
            return
        }

        if(response.data.sentEmail === true){
            dispatch({type: SUCCESS, payload: {message: response.data.sentEmail, time: new Date()}})
            dispatch({type: RESET, payload: response.data.url})
        }
    } catch (error) {
        console.log(error);
    }
}

export const verifyToken = (id, token) => async (dispatch) => {
    try {
        const response = await api.verifyToken(id, token)

        if(response.data.message) {  // this will have a different type of popup
            const { message } = response
            dispatch({type: WARNING, payload: {message, time: new Date()}})
            return
        }

        dispatch({type: URLSTATUS, payload: response.data})
    } catch (error) {
        console.log(error);
    }
}