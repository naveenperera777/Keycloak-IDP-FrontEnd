import React, { Component } from 'react';
import Inputter from './InputUser';
import EditUser from './EditUser';
import DeleteUser from './DeleteUser';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import { Button } from 'react-bootstrap';
import  Button  from '@material-ui/core/Button';

class UserManagement extends Component {
    render() {  
    return (
      <div className="usermanagement">
      <Router>
    <div className="buttons"  > 
    <Button variant="contained" color="primary">
    <Link to={'/usermanagement/add'}> Add User</Link></Button>  
      <Button variant="contained" color="default">
    <Link to={'/usermanagement/edit'}> Edit User</Link></Button>  
      <Button variant="contained" color="secondary">
    <Link to={'/usermanagement/delete'}> Delete User</Link></Button>  
      <hr />
      <Switch>
          <Route exact path='/usermanagement/add' component={Inputter} />
          <Route path='/usermanagement/edit' component={EditUser} />
          <Route path='/usermanagement/delete' component={DeleteUser} />          
      </Switch>
    </div>
  </Router>
      </div>
    );
  }
}
export default UserManagement;