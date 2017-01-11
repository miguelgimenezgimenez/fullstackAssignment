import React, { Component } from 'react';
import './App.css';

import AppBar from 'material-ui/AppBar';

import Dashboard from './containers/Dashboard'

class App extends Component {
  render() {
    return (
      <div>
        <AppBar
          title="Events!"
        />
        <Dashboard />
      </div>
    );
  }
}

export default App;
