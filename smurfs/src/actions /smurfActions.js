import axios from 'axios';

export const FETCH_SMURF_START = 'FETCH_SMURF_START';
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS';
export const FETCH_SMURF_FAILURE = 'FETCH_SMURF_FAILURE';

export const POST_SMURF_START = 'POST_SMURF_START';
export const POST_SMURF_SUCCESS = 'POST_SMURF_SUCCESS';
export const POST_SMURF_FAILURE = 'POST_SMURF_FAILURE';

export const UPDATE_NEW_SMURF = 'UPDATE_NEW_SMURF'



export const getSmurf = () => dispatch => {
  dispatch({ type: FETCH_SMURF_START });
  axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
      dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data.value });
    })
    .catch(err => {
      dispatch({ type: FETCH_SMURF_FAILURE, payload: err.response });
    });
};

export const updateNewSmurf = (value) => dispatch => {
  return {
    type:UPDATE_NEW_SMURF,
    payload: value,
  }
}

export const postSmurf = (newSmurf) => dispatch => {
  dispatch({ type: POST_SMURF_START });
  axios
    .post('http://localhost:3333/smurfs')
    .then(res => {
      dispatch({ type: POST_SMURF_SUCCESS, payload: res.data.value });
    })
    .catch(err => {
      dispatch({ type: POST_SMURF_FAILURE, payload: err.response });
    });
};