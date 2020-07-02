import React, { Component } from 'react';
import Routers from './components/routers/Routers';
import { Provider, ReactReduxContext } from 'react-redux';
import { store } from './utilities/store';
import './App.scss';

export default class App extends Component {
  render() {
    const boo = "hello"
    const context = ReactReduxContext;
    return (
      <Provider {...{store,context}}>
        <Routers {...{context}}/>
      </Provider>
    )
  }
}
