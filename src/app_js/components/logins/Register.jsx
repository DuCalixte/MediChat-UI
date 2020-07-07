import React from 'react';
import { useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';

import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import LockOpenTwoTone from '@material-ui/icons/LockOpenTwoTone';

import { useForm } from 'react-hook-form';
import { register as registerToAPI } from '../../ducks/chatUser.duck';

import {
  CHAT_APP_LOGIN_LINK,
  CHAT_REGISTER_TITLE_LABEL,
  CHAT_REGISTER_HAVE_CONTENT_LABEL,
  CHAT_LASTNAME_LABEL,
  CHAT_FIRSTNAME_LABEL,
  CHAT_NICKNAME_LABEL,
  CHAT_EMAIL_LABEL,
  CHAT_PASSWORD_LABEL,
  CHAT_REGISTER_BUTTON_LABEL
} from '../../constants/chatConstants.js';

const Register = ({ classes }) => {
  const { handleSubmit, register, errors } = useForm();
  const dispatch = useDispatch();

  const onSubmit = userProfile => dispatch(registerToAPI(userProfile));

  return (
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        <LockOpenTwoTone />
      </Avatar>
      <Typography component='h1' variant='h5'>{CHAT_REGISTER_TITLE_LABEL}</Typography>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.container}>
        <TextField
          name='firstname'
          type='firstname'
          autoComplete='fname'
          inputRef={register}
          label={CHAT_FIRSTNAME_LABEL}
          className={classes.textField}
          margin='normal'
          variant='outlined'
          required
          fullWidth
          error={!!errors.firstname}
        />
        <TextField
          name='lastname'
          type='lastname'
          autoComplete='lname'
          inputRef={register}
          label={CHAT_LASTNAME_LABEL}
          className={classes.textField}
          margin='normal'
          variant='outlined'
          required
          fullWidth
        />
        <TextField
          name='nickname'
          type='nickname'
          inputRef={register}
          label={CHAT_NICKNAME_LABEL}
          className={classes.textField}
          margin='normal'
          variant='outlined'
          required
          fullWidth
          error={!!errors.nickname}
        />
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
          required
          autoComplete='password'
          inputProps={{ minLength: 8, maxLength: 25 }}
          helperText='Password is required and must be at least 8 characters'
        />
        <Button
          className={classes.submit}
          type='submit'
          variant='contained'
          aria-label='delete' color='primary'
        >{CHAT_REGISTER_BUTTON_LABEL}
        </Button>
      </form>
      <Grid container justify='flex-start' style={{ marginTop: '20px' }}>
        <Grid item xs><Link to={CHAT_APP_LOGIN_LINK}>{CHAT_REGISTER_HAVE_CONTENT_LABEL}</Link></Grid>
      </Grid>
    </div>
  );
};

export default Register;
