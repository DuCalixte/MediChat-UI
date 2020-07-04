import React from 'react';

import ChatHeader from '../components/chatbox/ChatHeader';
import ChatSideBar from '../components/chatbox/ChatSideBar';
import ChatBox from '../components/chatbox/ChatBox';
import ChatWelcome from '../components/chatbox/ChatWelcome';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { handleToggleState } from '../utilities/hooks/handleToggleState';

import {
  Switch,
  Route,
  Link,
  Redirect,
  useParams,
  useRouteMatch
} from "react-router-dom";

const useStyles = makeStyles( themes => ({
  root: {
    display: 'flex',
  }
}))
const ChatPage = () => {
  const classes = useTheme();
  const { path, url } = useRouteMatch();
  const { open, handleOpenToggle, handleCloseToggle } = handleToggleState(false);
  return (
    <div className={classes.root}>
      <ChatHeader {...{open, handleOpenToggle}} />
      <ChatSideBar  {...{open, handleCloseToggle}} />
      <Switch>
          <Route exact path="/">
            <Redirect to="/chat" />
          </Route>
          <Route exact path="/chat"><ChatWelcome {...{open}} /></Route>
          <Route path="/chat/user/:number">
            <ChatBox {...{open}} />
          </Route>
          <Route path="/chat/channel/:number">
            <ChatBox {...{open}} />
          </Route>
        </Switch>
    </div>
  )
};

export default ChatPage;
