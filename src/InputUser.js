import React, { Component } from 'react';
import Keycloak from 'keycloak-js';

class InputUser extends Component {

componentDidMount = () => {  
        const keycloak = Keycloak("/keycloak.json");
        keycloak.init({ onLoad: 'login-required' }).success(authenticated => {
        
        }).error(err => {
          alert(err);
        });       
        
      }


//Get user details and call oracle service
// ...... 




render(){
    return(
        <div>
            <h1>Input User Form</h1>
        </div>
    );
}

}

export default InputUser; 
