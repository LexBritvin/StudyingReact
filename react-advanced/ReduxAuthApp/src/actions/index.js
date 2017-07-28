import axios from 'axios';
import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  FETCH_MESSAGE,
} from './types';

const ROOT_URL = 'http://localhost:3090';

export function signinUser({email, password, browserHistory}) {
  return function (dispatch) {
    // Submit credentials to the server.
    axios.post(`${ROOT_URL}/signin`, {email, password})
      .then(response => {
        // Update state to auth
        dispatch({type: AUTH_USER});
        // Save JWT token
        localStorage.setItem('token', response.data.token);

        // Redirect to '/feature'
        browserHistory.push('/feature');
      })
      .catch(() => {
        // If bad, show error
        dispatch(authError('Bad Login Info'));
      });
  }
}

export function signupUser({email, password, browserHistory}) {
  return function (dispatch) {
    axios.post(`${ROOT_URL}/signup`, {email, password})
      .then(response => {
        // Update state to auth
        dispatch({type: AUTH_USER});
        // Save JWT token
        localStorage.setItem('token', response.data.token);

        // Redirect to '/feature'
        browserHistory.push('/feature');
      })
      .catch(response => {
        // If bad, show error
        console.log(response);
        dispatch(authError(response.response.data.error));
      });
  }
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error,
  }
}

export function signoutUser(error) {
  localStorage.removeItem('token');
  return {
    type: UNAUTH_USER,
  }
}

export function fetchMessage() {
  return function (dispatch) {
    axios.get(ROOT_URL, {
      headers: {authorization: localStorage.getItem('token')}
    })
      .then(response => {
        dispatch({
          type: FETCH_MESSAGE,
          payload: response.data.message
        })
      });
  }
}
