import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    alignSelf: 'flex-end',
    height: 'auto',
    maxHeight: '100px'
  },
  margin: {
    margin: theme.spacing(1)
  },
  withoutLabel: {
    marginTop: theme.spacing(3)
  },
  textField: {
    width: '60%'
  }
}));

const ChatInput = () => {
  const classes = useStyles();
  const [message, setMessage] = useState('');
  const handleMessageChange = (e) => {
    e.preventDefault();
    setMessage(e.target.value);
  };
  const handleSendMessage = (e) => {
    console.log(e, 'message:', message);
    e.preventDefault();
    setMessage('');
  };
  const handleMouseDown = (e) => { };
  return (
    <div className={classes.root}>
      <FormControl className={clsx(classes.margin, classes.textField)} variant='outlined'>
        <InputLabel htmlFor='outlined-adornment-message'>Text to Gallery</InputLabel>
        <OutlinedInput
          id='filled-adornment-message'
          type='text'
          value={message}
          onChange={handleMessageChange}
          endAdornment={
            <InputAdornment position='end'>
              <IconButton
                aria-label='toggle password visibility'
                onClick={handleSendMessage}
                onMouseDown={handleMouseDown}
                edge='end'
              >
                {message ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
          labelWidth={200}
        />
      </FormControl>
    </div>
  );
};

export default ChatInput;
