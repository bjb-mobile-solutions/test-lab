import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';
import DeviceList from './components/devices/DeviceList';

class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
          <div className="App-header">
            <h1>Julius Baer</h1>
            <p>Test Lab</p>
          </div>
          <div className="App-content">
            <Switch>
              <Route exact path='/' component={DeviceList} />
              <Route render={() =>
                <div>
                  <h1>Oops...</h1>
                  <h2>Something went wrong :(</h2>
                </div>
              } />
            </Switch>
          </div>
          <footer>version: 0.0.1 (beta)</footer>
        </div>
      </Router>
    );
  }
}

export default App;
