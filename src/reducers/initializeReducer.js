import { LOGIN_USER } from '../types';

const INITIAL_STATE = { authenticated: false, message: 'NO AUTH', error: ''};

export default function (state = INITIAL_STATE, action) {
  switch(action.type) {
    case LOGIN_USER:
      return {...state, authenticated: true, message: 'Login Success', error: ''};
      break;
    default:
      return state
      break;
  }
}
