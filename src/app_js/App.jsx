import React, { Component } from 'react';
import Routers from './components/routers/Routers';
import { Provider } from 'react-redux';
import { store } from './utilities/store';
import './App.scss';

export default class App extends Component {
  render () {
    // const context = ReactReduxContext;
    return (
      <Provider {...{ store }}>
        <Routers />
      </Provider>
    );
  }
}
