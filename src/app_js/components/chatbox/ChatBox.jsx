import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

import {
  useParams
} from 'react-router-dom';

import ChatBoxContent from './ChatBoxContent';
import ChatBoxHeader from './ChatBoxHeader';

import { CHAT_SIDE_BAR_WIDTH } from '../../constants/chatConstants';
import { loadChatChannel } from '../../ducks/chatChannel.duck';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: '100%'
  },
  content: {
    flexGrow: 3,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: 0
  },
  contentAlt: {
    flexGrow: 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: CHAT_SIDE_BAR_WIDTH
  }
}));

const ChatBox = ({ open }) => {
  const dispatch = useDispatch();
  const { number: channelId } = useParams();

  useEffect(() => {
    dispatch(loadChatChannel(channelId));
  }, [channelId]);

  const { root, content, contentAlt } = useStyles();
  return (
    <main
      className={root, clsx(content, { [contentAlt]: open })}
    >
      <div>
        <ChatBoxHeader />
        <ChatBoxContent />
      </div>
    </main>
  );
};

export default ChatBox;
