import React from 'react';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
// import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';

import { logout } from '../../ducks/chatUser.duck';
import { background } from '../../utilities/img/navBackground';

import {
  CHAT_SIDE_BAR_WIDTH,
  CHAT_TITLE_LABEL,
  CHAT_SIGN_OUT_LABEL
} from '../../constants/chatConstants';

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
  const classes = useStyles();
  // const [statusLabel, setStatusLabel] = useState(CHAT_SIGN_OUT_LABEL);

  const handleSignin = e => {
    e.preventDefault();
    dispatch(logout());
  };

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
            <IconButton aria-label='show number of users in the community' color='inherit'>
              <Badge badgeContent={4} color='secondary'>
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label='show number of notifications' color='inherit'>
              <Badge badgeContent={17} color='secondary'>
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
