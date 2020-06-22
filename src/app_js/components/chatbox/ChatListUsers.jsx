import React from 'react';
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
  const users = [
    { username: 'ckalia', avatar: 'https://picsum.photos/64', feeling: "I'm feeling hungry" },
    { username: 'jiglesia', avatar: 'https://picsum.photos/32', feeling: "I'm cheeling out..." },
  ]
  return (
    <List
    aria-labelledby="channels-list"
      subheader={
        <ListSubheader component="h2" className={classes.subtitle} id="channels-list">
          Users
        </ListSubheader>
      }
      className={classes.root}>
      <ListItem button key='chat_bot'>
          <ListItemIcon>
            <Badge color="primary" badgeContent={99} showZero><AndroidIcon /></Badge>
          </ListItemIcon>
          <Link to="/" style={{ textDecoration: 'none' }}>
          <ListItemText primary='ChatBot' /></Link>
      </ListItem>
      <ListItem key='#'><Divider /></ListItem>
    {users.map(({username, avatar, feeling}) => (
      <ListItem alignItems="flex-start" button key={username}>
        <ListItemAvatar><Avatar alt="User Info" src={avatar} /></ListItemAvatar>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <ListItemText
          primary={username}
          secondary={
            <>
            <Typography
              component="span"
              variant="body2"
              className={classes.inline}
              color="textPrimary"
            >{feeling}</Typography>
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
