import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Collapse from '@material-ui/core/Collapse';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import AndroidIcon from '@material-ui/icons/Android';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
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
  header: {
    fontSize: '1.3em',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  headerPrimary: {
    color: theme.palette.common.grey,
  },
  subtitle: {
    fontFamily: 'georgia,bookman,sans-serif,auto'
  },
  badge: {
    color: theme.palette.primary.success
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));


const ChatListUsers = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  // const { users = [], total } = useSelector(state => state.chatUsers);
  const users = useSelector(state => state.chatUsers.users || []);
  const total = useSelector(state => state.chatUsers.total || 0);
  const isLoggedIn = useSelector(state => state.chatUser.isLoggedIn);

  useEffect(() => {
    console.log('ISLOGGING', isLoggedIn)
    if (isLoggedIn) dispatch(loadChatUsers());
    else dispatch(resetChatUsers());
  }, [isLoggedIn]);

  const [open, setOpen] = useState(true);
  const handleClick = () => setOpen(!open);
  const handleSection = (e, userId) => {
    e.preventDefault()
    console.log('E',e,'C',c);
  }
  const {header, headerPrimary, subtitle, nested, inline } = useStyles();

  return(
    <>
    <ListItem className={header} key="users" button onClick={handleClick}>
      <ListItemText className={headerPrimary}>
      <Badge badgeContent={total} anchorOrigin={{ vertical: 'top', horizontal: 'left' }} color="primary">
        <Typography className={subtitle} component="h5" variant="h5" gutterBottom>{CHAT_SIDE_BAR_USERS_LABEL}</Typography>
      </Badge>
      </ListItemText>
      {open ? <ExpandLess /> : <ExpandMore />}
    </ListItem>
    <Collapse in={open} timeout="auto" unmountOnExit>
    {map(users, ({fullname, gravatar, status, userId}) => (
      <ListItem alignItems="flex-start" button key={userId} onClick={(e) => handleSection(e, userId)}>
        <ListItemAvatar><Avatar alt={fullname} src={ gravatar == '' ? `https://picsum.photos/${1 + Math.floor(Math.random() * Math.floor(32))}`: gravatar } /></ListItemAvatar>
          <ListItemText
          primary={fullname}
          secondary={
            <>
            <Typography
              component="span"
              variant="body2"
              className={inline}
              color="textPrimary"
            >{status}</Typography>
            </>
          }
          />
      </ListItem>
    ))}
    </Collapse>
    </>
  )

  // return (
  //   <List
  //   aria-labelledby="channels-list"
  //     subheader={
  //       <ListSubheader component="h2" className={classes.subtitle} id="channels-list">
  //         <Badge
  //           badgeContent={total}
  //           anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
  //           color="primary">{CHAT_SIDE_BAR_USERS_LABEL}</Badge>
  //       </ListSubheader>
  //     } className={classes.root}>
  //   {map(users, ({fullname, gravatar, status, userId}) => (
  //     <ListItem alignItems="flex-start" button key={userId}>
  //       <ListItemAvatar><Avatar alt="User Info" src={ gravatar == '' ? `https://picsum.photos/${1 + Math.floor(Math.random() * Math.floor(32))}`: gravatar } /></ListItemAvatar>
  //       <Link to={`/chat/user/${userId}`} style={{ textDecoration: 'none' }}>
  //         <ListItemText
  //         primary={fullname}
  //         secondary={
  //           <>
  //           <Typography
  //             component="span"
  //             variant="body2"
  //             className={classes.inline}
  //             color="textPrimary"
  //           >{status}</Typography>
  //           </>
  //         }
  //         />
  //       </Link>
  //     </ListItem>
  //   ))}
  //
  //   </List>
  // )
};

export default ChatListUsers;
