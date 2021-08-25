import { axiosWithAuth } from "../utils/axiosWithAuth";

export const login = (credentials) => {
    return (dispatch) => {
        axiosWithAuth().post('/users/login', credentials)
        .then(res => {
            dispatch({type: LOGIN_SUCCESS, payload:res.data.token});
        })
        .catch(err => {
            dispatch({type: LOGIN_FAIL, payload:err})
        })
    }
}

export const register = (credentials) => {
    return (dispatch) => {
        axiosWithAuth().post('/users/register', credentials)
        .then(res => {
            dispatch({type: REGISTER_SUCCESS, payload:res.data.token});
        })
        .catch(err => {
            dispatch({type: REGISTER_FAIL, payload:err})
        })
    }
}

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const loginSuccess = (data) => {
    return({type:LOGIN_SUCCESS, payload:data})
}

export const LOGIN_FAIL = "LOGIN_FAIL";
export const loginFail = (err) => {
    return({type:LOGIN_FAIL, payload:err})
}

export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const registerSuccess = (data) => {
    return({type:REGISTER_SUCCESS, payload:data})
}

export const REGISTER_FAIL = "REGISTER_FAIL";
export const registerFail = (err) => {
    return({type:REGISTER_FAIL, payload:err})
}