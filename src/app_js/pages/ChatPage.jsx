import React from 'react';

import ChatHeader from '../components/chatbox/ChatHeader';
import ChatSideBar from '../components/chatbox/ChatSideBar';
import ChatBox from '../components/chatbox/ChatBox';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { handleToggleState } from '../utilities/hooks/handleToggleState';

const useStyles = makeStyles( themes => ({
  root: {
    display: 'flex',
  }
}))
const ChatPage = () => {
  const classes = useTheme();
  const { open, handleOpenToggle, handleCloseToggle } = handleToggleState(false);
  return (
    <div className={classes.root}>
      <ChatHeader {...{open, handleOpenToggle}} />
      <ChatSideBar  {...{open, handleCloseToggle}} />
      <ChatBox {...{open}} />
    </div>
  )
};

export default ChatPage;
