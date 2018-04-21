import axios from 'axios';
import { LOGIN_USER } from '../types';
// import config from '../../config.json';
//
// const API_URL = config.API_URL;
// const AUTH_URL = config.AUTH_URL;

export function errorHandler(dispatch, error, type) {
  let errorMessage = '';

  console.log("In errorhandler");
  if(error.data.error) {
    errorMessage = error.data.error;
  } else if(error.data){
    errorMessage = error.data;
  } else {
    errorMessage = error;
  }

  if(error.status === 401 || error.status === 400) {
    dispatch({
      type: type,
      payload: 'You are not authorized to do this. Please login and try again.'
    });
    logoutUser();
  } else {
    dispatch({
      type: type,
      payload: errorMessage
    });
  }
}

export function loginUser(userInfo) {
  console.log('ACTION - loginUser', userInfo);
  return function(dispatch) {
    // axios.post(`${AUTH_URL}/register`, {firstname: userInfo.firstname, lastname: userInfo.lastname,
    //   email: userInfo.email, password: userInfo.password })
    // .then(response => {
    //   console.log('Register Response: ', response);
    //   if (response.data.token) {
    //     cookie.save('token', response.data.token, { path: '/' });
    //     dispatch({ type: REGISTER_USER });
    //     window.location.href = '/dashboard';
    //   } else{
    //   }
    // })
    // .catch((error) => {
    //   console.log(error);
    //   errorHandler(dispatch, error.response, AUTH_ERROR)
    // });
    dispatch({ type: LOGIN_USER });
  }
}
