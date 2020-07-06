import findKey from 'lodash/findKey';
import keys from 'lodash/keys'
import {
  CHAT_MESSAGES_LIST_REQUEST,
  CHAT_MESSAGES_LIST_UPDATE,
  CHAT_WEBSOCKETS_CREATE_REQUEST,
  CHAT_WEBSOCKETS_FETCH_REQUEST,
  CHAT_MESSAGE_HISTORY_FAILURE_REQUEST,
} from '../constants/reducerConstants';


const initialState = { websockets: {}, messages: {} };

export function messageHistoryReducer(state = initialState, action = {}) {
  let id;
  let newMessage;
  switch (action.type) {
    case CHAT_WEBSOCKETS_CREATE_REQUEST:
      return { websockets: { ...state.websockets, ...action.payload.newSocket } }
    case CHAT_MESSAGES_LIST_REQUEST:
    case CHAT_MESSAGES_LIST_UPDATE: {
      // debugger;
      return { messages: {...{ ...state.messages, ...action.payload.message }} }
    }
      // return { messages: { ...state.messages, ...action.payload.message } }
    // case CHAT_MESSAGES_LIST_REQUEST:
    //   id = action.payload.id;
    //   console.log('ACTION', action)
    //   console.log('==> BEFORE', state)
    //   newMessage =  keys(state.messages).includes(id.toString()) ? state.messages[id] : [];
    //   // newMessage = findKey(state.messages, id) ? state.messages[id] : [];
    //   console.log('==>AFTER', id, { ...state.messages, [id]: newMessage })
    //   // debugger;
    //   return { messages: { ...state.messages, [id]: newMessage } }
    // case CHAT_MESSAGES_LIST_UPDATE:
    //   id = action.payload.id;
    //   const data = action.payload.data;
    //   // console.log('BEFORE', state, 'IS FOUND', findKey(state.messages, id), 'DATA', [state.messages[id], data])
    //   newMessage =  keys(state.messages).includes(id.toString()) ? [...state.messages[id], data] : [data];
    //   // console.log('AFTER', id, { ...state.messages, [id]: newMessage })
    //   // return { state.messages, [id]: newMessage }
    //   // debugger;
    //   console.log('KATA', keys(state.messages));
    //   console.log('FATA', findKey(state.messages, "1") );
    //   console.log('SATA', {...state.messages});
    //   console.log('DATA', data);
    //   console.log('GATA', newMessage);
    //   console.log('DATA', state.messages[id]);
    //   // console.log('KATA', [...state.messages[id]]);
    //   // console.log('LATA', [...state.messages[id], data]);
    //   return { messages: { ...state.messages, [id]: newMessage } }
    case CHAT_MESSAGE_HISTORY_FAILURE_REQUEST:
    default:
      return state;
  }
}

const isIdFailure = id => {
  return (!!!id || id === undefined || id === 'undefined');
}

export const createWebsocket = (id, url) => async (dispatch, getState) => {
  const request = (newSocket) => ({ type: CHAT_MESSAGES_LIST_REQUEST, payload: {newSocket} })
  console.log('====================================', getState())
  const { messageHistory: { websockets = {}}} = getState();
  let newSocket = new WebSocket();
  if (websockets.includes(id.toString())) {
    if (websockets[id] !== null) newSocket = websockets[id];
  }
  return dispatch(request({[id]: newSocket}));
}

// export const fetchWebsockets = () => async (dispatch, getState) => {
//   const request = (newSocket) => ({ type: CHAT_MESSAGES_LIST_REQUEST, payload: {newSocket} })
//   const { messageHistory: { websockets = {}}} = getState();
//   let newSocket = new WebSocket();
//   if (websockets.includes(id.toString()) {
//     if (websockets[id] !== null) newSocket = websockets[id];
//   }
//   return dispatch(request({[id]: newSocket}));
// }

// export const createWebsocket = (id, url) => {
//   const request = (id) => ({ type: CHAT_MESSAGES_LIST_REQUEST, payload: {id, url} })
//   if(isIdFailure(id)) return dispatch({ type: CHAT_MESSAGE_HISTORY_FAILURE_REQUEST });
//   return dispatch(request(id, url))
// }

export const fetchMessageHistory = id => async (dispatch, getState) => {
  // debugger;
  const request = (message) => ({ type: CHAT_MESSAGES_LIST_REQUEST, payload: {message} })
  const { messageHistory: { messages = {}}} = getState();
  const newMessage =  keys(messages).includes(id.toString()) ? messages[id] : [];
  return dispatch(request({[id]: newMessage}))
}


// export const fetchMessageHistory = id => {
//   const request = (id) => ({ type: CHAT_MESSAGES_LIST_REQUEST, payload: id })
//   if(isIdFailure(id)) return dispatch({ type: CHAT_MESSAGE_HISTORY_FAILURE_REQUEST });
//   return dispatch => {
//     dispatch(request({id}));
//   }
// }

export const updateMessageHistory = (id, data) => async (dispatch, getState) => {
  // debugger;
  const request = (message) => ({ type: CHAT_MESSAGES_LIST_REQUEST, payload: {message} })
  const { messageHistory: { messages = {}}} = getState();
  const newMessage =  keys(messages).includes(id.toString()) ? [...messages[id], data] : [data];
  // debugger;
  return dispatch(request({[id]: newMessage}))
}

// export const updateMessageHistory = (id, data) => {
//   const update = (id, data) => ({ type: CHAT_MESSAGES_LIST_UPDATE, payload: { id, data } })
//   if(isIdFailure(id)) return dispatch({ type: CHAT_MESSAGE_HISTORY_FAILURE_REQUEST });
//   console.log('UPDSATING')
//   return dispatch => {
//     dispatch(update(id, data));
//   }
// }
