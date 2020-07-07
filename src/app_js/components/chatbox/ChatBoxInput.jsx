import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles((theme) => ({
  chatForm: {
    padding: '40px 0',
    position: 'fixed',
    bottom: 0,
    width: '72ch',
    maxWidth: 'md'
  },
  margin: {
    margin: theme.spacing(1)
  },
  withoutLabel: {
    marginTop: theme.spacing(3)
  },
  textField: {
    verticalAlign: 'bottom',
    width: '100%'
  }
}));

const ChatBoxInput = ({ handleSendMessage }) => {
  const { chatForm, margin, textField } = useStyles();

  const user = useSelector(state => state.chatUser.user || {});
  const { fullname: name = '', userId = 0, gravatar = '', color = 'red' } = user;

  const [message, setMessage] = useState('');

  const handleMessageChange = (e) => {
    e.preventDefault();
    setMessage(e.target.value);
  };
  const handleSendCurrentMessage = (e) => {
    e.preventDefault();
    const messageId = Date.now();
    handleSendMessage({ name, gravatar, color, userId, message, messageId });
    setMessage('');
  };
  const handleMouseDown = (e) => { console.log('mouse is down'); };// e.preventDefault();}

  return (
    <div className={chatForm}>
      <FormControl className={clsx(margin, textField)} variant='outlined'>
        <TextField
          label='Type Message...'
          id='insert-message-to-channel'
          multiline
          rowsMax={4}
          value={message}
          onChange={handleMessageChange}
          className={clsx(margin, textField)}
          InputProps={{
            endAdornment: <InputAdornment position='end'>
              <IconButton
                aria-label='toggle message visibility'
                onClick={handleSendCurrentMessage}
                onMouseDown={handleMouseDown}
                edge='end'
              >
                {message ? <SendIcon /> : <SendIcon />}
              </IconButton>
            </InputAdornment>
          }}
        />
      </FormControl>
    </div>
  );
};

export default ChatBoxInput;
