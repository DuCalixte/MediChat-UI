import React from 'react';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';

import { makeStyles } from '@material-ui/core/styles';
import { background } from '../utilities/img/404background';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '120vh'
  },
  image: {
    backgroundImage: `url(data:image/gif;base64,${background})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[1024],
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  paper: {
    margin: theme.spacing(1, 1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
}));

const ErrorPage = () => {
  const { root, image } = useStyles();
  return (
    <Grid container component='main' className={root}>
      <CssBaseline />
      <Grid item xs={false} sm={12} md={12} className={image} />
    </Grid>
  );
};

export default ErrorPage;
