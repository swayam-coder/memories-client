import * as api from "../../api";
import { AUTH, REFRESH } from "../constants/auth";

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