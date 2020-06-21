import React, { Component } from 'react';
import Routers from './components/routers/Routers';
// import Home from './Home';
import './App.scss'

export default class App extends Component {
  render() {
    return (
      <div>
        <Routers />
      </div>
    )
  }
}
