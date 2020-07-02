import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import map from 'lodash/map';
import compact from 'lodash/compact';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import ImageIcon from '@material-ui/icons/Image';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    minHeight:'100%',
    maxWidth: 'lg',
    height: '100vh',
    verticalAlign: 'top',
    backgroundColor: theme.palette.background.paper,
  },
  list: {
    maxWidth: 'sm'
  },
  listItem: {
    maxWidth: '72ch',
    backgroundColor: '#cf2302',
    margin: '5px 0px 5px 10px'
  },
  inline: {
    display: 'inline',
  },
}));

const ChatBoxMessageList = ({messages}) => {
  // console.log('MESSAGES', map(messages, (data) => data))
  const pick = array => array[Math.floor(array.length * Math.random())];
  const { container, list, listItem, inline } = useStyles();
  // const messagez = [
  //   { fullname: 'Cool Moody', color: '#cdfea0', gravatar: 'https://picsum.photos/64', message: "I'm feeling hungry", messageId: 1, userId: 1 },
  //   { fullname: 'Juan Pablo', color: '#abcd04', gravatar: 'https://picsum.photos/32', message: "I'm cheeling out...", messageId: 2, userId: 2 },
  //   { fullname: 'Cool Moody', color: '#cdfea0', gravatar: 'https://picsum.photos/64', message: "Great, I'll talk to you later", messageId: 3, userId: 1 },
  // ]

  return (
    <div>
    <CssBaseline />
    <Container fixed className={container}>
      <List className={list}>
      {map(compact(messages), ({fullname, gravatar, color, message, messageId} = {}) => (
        <ListItem key={messageId} className={listItem} alignItems="flex-start" style={{backgroundColor: color, marginLeft: pick([12,24,36]) + 'px'}}>
        <ListItemAvatar><Avatar alt={fullname} src={gravatar} /></ListItemAvatar>
        <ListItemText
          primary={fullname}
          secondary={<span>{message}</span>}
        />
      </ListItem>
    ))}
      </List>
    </Container>
    </div>
  )
};

export default ChatBoxMessageList;
