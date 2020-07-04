import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles((theme) => ({
  chatForm: {
    // display: 'flex',
    // flexWrap: 'wrap',
    // flexDirection: 'column',
    // alignSelf: 'flex-start',
    // height: 'auto',
    // height: `calc(100% - "60px")`,
    // maxHeight: '30px',
    // width: '100%',
    // verticalAlign: 'bottom',
    padding: '40px 0',
    position: 'fixed',
    bottom: 0,
    width: '72ch',
    maxWidth: 'md'
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    verticalAlign: 'bottom',
    width: '100%',
  },
}));

const ChatBoxInput = ({handleSendMessage}) => {
  const { chatForm, margin, textField, button } = useStyles();
  // const { channelId = 1 } = useSelector(state => state.chatChannel);
  // const { fullname = '', userId = 0, gravatar = '', color = 'red'  } = useSelector(state => state.chatUser);
  // const { user:{ fullname='', userId = 0, gravatar='', color = 'red'  } = {} } = useSelector(state => state.chatUser);

  const channelId = useSelector(state => state.chatChannel.channelId || 0);
  const user = useSelector(state => state.chatUser.user || {});
  const { fullname='', userId = 0, gravatar='', color = 'red'  } = user;

  const [message, setMessage] = useState('');

  const handleMessageChange = (e) => {
    e.preventDefault();
    setMessage(e.target.value);
  }
  const handleSendCurrentMessage = (e) => {
    e.preventDefault();
    const messageId = Date.now();
    handleSendMessage({ fullname, gravatar, color, userId, message, messageId });
    setMessage('');
  }
  const handleMouseDown = (e) => { console.log('mouse is down') }//e.preventDefault();}

  return (
    <div className={chatForm}>
      <FormControl className={clsx(margin, textField)} variant="outlined">
        <TextField
            label="Type Message..."
            id="insert-message-to-channel"
            multiline
            rowsMax={4}
            value={message}
            onChange={handleMessageChange}
            className={clsx(margin, textField)}
            InputProps={{
              endAdornment: <InputAdornment position="end">
              <IconButton
                aria-label="toggle message visibility"
                onClick={handleSendCurrentMessage}
                onMouseDown={handleMouseDown}
                edge="end">
                {message ? <SendIcon /> : <SendIcon />}
              </IconButton>
              </InputAdornment>,
            }}/>
      </FormControl>
    </div>
  )
};

export default ChatBoxInput;
