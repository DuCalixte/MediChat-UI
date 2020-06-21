import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  text: {
    marginLeft: 10,
    marginTop: 25,
    marginBottom: 100,
    color: theme.palette.primary.dark,
  },
}));

const ChatUser = () => {
  const classes = useStyles();
  return (
    <Link to="/" style={{ textDecoration: 'none' }}>
    <Typography variant="h5" className={classes.text} gutterBottom>Stanley Calixte</Typography>
    </Link>
  )
};

export default ChatUser;
