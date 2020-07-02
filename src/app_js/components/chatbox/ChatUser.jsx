import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  text: {
    margin: '5px',
    fontSize: '2em',
    align: 'center',
    color: theme.palette.primary.dark,
    fontFamily: 'Georgia,sans-serif,auto'
  },
}));

const ChatUser = () => {
  const {fullname} = useSelector(state => state.chatUser.user);
  const classes = useStyles();
  return (
    <Typography component="h5" variant="h5" className={classes.text} gutterBottom>{fullname}</Typography>
  )
};

export default ChatUser;
