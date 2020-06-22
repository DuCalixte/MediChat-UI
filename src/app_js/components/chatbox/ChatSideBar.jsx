import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import ChatUser from './ChatUser';
import ChatListChannels from './ChatListChannels';
import ChatListUsers from './ChatListUsers';

import { CHAT_SIDE_BAR_WIDTH } from '../../constants/chatConstants';



const useStyles = makeStyles((theme) => ({
  hide: {
    display: 'none',
  },
  drawer: {
    width: CHAT_SIDE_BAR_WIDTH,
    flexShrink: 0,
  },
  drawerPaper: {
    width: CHAT_SIDE_BAR_WIDTH,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
}));

const ChatSideBar = ({ open, handleCloseToggle }) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleCloseToggle}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <ChatUser />
        <Divider />
        <ChatListChannels />
        <Divider />
        <ChatListUsers />
      </Drawer>
  )
};

export default ChatSideBar;
