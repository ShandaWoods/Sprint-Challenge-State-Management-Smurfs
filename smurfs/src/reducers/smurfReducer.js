import {
    FETCH_SMURF_START,
    FETCH_SMURF_SUCCESS,
    FETCH_SMURF_FAILURE,
    POST_SMURF_START,
    POST_SMURF_SUCCESS,
    POST_SMURF_FAILURE,
  } from '../actions ';
  
  const initialState = {
    smurf: null,
    isFetching: false,
    isPosting: false,
    error: "",
    newSmurf: ''
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_SMURF_START:
        return {
          ...state,
          isFetching: true
        };
      case FETCH_SMURF_SUCCESS:
        return {
          ...state,
          smurf: action.payload,
          isFetching: false,
          error: ""
        };
      case FETCH_SMURF_FAILURE:
        return {
          ...state,
          isFetching: false,
          error: action.payload
        };
        case POST_SMURF_START:
          return {
            ...state,
            isPosting: true
          };
        case POST_SMURF_SUCCESS:
          return {
            ...state,
            newSmurf: action.payload,
            isPosting: false,
            error: ""
          };
        case POST_SMURF_FAILURE:
          return {
            ...state,
            isPosting: false,
            error: action.payload
          };

      default:
        return state;
    }
  };
  
  export default reducer;
  