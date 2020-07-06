import React, { useState, useStyle, useMemo, useCallback, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useWebSocket, { ReadyState } from 'react-use-websocket';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import findKey from 'lodash/findKey';
import Container from '@material-ui/core/Container';
import { useParams } from "react-router-dom";

import ChatBoxMessageList from './ChatBoxMessageList';
import ChatBoxInput from './ChatBoxInput';
import ChatInput from './ChatInput';
import { fetchMessageHistory, updateMessageHistory } from '../../ducks/messageHistory.duck';

const WEBSOCKET_BASE_URL = process.env.WEBSOCKET_BASE_URL || 'ws:localhost:8001/socket';

const useStyles = makeStyles((theme) => ({
  chatbox: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: "lg",
    display: 'relative',
    overflow: 'auto',
    height: '50vh',
  },
}));


const ChatBoxWindow = ({userId}) => {
  const dispatch = useDispatch();
  const { number:channelId } = useParams();
  const socketUrl = `${WEBSOCKET_BASE_URL}${userId}/channel/${channelId}`;

  useEffect(() => {
    dispatch(fetchMessageHistory(channelId))
  },
  [channelId]);

  const {
    sendJsonMessage,
    lastJsonMessage,
    readyState,
    getWebSocket
  } = useWebSocket(socketUrl, {
    onOpen: () => console.log('opened'),
    shouldReconnect: (closeEvent) => true,
  });

  const connectionStatus = {
    [ReadyState.CONNECTING]: 'Connecting',
    [ReadyState.OPEN]: 'Open',
    [ReadyState.CLOSING]: 'Closing',
    [ReadyState.CLOSED]: 'Closed',
    [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
  }[readyState];

  const handleSendMessage = useCallback((message) => {
    sendJsonMessage(message)
  }, []);

  useEffect(() => {
    dispatch(updateMessageHistory(channelId, lastJsonMessage))
  },
  [lastJsonMessage]);

  const messages = useSelector(state => {
    return state.messageHistory.messages && state.messageHistory.messages[channelId] || [];
  })

  const { chatbox } = useStyles();

  return (
    <Container fixed className={chatbox} maxWidth="lg" spacing={1}>
    <ChatBoxMessageList {...{messages}}/>
    <ChatBoxInput {...{handleSendMessage}}/>
    </Container>
  )
};

export default ChatBoxWindow;
