import { axiosWithAuth } from "../../utils/axiosWithAuth";

export const getData = () => {
    return (dispatch) => {
        dispatch({type: FETCH_DATA});
        axiosWithAuth().get('/users')
        .then(res => {
            dispatch({type: FETCH_DATA_SUCCESS, payload:res.data})
        })
        .catch(err => {
            dispatch({type: FETCH_DATA_FAIL, payload:err})
        })
    }
}

export const FETCH_DATA = "FETCH_DATA";
export const fetchData = () => {
    return({type:FETCH_DATA})
}

export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const fetchDataSuccess = (data) => {
    return({type:FETCH_SUCCESS, payload:data})
}

export const FETCH_DATA_FAIL = "FETCH_DATA_FAIL";
export const fetchDataFail = (err) => {
    return({type:FETCH_DATA_FAIL, payload:err})
}