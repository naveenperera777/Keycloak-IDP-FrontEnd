import React, { Component } from 'react';
import Keycloak from 'keycloak-js';
import axios from 'axios';
const request = require('request');

class InputUser extends Component {

  constructor(props) {
    super(props);
    this.state = { keycloak: null ,
      email:'',
      username:''
  }}
componentDidMount = () => {  
        const keycloak = Keycloak("/keycloak.json");
        keycloak.init({ onLoad: 'login-required' }).success(authenticated => {
          this.setState({ keycloak: keycloak });
        }).error(err => {
          alert(err);
        });  
    }
    addInputterUser = (event) => {    
      event.preventDefault();

    console.log("Input USER",this.state.keycloak.token);
    console.log("userdata",this.state.username);
    console.log("email",this.state.email);

    var postData = {
      
      username: this.state.username,
      email:this.state.email
           
    };
    
    let axiosConfig = {
      headers: {
        // 'Authorization': ' Bearer ' + this.state.keycloak.token,   
        'token':  this.state.keycloak.token         

      }
    };
    // include server endpoint
    axios.post('http://localhost:7000/users', postData, axiosConfig)
    //  axios.post('http://localhost:8080/auth/admin/realms/isam/users', postData, axiosConfig)
    .then((res) => {
      console.log("RESPONSE RECEIVED: ", res);
    })
    .catch((err) => {
      console.log("ERROR: ", err);
    })
      

        }

  changeEmailHandler = event => {
    this.setState({ email: event.target.value });


        }
       
  changeUsernameHandler = event => {

    // const name = event.target.name;
    // const value = event.target.value;
    this.setState({ username: event.target.value });

  //   this.setState({
  //     inputFormValues: {
  //       email: value
  //     }
  // });


        }     


render(){
    return(
        <div>
            <h1>Input User Form</h1>
            <form onSubmit={this.addInputterUser}>
            <label>
               Username:
           <input type="text" name="username" onChange={this.changeUsernameHandler} />
             </label>
             <label>
               Email:
           <input type="text" name="email" onChange={this.changeEmailHandler} />
             </label>  

             <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

}

export default InputUser; 
