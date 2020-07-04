import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListSubheader from '@material-ui/core/ListSubheader';
import { red } from '@material-ui/core/colors';
import map from 'lodash/map';

import { Link } from "react-router-dom";
import { CHAT_INFO_CHANNEL_USERS_LABEL } from '../../constants/chatConstants';

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: "sm",
    margin: "normal"
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  header: {
    fontFamily: 'book antigua,sans-serif,auto',
    fontSize: '2.1em'
  },
  headerTitle: {
    fontFamily: 'bookman,garamond,candara,sans-serif,auto',
    fontSize: '0.9em'
  },
  content: {
    // backgroundColor: red[500],
  },
  list: {
    // backgroundColor: red[500],
  },
  listTitle: {
    fontSize: "2em",
    marginBottom: "5px",
    fontFamily: "cursive,sans-serif,auto"
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const ChatBoxInfomation = () => {
  const users = useSelector(state => state.chatChannel.users || []);
  const user = useSelector(state => state.chatUser.user || {});
  const { nickname='', gravatar='', status='' } = user;
  const {card, header, content, list, avatar, listTitle, headerTitle } = useStyles();

  console.log('USERS', users);

  return (
    <Card className={card} elevation={0}>
      <CardHeader className={header}
        avatar={<Avatar alt={nickname} src={gravatar} />}
        title={<Typography className={headerTitle} component="h5" variant="h5" align="left" color="textSecondary" gutterBottom>
          {nickname}
        </Typography>}
        subheader={status}
      />
      <CardContent className={content}>
      <Typography className={listTitle} component="h3" variant="h3" align="left" color="textPrimary" gutterBottom>
        {CHAT_INFO_CHANNEL_USERS_LABEL}
      </Typography>
      { map(users, ({nickname, gravatar}) => (
        <ListItem alignItems="flex-start" button key={nickname}>
          <ListItemAvatar><Avatar alt={nickname} src={gravatar} /></ListItemAvatar>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <ListItemText primary={nickname} />
          </Link>
        </ListItem>
      ))}
      </CardContent>
    </Card>
  )
};

export default ChatBoxInfomation;
