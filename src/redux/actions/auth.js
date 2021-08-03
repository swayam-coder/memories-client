import * as api from "../../api";
import { AUTH } from "../constants/auth";

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
        const { data } = await api.login(formData);

        if(data.message) {
            // const { message } = data
            // dispatch({type: "AUTH-WARNING", message})
            history.push("/login")
            return
        }

        dispatch({type: AUTH, payload: data});
        history.push("/posts");
    } catch (e) {
        console.log(e);
    }
}