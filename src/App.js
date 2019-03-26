import React, { Component, Fragment } from 'react';
import './App.css';
import Board from './views/board/Board';
import NavBottom from './views/common/NavBottom';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import RootStore from './stores';
import {Provider} from 'mobx-react';

const root = new RootStore();

class App extends Component {

  
  render() {
    return (
      <Fragment>
        <Provider {...root}>
          <Router>
            <Board/>
            <NavBottom/>
          </Router>
        </Provider>
      </Fragment>
    );
  }
}

export default App;
