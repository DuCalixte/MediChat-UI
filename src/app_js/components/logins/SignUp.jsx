import React from 'react';

import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import LockOpenTwoTone from '@material-ui/icons/LockOpenTwoTone';
// import Link from '@material-ui/core/Link';
import { Link } from "react-router-dom";

const SignUp = ({classes}) => {
  return (
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        <LockOpenTwoTone />
      </Avatar>
      <Typography component="h1" variant="h5">Signup to Chat</Typography>
      <form className={classes.form} noValidate>
      <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
            />
      <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >Sign up</Button>
      </form>
      <Grid container justify="flex-start" style={{ marginTop: '20px' }}>
        <Grid item xs><Link to="login">{"Already have an account? Sign in"}</Link></Grid>
      </Grid>
      </div>
  )
};

export default SignUp;
