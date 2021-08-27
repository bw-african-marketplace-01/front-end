import {
  FETCH_DATA,
  FETCH_DATA_FAIL,
  FETCH_DATA_SUCCESS,
  POST_ITEM,
  POST_ERROR,
} from "../actions/dataActions";

const initialState = {
  data: [],
  isFetching: false,
  isPosting: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...initialState,
        isFetching: true,
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...initialState,
        data: action.payload,
      };
    case FETCH_DATA_FAIL:
      return {
        ...initialState,
        isFetching: false,
      };
    case POST_ITEM:
      return {
        ...initialState,
        data: [...initialState.data, action.payload],
        isPosting: true,
      };
    case POST_ERROR:
      return {
        ...initialState,
        isPosting: false,
      };
    default:
      return state;
  }
};

export default reducer;
