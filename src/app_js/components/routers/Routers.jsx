import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import LoginPage from '../../pages/LoginPage';
import ChatPage from '../../pages/ChatPage';
import ErrorPage from '../../pages/ErrorPage';

const Routers = (props) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <ChatPage />
        </Route>
        <Route path="/login">
            <LoginPage />
        </Route>
        <Route path="/signup">
            <LoginPage />
        </Route>
        <Route path="*">
          <ErrorPage />
        </Route>
      </Switch>
    </Router>
  )
}

export default Routers;
