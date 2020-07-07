import React from 'react';
import { useSelector } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  titleContainer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1, 0, 1),
    marginBottom: '5px'
  },
  title: {
    textAlign: 'start',
    fontSize: '2.3em',
    margin: 'normal',
    marginBottom: '1px',
    fontFamily: 'fantasy,cursive,sans-serif,auto'
  },
  subtitle: {
    textAlign: 'start',
    fontSize: '0.8em',
    fontFamily: 'serif,auto'
  }
}));
const ChatBoxHeader = () => {
  const chatChannel = useSelector(state => state.chatChannel);
  const { name = 'Channel', description = '' } = chatChannel;

  const { title, titleContainer, subtitle } = useStyles();
  return (
    <div className={titleContainer}>
      <Container maxWidth='lg'>
        <Typography className={title} component='h2' variant='h2' align='left' color='textPrimary' gutterBottom>
          {name}
        </Typography>
        <Typography className={subtitle} component='p' variant='subtitle2' align='left' color='textSecondary' paragraph>
          {description}
        </Typography>
      </Container>
    </div>
  );
};

export default ChatBoxHeader;
