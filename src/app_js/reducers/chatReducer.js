import { SET_USER_REQUEST, SET_USER_SUCCESS, SET_USER_FAILURE } from '../constants/reducerConstants';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { user } : {};

export const chat = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_REQUEST:
      return {};
    case SET_USER_SUCCESS:
      return { user };
    case SET_USER_FAILURE:
      return {};
    default:
      return state
  }
}
