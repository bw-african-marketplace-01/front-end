import { axiosWithAuth } from "../../utils/axiosWithAuth";

export const login = () => {
    return (dispatch) => {
        axiosWithAuth().post('/users/login')
        .then(res => {
            dispatch({type: LOGIN_SUCCESS, payload:res.data})
        })
        .catch(err => {
            dispatch({type: LOGIN_FAIL, payload:err})
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