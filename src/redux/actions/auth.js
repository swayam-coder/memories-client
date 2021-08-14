import * as api from "../../api";
import { AUTH, REFRESH, RESET, URLSTATUS } from "../constants/auth";

export const sociallogin = (AccessToken, result, history) => async (dispatch) => {
    try {
        dispatch({type: "AUTH", payload: {AccessToken, result}});
        history.push("/posts");
    } catch (e) {
        console.log(e);
    }
}

export const signup = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.signup(formData);

        if(data.message) {
            // const { message } = data
            // dispatch({type: "AUTH-WARNING", message})
            history.push("/signup")
            return
        }

        dispatch({type: AUTH, payload: data});
        history.push("/posts")
    } catch (e) {
        console.log(e);
    }
}

export const login = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.login(formData)
        
        if(data?.message) {
            // const { message } = data
            // dispatch({type: "AUTH-WARNING", message})
            console.log(data.message);
            history.push("/login")
            return
        }

        dispatch({type: AUTH, payload: data});
        history.push("/posts");
    } catch (e) {
        console.log(e);
    }
}

export const refresh = (refreshToken) => async (dispatch) => {
    try {
        const { data } = await api.refresh(refreshToken)

        console.log(data);

        dispatch({type: REFRESH, payload: data.NewAccessToken})
    } catch (error) {
        console.log(error);
    }
}

export const confirmPassword = (password) => async (dispatch) => {
    try {
        const { data } = await api.confirmPassword(password)

        if(data.sentEmail === true){
            dispatch({type: RESET, payload: data.url})
        }
    } catch (error) {
        console.log(error);
    }
}

export const verifyToken = (id, token) => async (dispatch) => {
    try {
        const { data } = await api.verifyToken(id, token)

        dispatch({type: URLSTATUS, payload: data})
    } catch (error) {
        console.log(error);
    }
}