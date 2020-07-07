import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/core/styles';
import { background } from '../../utilities/img/background';

import { CHAT_WELCOME_MESSAGE_TITLE, CHAT_WELCOME_MESSAGE_SUBTITLE, CHAT_SIDE_BAR_WIDTH } from '../../constants/chatConstants';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh'
  },
  content: {
    flexGrow: 3,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: 0
  },
  contentAlt: {
    flexGrow: 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: CHAT_SIDE_BAR_WIDTH
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
    color: theme.palette.common.white,
    height: '70vh'
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
  title: {
    fontFamily: 'fantasy,bookman,sans-serif,auto'
  },
  subtitle: {
    fontFamily: 'bookman,sans-serif,auto'
  }
}));

const ChatWelcome = ({ open }) => {
  const { root, content, contentAlt, image, main, title, subtitle } = useStyles();
  return (

    <Paper className={image}>
      <Grid
        container component='main' className={root, clsx(content, {
          [contentAlt]: open
        })}
      >
        <Grid item md={6}>
          <Container component='main' className={main} maxWidth='sm'>
            <Typography component='h1' variant='h3' color='inherit' className={title} gutterBottom>
              {CHAT_WELCOME_MESSAGE_TITLE}
            </Typography>
            <Typography variant='h5' color='inherit' className={subtitle} paragraph>
              {CHAT_WELCOME_MESSAGE_SUBTITLE}
            </Typography>
          </Container>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ChatWelcome;
