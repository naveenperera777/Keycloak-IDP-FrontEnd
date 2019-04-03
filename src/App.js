import React, { Component } from 'react';
import Welcome from './Welcome';
import Secured from './Components/Secured';
// import Inputter from './Components/UserMgt/InputUser';
// import usermanagement from './Components/UserMgt/UserManagement';
// import { BrowserRouter, Route, Link } from 'react-router-dom';
import './styles.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import {Form, FormControl , Navbar, Button, Nav} from 'react-bootstrap';
import UserManagement from './Components/UserMgt/UserManagement';
import AuthorizeRoles from './Components/AuthorizeRole';
import RoleManagement from './Components/RoleManagement';


// import {NavBar, Nav, NavItem} from 'react-bootstrap';


class App extends Component {
  render() {
    return (
    //   <BrowserRouter>
    //   <div className="container">
    //     <ul>
    //       <li><Link to="/">NDB Home</Link></li>
    //       <li><Link to="/secured">Authorize component</Link></li>
    //       <li><Link to="/input">Input component</Link></li>
    //     </ul>
    //     <Route exact path="/" component={Welcome} />
    //     <Route path="/secured" component={Secured} />
    //     <Route path="/input" component={Inputter} />       
    //   </div>
    // </BrowserRouter>
    <Router>
    <div className="navbar">           
      <ul className="topnav">
        <li><Link to={'/'} className="nav-link"> NDB Home</Link></li>
        <li><Link to={'/secured'} className="nav-link">Authorize Users</Link></li>
        <li><Link to={'/usermanagement'} className="nav-link">User Management</Link></li>
        <li><Link to={'/authroles'} className="nav-link">Authorize Roles</Link></li>
        <li><Link to={'/rolemanagement'} className="nav-link">Role Management</Link></li>
        
      </ul>
      
      <hr />
      
      <Switch>
          <Route exact path='/' component={Welcome} />
          <Route path='/secured' component={Secured} />
          <Route path='/usermanagement' component={UserManagement} />
          <Route path='/authroles' component={AuthorizeRoles} />
          <Route path='/rolemanagement' component={RoleManagement} />
      </Switch>
    </div>
  </Router>
    );
  }
}

export default App;
