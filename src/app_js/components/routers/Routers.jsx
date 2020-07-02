import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
  useHistory
} from "react-router-dom";

import { PrivateRoute } from './PrivateRoute';

import LoginPage from '../../pages/LoginPage';
import ChatPage from '../../pages/ChatPage';
import ErrorPage from '../../pages/ErrorPage';

import {
  APP_LOGIN_URI,
  APP_REGISTER_URI,
  APP_CHAT_URI
} from '../../constants/appConstants';


const Routers = ({context}) => {
  // const isLoggedIn = useSelector(state => state.chatUser.isLoggedIn);
  // console.log('ROUTERS', isLoggedIn);
  // const dispatch = useDispatch();
  // const history = useHistory();
  //
  // console.log('HISTORY', history)
  //
  // // reset login status
  // useEffect(() => {
  //   console.log('ROUTERS', isLoggedIn);
  //   console.log('ROUTERS: location', location);
  //   console.log('ROUTERS: context', context);
  //   console.log('ROUTERS: history', history);
  //   if(isLoggedIn) history.push("/");
  // }, [isLoggedIn, location]);
  return (
    <Router context={context} forceRefresh={true}>
      <Switch>
        <PrivateRoute exact path="/" component={ChatPage} />
        <PrivateRoute path={APP_CHAT_URI} component={ChatPage} />
        <Route path={APP_REGISTER_URI} component={LoginPage} />
        <Route path={APP_LOGIN_URI} component={LoginPage} />
        <Route path="*" component={ErrorPage} />
      </Switch>
    </Router>
  )
}

export default Routers;
