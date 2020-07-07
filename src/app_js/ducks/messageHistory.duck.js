import keys from 'lodash/keys';
import {
  CHAT_MESSAGES_LIST_REQUEST,
  CHAT_MESSAGES_LIST_UPDATE,
  CHAT_WEBSOCKETS_CREATE_REQUEST,
  CHAT_MESSAGE_HISTORY_FAILURE_REQUEST
} from '../constants/reducerConstants';

const initialState = { websockets: {}, messages: {} };

export function messageHistoryReducer (state = initialState, action = {}) {
  switch (action.type) {
    case CHAT_WEBSOCKETS_CREATE_REQUEST:
      return { ...state, websockets: { ...{ ...state.websockets, ...action.payload.newSocket } } };
    case CHAT_MESSAGES_LIST_REQUEST:
    case CHAT_MESSAGES_LIST_UPDATE:
      return { ...state, messages: { ...{ ...state.messages, ...action.payload.message } } };
    case CHAT_MESSAGE_HISTORY_FAILURE_REQUEST:
    default:
      return state;
  }
}

const isIdFailure = id => {
  return (!id || id === undefined || id === 'undefined');
};

export const createWebsocket = (id, url) => async (dispatch, getState) => {
  const request = (newSocket) => ({ type: CHAT_WEBSOCKETS_CREATE_REQUEST, payload: { newSocket } });
  if (isIdFailure) return dispatch({ type: CHAT_MESSAGE_HISTORY_FAILURE_REQUEST });

  const { messageHistory: { websockets = {} } } = getState();
  const newSocket = keys(websockets).includes(id.toString()) ? websockets[id] : new WebSocket(url);
  return dispatch(request({ [id]: newSocket }));
};

export const fetchMessageHistory = id => async (dispatch, getState) => {
  const request = (message) => ({ type: CHAT_MESSAGES_LIST_REQUEST, payload: { message } });
  if (isIdFailure) return dispatch({ type: CHAT_MESSAGE_HISTORY_FAILURE_REQUEST });

  const { messageHistory: { messages = {} } } = getState();
  const newMessage = keys(messages).includes(id.toString()) ? messages[id] : [];
  return dispatch(request({ [id]: newMessage }));
};

export const updateMessageHistory = (id, data) => async (dispatch, getState) => {
  const request = (message) => ({ type: CHAT_MESSAGES_LIST_REQUEST, payload: { message } });
  if (isIdFailure) return dispatch({ type: CHAT_MESSAGE_HISTORY_FAILURE_REQUEST });

  const { messageHistory: { messages = {} } } = getState();
  const newMessage = keys(messages).includes(id.toString()) ? [...messages[id], data] : [data];
  return dispatch(request({ [id]: newMessage }));
};
