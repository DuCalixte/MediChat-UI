import React from 'react';
import { useDispatch } from 'react-redux';

import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import ScreenLockLandscapeOutlined from '@material-ui/icons/ScreenLockLandscapeOutlined';

import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { login as loginToServer } from '../../ducks/chatUser.duck';

import {
  CHAT_APP_REGISTER_LINK,
  CHAT_LOGIN_TITLE_LABEL,
  CHAT_LOGIN_HAVE_CONTENT_LABEL,
  CHAT_EMAIL_LABEL,
  CHAT_PASSWORD_LABEL,
  CHAT_LOGIN_BUTTON_LABEL
} from '../../constants/chatConstants.js';

const Login = ({ classes }) => {
  const { handleSubmit, register, errors } = useForm();
  const dispatch = useDispatch();
  const onSubmit = credentials => dispatch(loginToServer(credentials));

  return (
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        <ScreenLockLandscapeOutlined />
      </Avatar>
      <Typography component='h1' variant='h5'>{CHAT_LOGIN_TITLE_LABEL}</Typography>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.container}>
        <TextField
          name='email'
          type='email'
          autoComplete='email'
          inputRef={register}
          label={CHAT_EMAIL_LABEL}
          className={classes.textField}
          margin='normal'
          variant='outlined'
          required
          fullWidth
          autoFocus
          error={!!errors.email}
        />
        <TextField
          name='password'
          type='password'
          inputRef={register}
          label={CHAT_PASSWORD_LABEL}
          className={classes.textField}
          margin='normal'
          variant='outlined'
          fullWidth
          autoComplete='password'
          error={!!errors.password}
        />
        <Button className={classes.submit} type='submit' variant='contained' aria-label='delete' color='primary'>{CHAT_LOGIN_BUTTON_LABEL}</Button>
      </form>
      <Grid container justify='flex-start' style={{ marginTop: '20px' }}>
        <Grid item xs><Link to={CHAT_APP_REGISTER_LINK}>{CHAT_LOGIN_HAVE_CONTENT_LABEL}</Link></Grid>
      </Grid>
    </div>
  );
};

export default Login;
