import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';

import ChatContent from './ChatContent';
import ChatInput from './ChatInput';

import { CHAT_SIDE_BAR_WIDTH, CHAT_INPUT_FORM_MAX_HEIGHT } from '../../constants/chatConstants';

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
  const classes = useStyles();
  return (
    <main
        className={classes.root, clsx(classes.content, {
          [classes.contentAlt]: open,
        })}
      >
        <div>
          <ChatContent />
          <ChatInput />
        </div>
    </main>
  )
};

export default ChatBox;
