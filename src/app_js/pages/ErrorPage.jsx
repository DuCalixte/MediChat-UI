import React from 'react';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Login from '../components/logins/Login';
import Register from '../components/logins/Register';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { background } from '../utilities/img/404background';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '120vh',
  },
  image: {
    backgroundImage: `url(data:image/gif;base64,${background})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[1024],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(1, 1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }
}));

const ErrorPage = () => {
  const classes = useStyles();
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={12} md={12} className={classes.image} />
    </Grid>
  )
};

export default ErrorPage;
