import React from 'react';

import ChatHeader from '../components/chatbox/ChatHeader';
import ChatSideBar from '../components/chatbox/ChatSideBar';
import ChatBox from '../components/chatbox/ChatBox';
import ChatWelcome from '../components/chatbox/ChatWelcome';
import { useTheme } from '@material-ui/core/styles';
import { handleToggleState } from '../utilities/hooks/handleToggleState';

import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

const ChatPage = () => {
  const { root } = useTheme();
  const { open, handleOpenToggle, handleCloseToggle } = handleToggleState(false);
  return (
    <div className={root}>
      <ChatHeader {...{ open, handleOpenToggle }} />
      <ChatSideBar {...{ open, handleCloseToggle }} />
      <Switch>
        <Route exact path='/'>
          <Redirect to='/chat' />
        </Route>
        <Route exact path='/chat'><ChatWelcome {...{ open }} /></Route>
        <Route path='/chat/user/:number'>
          <ChatBox {...{ open }} />
        </Route>
        <Route path='/chat/channel/:number'>
          <ChatBox {...{ open }} />
        </Route>
      </Switch>
    </div>
  );
};

export default ChatPage;
