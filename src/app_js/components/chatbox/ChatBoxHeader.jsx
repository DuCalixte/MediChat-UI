import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {
  useLocation, useParams
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  titleContainer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1, 0, 1),
    marginBottom: '10px'
  },
  title: {
    textAlign: "start",
    fontSize: "3.5em",
    margin: "normal",
    marginBottom: "5px",
    fontFamily: "fantasy,cursive,sans-serif,auto"
  },
  subtitle: {
    textAlign: "start",
    fontSize: "0.9em",
    fontFamily: "serif,auto"
  }
}))
const ChatBoxHeader = () => {
  useEffect(() => {}, [])
  const { name='Channel', description='' } = useSelector(state => state.chatChannel);
  const { title, titleContainer, subtitle } = useStyles();
  return (
    <div className={titleContainer}>
          <Container maxWidth="lg">
            <Typography className={title} component="h2" variant="h2" align="left" color="textPrimary" gutterBottom>
              {name}
            </Typography>
            <Typography className={subtitle} component="p" variant="subtitle2" align="left" color="textSecondary" paragraph>
            {description}
            </Typography>
          </Container>
    </div>
  )
};

export default ChatBoxHeader;
