import { apiService } from '../utilities/api';

import {
  CHAT_CHANNEL_REQUEST,
  CHAT_CHANNEL_SUCCESS,
  CHAT_CHANNEL_FAILURE
} from '../constants/reducerConstants';

const initialState = { name: '', description: '', chatBot: null, isPrivate: null, users: {}, channelId: 0 };

export function chatChannelReducer (state = initialState, action = {}) {
  switch (action.type) {
    case CHAT_CHANNEL_REQUEST:
      return { };
    case CHAT_CHANNEL_SUCCESS:
      const { name, description, chatBot, isPrivate, users, channelId } = action;
      return { name, description, chatBot, isPrivate, users, channelId };
    case CHAT_CHANNEL_FAILURE:
      return initialState;
    default:
      return state;
  }
}

export const loadChatChannel = id => {
  const request = () => ({ type: CHAT_CHANNEL_REQUEST });
  const success = ({ name, description, chatBot, isPrivate, users, channelId }) => ({ type: CHAT_CHANNEL_SUCCESS, name, description, chatBot, isPrivate, users, channelId });
  const failure = error => ({ type: CHAT_CHANNEL_FAILURE, error });

  return dispatch => {
    dispatch(request());
    apiService.loadChatChannel(id)
      .then(payload => {
        dispatch(success(payload));
      },
      error => {
        console.log('ERROR CALLING'); // TODO: REMOVE - DEBUGGING ONLY
        dispatch(failure(error.toString()));
      });
  };
};
