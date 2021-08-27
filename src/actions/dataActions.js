import { axiosWithAuth } from "../utils/axiosWithAuth";

export const getData = (token) => {
    return (dispatch) => {
        dispatch({type: FETCH_DATA});
        axiosWithAuth().get('/items', {
            headers:{
                authentication : token
            }
        })
        .then(res => {
            dispatch({type: FETCH_DATA_SUCCESS, payload:res.data})
        })
        .catch(err => {
            dispatch({type: FETCH_DATA_FAIL, payload:err})
        })
    }
}

export const addData = (item, token) => {
    return (dispatch) => {
        axiosWithAuth().post('/items', item, {
            headers:{
                authentication: token
            }
        })
        .then(res => {
            console.log(res);
            dispatch({type:POST_ITEM, payload:res.data})
        })
        .catch(err => {
            dispatch({type:POST_ERROR, payload:err})
        })
    }
}

export const POST_ITEM = "POST_ITEMS"
export const postItem = () => {
    return({type:POST_ITEM})
}

export const POST_ERROR = "POST_ERROR"
export const postError = () => {
    return({type:POST_ERROR})
}

export const FETCH_DATA = "FETCH_DATA";
export const fetchData = () => {
    return({type:FETCH_DATA})
}

export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const fetchDataSuccess = (data) => {
    return({type:FETCH_DATA_SUCCESS, payload:data})
}

export const FETCH_DATA_FAIL = "FETCH_DATA_FAIL";
export const fetchDataFail = (err) => {
    return({type:FETCH_DATA_FAIL, payload:err})
}