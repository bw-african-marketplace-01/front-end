import { LOGIN_SUCCESS, LOGIN_FAIL } from '../actions/authActions'

const initialState = {
    token:'',
    error:'',
  }
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
    case LOGIN_SUCCESS :
        return({
            ...initialState,
            token: action.payload
        })
    case LOGIN_FAIL :
        return({
            ...initialState,
            error: action.payload
        })
      default:
        return state;
    }
  };
  
  export default reducer;