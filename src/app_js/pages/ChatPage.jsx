import React from 'react';


import ChatHeader from '../components/chatbox/ChatHeader';
import ChatSideBar from '../components/chatbox/ChatSideBar';
import { handleToggleState } from '../utilities/hooks/handleToggleState';

const ChatPage = () => {
  const { open, handleOpenToggle, handleCloseToggle } = handleToggleState(false);
  return (
    <div>
      <ChatHeader {...{open, handleOpenToggle}} />
      <ChatSideBar  {...{open, handleCloseToggle}} />
      <div>hello world</div>
    </div>
  )
};

export default ChatPage;
