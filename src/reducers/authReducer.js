import { LOGIN_SUCCESS, LOGIN_FAIL, REGISTER_SUCCESS, REGISTER_FAIL } from '../actions/authActions'

const initialState = {
    token:'',
    error:'',
    isRegistered:false,
    isLoggedIn:false
  }
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
    case LOGIN_SUCCESS :
        return({
            ...initialState,
            token: action.payload,
            isLoggedIn:true
        })
    case LOGIN_FAIL :
        return({
            ...initialState,
            error: action.payload,
            isLoggedIn:false
        })
    case REGISTER_SUCCESS : 
        return({
        ...initialState,
        isRegistered:true
    })
    case REGISTER_FAIL:
        return({
            ...initialState,
            isRegistered:false
        })
      default:
        return state;
    }
  };
  
  export default reducer;