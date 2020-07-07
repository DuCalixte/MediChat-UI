import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import { PrivateRoute } from './PrivateRoute';

import LoginPage from '../../pages/LoginPage';
import ChatPage from '../../pages/ChatPage';
import ErrorPage from '../../pages/ErrorPage';

import {
  APP_LOGIN_URI,
  APP_REGISTER_URI,
  APP_CHAT_URI
} from '../../constants/appConstants';

const Routers = () => {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path='/' component={ChatPage} />
        <PrivateRoute path={APP_CHAT_URI} component={ChatPage} />
        <Route path={APP_REGISTER_URI} component={LoginPage} />
        <Route path={APP_LOGIN_URI} component={LoginPage} />
        <Route path='*' component={ErrorPage} />
      </Switch>
    </Router>
  );
};

export default Routers;
