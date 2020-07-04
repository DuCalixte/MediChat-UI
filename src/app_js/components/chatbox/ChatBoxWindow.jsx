import React, { useState, useStyle, useMemo, useCallback, useRef, useEffect, shallowEqual } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useWebSocket, { ReadyState } from 'react-use-websocket';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Container from '@material-ui/core/Container';

import ChatBoxMessageList from './ChatBoxMessageList';
import ChatBoxInput from './ChatBoxInput';
import ChatInput from './ChatInput';

const useStyles = makeStyles((theme) => ({
  chatbox: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: "lg",
    // height: "500px",
    display: 'relative',
    overflow: 'auto',
    height: '50vh',
    // minHeight: "100%",
    // display: "flex",
    // flexDirection: "column",
    // margin: "normal"
  },
}));

const ChatBoxWindow = ({userId, channelId}) => {
  const { chatbox } = useStyles();

  const WEBSOCKET_BASE_URL = process.env.WEBSOCKET_BASE_URL || 'ws:localhost:8001/socket';

  console.log('CHANNEL ID', channelId);
  const socketUrl = `${WEBSOCKET_BASE_URL}${userId}/channel/${channelId}`;

  const messageHistory = useRef([]);

  const {
  sendJsonMessage,
  lastJsonMessage,
  readyState,
  getWebSocket
} = useWebSocket(socketUrl, {
  onOpen: () => console.log('opened'),
  //Will attempt to reconnect on all close events, such as server shutting down
  shouldReconnect: (closeEvent) => true,
});


messageHistory.current = useMemo(() => messageHistory.current.concat(lastJsonMessage),[lastJsonMessage]);


  const connectionStatus = {
    [ReadyState.CONNECTING]: 'Connecting',
    [ReadyState.OPEN]: 'Open',
    [ReadyState.CLOSING]: 'Closing',
    [ReadyState.CLOSED]: 'Closed',
    [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
  }[readyState];

  const handleSendMessage = useCallback((message) => {
    console.log('MESSAGE--->', message, messageHistory.current);
    sendJsonMessage(message)
    // sendMessage("Hello")
  }, []);

  return (
    <Container fixed className={chatbox} maxWidth="lg" spacing={1}>
    <ChatBoxMessageList messages={messageHistory.current}/>
    <ChatBoxInput {...{handleSendMessage}}/>
    </Container>
  )
};

export default ChatBoxWindow;
