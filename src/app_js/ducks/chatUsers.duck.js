import { apiService } from "../utilities/api";

import { CHAT_USERS_REQUEST, CHAT_USERS_RESET, CHAT_USERS_SUCCESS, CHAT_USERS_FAILURE } from '../constants/reducerConstants';

const initialState = { chatUsers: {}, total: 0};

export function chatUsersReducer(state = initialState, action = {}) {
  switch (action.type) {
    case CHAT_USERS_REQUEST:
      return { };
    case CHAT_USERS_SUCCESS:
      return { users: action.users, total: action.total };
    case CHAT_USERS_FAILURE:
    case CHAT_USERS_RESET:
      return { users: {}, total: 0 };
    default:
      return state;
  }
}

export const loadChatUsers = () => {
  const request = () => ({ type: CHAT_USERS_REQUEST })
  const success = ({users, total}) => ({ type: CHAT_USERS_SUCCESS, users, total  })
  const failure = error => ({ type: CHAT_USERS_FAILURE, error });

  return dispatch => {
    dispatch(request());
    apiService.loadChatUsers()
    .then(payload => {
      dispatch(success(payload));
      // dispatch(alertActions.success('Registration successful'));
    },
    error => {
      console.log('3CALLING')
      dispatch(failure(error.toString()));
      // dispatch(alertActions.error(error.toString()));
    });
  }
}

export const resetChatUsers = () => {
  console.log('CALLING TO RESET')
  return { type: CHAT_USERS_RESET };
}
