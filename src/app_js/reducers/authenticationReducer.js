import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../constants/reducerConstants';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: false, user } : {};

export const authentication = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        user: action.user
      };
    case LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user
      };
    case LOGIN_FAILURE:
    case LOGOUT:
      return {
        loggedIn: false
      };
    default:
      return state
  }
}
