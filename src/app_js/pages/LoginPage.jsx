import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Login from '../components/logins/Login';
import Register from '../components/logins/Register';
import {
  Switch,
  Route,
  useHistory
} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { background } from '../utilities/img/background';

import { APP_LOGIN_URI, APP_REGISTER_URI, APP_HOME_URI } from '../constants/appConstants';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh'
  },
  image: {
    backgroundImage: `url(data:image/gif;base64,${background})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.light
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const LoginPage = () => {
  const classes = useStyles();
  const history = useHistory();
  const isLoggedIn = useSelector(state => state.chatUser.isLoggedIn);

  useEffect(() => {
    if (isLoggedIn) history.push(APP_HOME_URI);
  }, [isLoggedIn]);
  return (
    <Grid container component='main' className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Switch>
          <Route path={APP_LOGIN_URI}>
            <Login classes={classes} />
          </Route>
          <Route path={APP_REGISTER_URI}>
            <Register classes={classes} />
          </Route>
        </Switch>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
