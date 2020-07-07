import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';

const useStyles = makeStyles((theme) => ({
  text: {
    margin: '5px',
    fontSize: '2em',
    align: 'center',
    color: theme.palette.primary.dark,
    fontFamily: 'Georgia,sans-serif,auto'
  }
}));

const ChatUser = () => {
  const user = useSelector(state => state.chatUser.user || {});
  const { userId, fullname } = user;
  const classes = useStyles();
  return (
    <ListItem key={userId}>
      <Typography component='h5' variant='h5' className={classes.text} gutterBottom>{fullname}</Typography>
    </ListItem>
  );
};

export default ChatUser;
