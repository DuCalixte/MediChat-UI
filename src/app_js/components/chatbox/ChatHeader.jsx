import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import { fade, makeStyles } from '@material-ui/core/styles';
import values from 'lodash/values';
import compact from 'lodash/compact';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import GitHubIcon from '@material-ui/icons/GitHub';
import NotificationsIcon from '@material-ui/icons/Notifications';

import { logout } from '../../ducks/chatUser.duck';
import { background } from '../../utilities/img/navBackground';
import { useHistory } from 'react-router-dom';
import { fetchMessageHistory } from '../../ducks/messageHistory.duck';

import {
  CHAT_SIDE_BAR_WIDTH,
  CHAT_TITLE_LABEL,
  CHAT_SIGN_OUT_LABEL
} from '../../constants/chatConstants';
import { APP_GITHUB_URI, APP_HOME_URI } from '../../constants/appConstants';

const useStyles = makeStyles((theme) => ({
  grow: {
    display: 'flex',
    flexGrow: 1
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    backgroundImage: `url(data:image/png;base64,${background})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor: theme.palette.primary.dark[900],
    height: '100%',
    width: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  appBarAlt: {
    width: `calc(100% - ${CHAT_SIDE_BAR_WIDTH}px)`,
    marginLeft: CHAT_SIDE_BAR_WIDTH,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    backgroundColor: fade(theme.palette.primary.dark, 0.85)
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display: 'none'
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },
  inputRoot: {
    color: 'inherit'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch'
    }
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    }
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  }
}));

const ChatHeader = ({ open, handleOpenToggle }) => {
  const dispatch = useDispatch();

  const history = useHistory();
  const classes = useStyles();

  const handleSignin = e => {
    e.preventDefault();
    dispatch(logout());
  };

  useEffect(() => { dispatch(fetchMessageHistory()); });

  // Basically this is a hack
  const count = useSelector(state => {
    const messages = state.messageHistory.messages || {};
    const list = values(messages).map(x => compact(x).length === 0 ? 0 : compact(x));
    if (list.length === 0) return 0;
    return list.map(x => x.length).reduce((a, c) => a + c);
  });

  return (
    <div className={classes.grow}>
      <CssBaseline />
      <AppBar
        position='static'
        className={clsx(classes.appBar, {
          [classes.appBarAlt]: open
        })}
      >
        <Toolbar>
          <IconButton
            edge='start'
            className={clsx(classes.menuButton, open && classes.hide)}
            color='inherit'
            aria-label='open drawer'
            onClick={handleOpenToggle}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant='h6' noWrap>
            {CHAT_TITLE_LABEL}
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label='Go Home' color='inherit' onClick={() => history.push(APP_HOME_URI)}>
              <HomeIcon />
            </IconButton>
            <IconButton aria-label='Open Github' color='inherit' onClick={() => window.open(APP_GITHUB_URI, '_blank')}>
              <GitHubIcon />
            </IconButton>
            <IconButton aria-label='show number of notifications' color='inherit'>
              <Badge badgeContent={count} color='secondary'>
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <Button color='inherit' onClick={handleSignin}>{CHAT_SIGN_OUT_LABEL}</Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default ChatHeader;
