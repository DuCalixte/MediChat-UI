import React from 'react';
import { useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import ChatBoxInfomation from './ChatBoxInfomation';
import ChatBoxWindow from './ChatBoxWindow';

const ChatBoxContent = () => {
  const userId = useSelector(state => state.chatUser.user.userId || 0);
  const channelId = useSelector(state => state.chatChannel.channelId || 0);

  return (
    <Grid container spacing={1}>
      <Grid item xs={9}>
        <ChatBoxWindow {...{ userId, channelId }} />
      </Grid>
      <Grid item xs={3}>
        <ChatBoxInfomation />
      </Grid>
    </Grid>
  );
};

export default ChatBoxContent;
