import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ChatBoxInfomation from './ChatBoxInfomation';
import ChatBoxWindow from './ChatBoxWindow';

const useStyles = makeStyles((theme) => ({
  container: {
  },
  leftGrid: {
    padding: theme.spacing(1),
    margin: "normal",
    // marginBottom: theme.spacing(1),
    color: theme.palette.text.primary,
  },
  rightGrid: {
    padding: theme.spacing(2),
    margin: "normal",
    // marginBottom: theme.spacing(1),
    color: theme.palette.text.secondary,
  },
  paper: {
    elevation: 0,
    padding: theme.spacing(1),
    // textAlign: 'center',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(1),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
}));

const ChatBoxContent = ({id}) => {
const { container, leftGrid, rightGrid, paper } = useStyles();

  return (
    <Grid container spacing={1}>
      <Grid item xs={9}>
        <ChatBoxWindow className={leftGrid} />
      </Grid>
      <Grid item xs={3}>
        <ChatBoxInfomation className={rightGrid} />
      </Grid>
    </Grid>
  )
};

export default ChatBoxContent;
