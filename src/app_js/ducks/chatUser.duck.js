import { apiService } from '../utilities/api';

import {
  CHAT_USER_REQUEST,
  CHAT_USER_LOGOUT,
  CHAT_USER_LOGIN_REQUEST,
  CHAT_USER_LOGIN_SUCCESS,
  CHAT_USER_LOGIN_FAILURE,
  CHAT_USER_REGISTER_REQUEST,
  CHAT_USER_REGISTER_SUCCESS,
  CHAT_USER_REGISTER_FAILURE
} from '../constants/reducerConstants';

const userStorage = JSON.parse(localStorage.getItem('user'));

// const initialState = { isLoggedIn: false, registering: false, user: {} };

// TODO: Below is for test only
const initialState = { isLoggedIn: !!userStorage, registering: false, user: (userStorage || {}) };

export function chatUserReducer (state = initialState, action = {}) {
  switch (action.type) {
    case CHAT_USER_REQUEST:
      return { user: action.user };
    case CHAT_USER_LOGOUT:
      return { isLoggedIn: false, registering: false, user: {} };
    case CHAT_USER_LOGIN_REQUEST:
      return { isLoggedIn: false, registering: false };
    case CHAT_USER_LOGIN_SUCCESS:
      return { isLoggedIn: true, user: action.user };
    case CHAT_USER_LOGIN_FAILURE:
      return { isLoggedIn: false, user: {} };
    case CHAT_USER_REGISTER_REQUEST:
      return { registering: true };
    case CHAT_USER_REGISTER_SUCCESS:
      return { isLoggedIn: true, registering: false, user: action.user };
    case CHAT_USER_REGISTER_FAILURE:
      return { isLoggedIn: false, registering: false, user: {} };
    default:
      return state;
  }
}

export const register = userProfile => {
  const request = () => ({ type: CHAT_USER_REGISTER_REQUEST });
  const success = user => ({ type: CHAT_USER_REGISTER_SUCCESS, user });
  const failure = error => ({ type: CHAT_USER_REGISTER_FAILURE, error });

  return dispatch => {
    dispatch(request());
    dispatch(logout());
    apiService.register(userProfile)
      .then(user => {
        dispatch(success(user));
      },
      error => {
        dispatch(failure(error.toString()));
      });
  };
};

export const logout = () => {
  apiService.logout();
  return { type: CHAT_USER_LOGOUT };
};

export const login = credentials => {
  const request = () => ({ type: CHAT_USER_LOGIN_REQUEST });
  const success = user => ({ type: CHAT_USER_LOGIN_SUCCESS, user });
  const failure = error => ({ type: CHAT_USER_LOGIN_FAILURE, error });

  return dispatch => {
    dispatch(request());
    dispatch(logout());
    apiService.login(credentials)
      .then(user => {
        dispatch(success(user));
      },
      error => {
        dispatch(failure(error.toString()));
      });
  };
};
