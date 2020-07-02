import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import AndroidIcon from '@material-ui/icons/Android';
import { Link } from "react-router-dom";
import map from 'lodash/map';

import { loadChatUsers, resetChatUsers } from '../../ducks/chatUsers.duck';

import {
  CHAT_SIDE_BAR_USERS_LABEL,
  CHAT_TITLE_LABEL,
  CHAT_SIGN_IN_LABEL,
  CHAT_SIGN_OUT_LABEL } from '../../constants/chatConstants';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
  subtitle: {
    fontSize: '20px',
  },
}));


const ChatListUsers = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { users = [], total } = useSelector(state => state.chatUsers);
  const isLoggedIn = useSelector(state => state.chatUser.isLoggedIn);

  useEffect(() => {
    console.log('ISLOGGING', isLoggedIn)
    if (isLoggedIn) dispatch(loadChatUsers());
    else dispatch(resetChatUsers());
  }, [isLoggedIn]);
  return (
    <List
    aria-labelledby="channels-list"
      subheader={
        <ListSubheader component="h2" className={classes.subtitle} id="channels-list">
          <Badge
            badgeContent={total}
            anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
            color="primary">{CHAT_SIDE_BAR_USERS_LABEL}</Badge>
        </ListSubheader>
      } className={classes.root}>
    {map(users, ({fullname, gravatar, status, userId}) => (
      <ListItem alignItems="flex-start" button key={userId}>
        <ListItemAvatar><Avatar alt="User Info" src={ gravatar == '' ? `https://picsum.photos/${1 + Math.floor(Math.random() * Math.floor(32))}`: gravatar } /></ListItemAvatar>
        <Link to={`/chat/user/${userId}`} style={{ textDecoration: 'none' }}>
          <ListItemText
          primary={fullname}
          secondary={
            <>
            <Typography
              component="span"
              variant="body2"
              className={classes.inline}
              color="textPrimary"
            >{status}</Typography>
            </>
          }
          />
        </Link>
      </ListItem>
    ))}

    </List>
  )
};

export default ChatListUsers;
