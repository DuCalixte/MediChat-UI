import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import {
  APP_LOGIN_URI
} from '../../constants/appConstants';

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const isLoggedIn = useSelector(state => state.chatUser.isLoggedIn);
  return (
    <Route
      {...rest} render={props => (
        isLoggedIn
          ? <Component {...props} />
          : <Redirect to={{ pathname: APP_LOGIN_URI, state: { from: props.location } }} />
      )}
    />
  );
};
