import React from 'react';
import { Link } from "react-router-dom";
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Badge from '@material-ui/core/Badge';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import ChatIcon from '@material-ui/icons/Chat';
import { makeStyles } from '@material-ui/core/styles';

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
  const list = [
    { title: 'The Gallery', icon: null }, { title: 'Announcements', icon: null }
  ];
  const classes = useStyles();
  return (
    <List
    aria-labelledby="channels-list"
      subheader={
        <ListSubheader component="h2" className={classes.subtitle} id="channels-list">
          Channels
        </ListSubheader>
      }
      className={classes.root}
    >
      <ListItem button key='the_gallery'>
          <ListItemIcon>
            <Badge color="primary" badgeContent={99} showZero><ChatIcon /></Badge>
          </ListItemIcon>
          <Link to="/" style={{ textDecoration: 'none' }}>
          <ListItemText primary='The Gallery' /></Link>
      </ListItem>
      <ListItem button key='announcements'>
        <ListItemIcon>
          <Badge color="primary" badgeContent={88}><AnnouncementIcon /></Badge>
        </ListItemIcon>
        <Link to="/" style={{ textDecoration: 'none' }}><ListItemText primary='Announcements' /></Link>
      </ListItem>
    </List>
  )
};

export default ChatListChannels;
