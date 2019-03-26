import React, { Component } from 'react';
import Welcome from './Welcome';
import Secured from './Secured';
import Inputter from './InputUser';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './styles.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="container">
        <ul>
          <li><Link to="/">public component</Link></li>
          <li><Link to="/secured">Authorize component</Link></li>
          <li><Link to="/input">Input component</Link></li>
        </ul>
        <Route exact path="/" component={Welcome} />
        <Route path="/secured" component={Secured} />
        <Route path="/input" component={Inputter} />
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
