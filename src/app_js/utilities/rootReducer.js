import { combineReducers } from 'redux';
import { chatUserReducer as chatUser } from '../ducks/chatUser.duck';
import { chatUsersReducer as chatUsers } from '../ducks/chatUsers.duck';
import { chatChannelReducer as chatChannel } from '../ducks/chatChannel.duck';

const rootReducer = combineReducers({
  chatUser,
  chatUsers,
  chatChannel
});

export default rootReducer;
