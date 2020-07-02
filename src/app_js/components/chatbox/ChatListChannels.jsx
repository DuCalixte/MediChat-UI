import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Badge from '@material-ui/core/Badge';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import ChatIcon from '@material-ui/icons/Chat';
import AndroidIcon from '@material-ui/icons/Android';
import { makeStyles } from '@material-ui/core/styles';

import { CHAT_SIDE_BAR_CHANNELS_LABEL } from '../../constants/chatConstants';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 240,
    backgroundColor: theme.palette.background.paper,
  },
  subtitle: {
    fontSize: '20px',
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  badge: {
    color: theme.palette.primary.success
  }
}));

const ChatListChannels = () => {
  const channelList = [];
  const { channels = [] } = useSelector(state => state.chatUser.user);
  const user = useSelector(state => state.chatUser.user);
  console.log('CHANNELS', channels, user);
  // const isLoggedIn = useSelector(state => state.chatUser.isLoggedIn);
  const list = [
    { title: 'The Gallery', icon: null }, { title: 'Announcements', icon: null }
  ];
  const classes = useStyles();
  return (
    <List
    aria-labelledby="channels-list"
      subheader={
        <ListSubheader component="h2" className={classes.subtitle} id="channels-list">{CHAT_SIDE_BAR_CHANNELS_LABEL}
        </ListSubheader>
      }
      className={classes.root}>
      {channels.map(({name, description, chatBot, channelId}) => (
        <ListItem button key={channelId}>
          <ListItemIcon>
            <Badge color="primary" badgeContent={1}>{chatBot ? <AndroidIcon /> : <ChatIcon />}</Badge>
          </ListItemIcon>
          <Link to={`/chat/channel/${channelId}`} style={{ textDecoration: 'none' }}>
          <ListItemText primary={name} alt={description} /></Link>
        </ListItem>
      ))}
    </List>
  )
};

export default ChatListChannels;
