import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';

import {
  useLocation, useParams
} from "react-router-dom";

import ChatBoxContent from './ChatBoxContent';
import ChatInput from './ChatInput';
import ChatBoxHeader from './ChatBoxHeader';

import { CHAT_SIDE_BAR_WIDTH, CHAT_INPUT_FORM_MAX_HEIGHT } from '../../constants/chatConstants';
import { loadChatChannel } from '../../ducks/chatChannel.duck';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: '100%',
  },
  content: {
    flexGrow: 3,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: 0,
  },
  contentAlt: {
    flexGrow: 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: CHAT_SIDE_BAR_WIDTH,
  },
}));

const ChatBox = ({open}) => {
  console.log('LOCATUIB', useLocation(), useParams())
  const dispatch = useDispatch();
  const { number:channelId } = useParams();
  useEffect(() => {
    dispatch(loadChatChannel(channelId));
  }, [channelId])
  const classes = useStyles();
  return (
    <main
        className={classes.root, clsx(classes.content, {
          [classes.contentAlt]: open,
        })}
      >
        <div>
          <ChatBoxHeader />
          <ChatBoxContent id={channelId} />
        </div>
    </main>
  );
};

export default ChatBox;
