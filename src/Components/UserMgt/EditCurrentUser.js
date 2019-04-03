import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import  Button  from '@material-ui/core/Button';
var request = require('request');

class EditCurrentUser extends Component {
    constructor(props) {
    super(props);
    this.state = { keycloakUsers: [{
     
    }]
};  
  }
componentDidMount = () => { }
 
render() { 
  return (
        <div>                    
            <h1>Edit Current</h1>            
              
      </div>
    );
  }
}

export default EditCurrentUser;