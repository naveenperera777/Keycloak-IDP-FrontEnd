import React, { Component } from 'react';
import Keycloak from 'keycloak-js';
import axios from 'axios';
const request = require('request');

class InputUser extends Component {

  constructor(props) {
    super(props);
    this.state = { keycloak: null ,      
      email:'',
      name:'',
      username:'',
      userRole:'',
      userStatus:true,
      epf:'',
      branch:'',
      department:'',
      mobile:'',
      start_date:'',
      end_date:'',
      password:''
  }}
componentDidMount = () => {  
        const keycloak = Keycloak("/keycloak.json");
        keycloak.init({ onLoad: 'login-required' }).success(authenticated => {
          this.setState({ keycloak: keycloak });
        }).error(err => {
          alert(err);
        });  
    }


changeEmailHandler = event => {
  this.setState({ email: event.target.value });
      }
      
changeUsernameHandler = event => {
  
       this.setState({ username: event.target.value });
  
            }  
changeEPFHandler = event => {
  this.setState({epf_number: event.target.value})
}

changeuserStatusHandler = event => {
  this.setState({userStatus: event.target.value})
}
            
changeBranchHandler = event => {
  this.setState({branch:event.target.value});
} 

changeMobileHandler = event => {
  this.setState({mobile:event.target.value});
} 

changeStartDateHandler = event => {
  this.setState({start_date:event.target.value});
}

changeEndDateHandler = event => {
  this.setState({end_date:event.target.value});
} 

changeNameHandler = event => {
  this.setState({name:event.target.value});
}

changeUserRoleHandler = event => {
  this.setState({userRole:event.target.value});
}

changeBranchHandler = (event ) => {
  this.setState({branch:event.target.value});       
}

changeDepartmentHandler = ( event) => {
  this.setState({department:event.target.value});       
}

changePasswordHandler = event => {
  this.setState({password:event.target.value});
}

changeEPFHandler = event => {
  this.setState({epf:event.target.value});
}

addInputterUser = (event) => {    
      event.preventDefault();
      
      console.log("username",this.state.username);
      console.log("email",this.state.email);
      console.log("userStatus",this.state.userStatus);
      console.log("epf",this.state.epf);
      console.log("branch",this.state.branch);
      console.log("department",this.state.department);
      console.log("mobile",this.state.mobile);
      console.log("start_date",this.state.start_date);
      console.log("end_date",this.state.end_date);
      console.log("password",this.state.password);
      console.log("name",this.state.name);
      console.log("userROle",this.state.userRole);

var postData = {
    "username": this.state.username ,
    "email" : this.state.email ,
    "userStatus" : this.state.userStatus ,
    "epf_number"	: this.state.epf,
    "branch"		: this.state.branch,
    "department"	: this.state.department,
    "mobile_number"	:this.state.mobile ,
    "start_date"	: this.state.start_date,
    "end_date"		: this.state.end_date,
    "password"		: this.state.password ,
    "name"		:	this.state.name ,
    "userRole"	:	this.state.userRole
        
    };
    
    let axiosConfig = {
      headers: {
           "token":"eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICI4U0JtN2NDMHZ0WFdubXRNOUhwX1F1OU5Scnh1bF9jdG9rdkRyRVJhdG8wIn0.eyJqdGkiOiI1NWFhZjBkNi0wNGM1LTQ1Y2YtODc3ZS0yOTFlM2E2NDVkOGMiLCJleHAiOjE1NTQyMTQ5MjAsIm5iZiI6MCwiaWF0IjoxNTU0MTgzOTIyLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvYXV0aC9yZWFsbXMvaXNhbSIsImF1ZCI6ImlucHV0LWF1dGgtYXBwIiwic3ViIjoiNzVkNDFkYmUtMjgxNi00MDU1LThiYWUtODJiOTUwNjU5ZDM3IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiaW5wdXQtYXV0aC1hcHAiLCJub25jZSI6ImZhNDlkOWE4LTE1YjAtNDJmOC04OWNiLWZlNjM2NTQ0ZWJiNCIsImF1dGhfdGltZSI6MTU1NDE3ODkyMCwic2Vzc2lvbl9zdGF0ZSI6IjliOTUzNTkyLWI3MDktNDQxMi05OTY1LTY2OTUwMmM2Zjk2MCIsImFjciI6IjAiLCJhbGxvd2VkLW9yaWdpbnMiOlsiaHR0cDovL2xvY2FsaG9zdDozMDAwIl0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJSZW1vdmVyIiwidmlld1VzZXJzIiwiYXV0aG9yaXplciIsIkNSRUFURV9VU0VSIiwiQXV0aG9yaXplciIsImRlbGV0ZVVzZXJzIiwiaW5wdXR0ZXIiLCJBZGRlciJdfSwicmVzb3VyY2VfYWNjZXNzIjp7InJlYWxtLW1hbmFnZW1lbnQiOnsicm9sZXMiOlsidmlldy1pZGVudGl0eS1wcm92aWRlcnMiLCJ2aWV3LXJlYWxtIiwibWFuYWdlLWlkZW50aXR5LXByb3ZpZGVycyIsImltcGVyc29uYXRpb24iLCJyZWFsbS1hZG1pbiIsImNyZWF0ZS1jbGllbnQiLCJtYW5hZ2UtdXNlcnMiLCJxdWVyeS1yZWFsbXMiLCJ2aWV3LWF1dGhvcml6YXRpb24iLCJxdWVyeS1jbGllbnRzIiwicXVlcnktdXNlcnMiLCJtYW5hZ2UtZXZlbnRzIiwibWFuYWdlLXJlYWxtIiwidmlldy1ldmVudHMiLCJ2aWV3LXVzZXJzIiwidmlldy1jbGllbnRzIiwibWFuYWdlLWF1dGhvcml6YXRpb24iLCJtYW5hZ2UtY2xpZW50cyIsInF1ZXJ5LWdyb3VwcyJdfSwiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJvcGVuaWQgZW1haWwgcHJvZmlsZSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwicHJlZmVycmVkX3VzZXJuYW1lIjoiaXNhbTEifQ.ow1_QtuX9_DmOqz88q7Ed32Pf_Cgg7wssFHfWkwWpRcHtec2fzqud-dtxCmOTjevm3Fa8CGtwMhj-lDvwaf8PHzhL_tVCO7jdBa2gxRO6bePqdVvfQkSemtLUlmX6oaGb5cFYzpZpkvdY68tSRIuWgj6TrLCwc4ZhrepU84kDhEP-AYPUr0V1T_FshBHEPR_fY-eeXPz1TXqjEWHiBdVlVkb8753xQHTkABigRKivr4oQFEZEfV3IIwRLBUNVFs4T-MSd-0CuULRXutKoc8Mn4PjNjeBol7iDr19yKWJpxg0VKkn-nmUiv6IhmAd2Sx6pUarfu7xWRQ9esUnGhld0g",
           'Content-Type': 'application/json;charset=UTF-8',
          "Access-Control-Allow-Origin": "*",
      }
    };
    
    axios.post('http://localhost:7000/users', postData, axiosConfig)
    .then((res) => {
      console.log("RESPONSE RECEIVED: ", res);
    })
    .catch((err) => {
      alert("404, User not found in the keycloak database");
    })
      
}


render(){
    return(
        <div>
            <h1>Input User Form</h1>
            {/* <button onClick={this.addInputterUser}>Add new user!</button> */}
            <form onSubmit={this.addInputterUser}>
            <label>
               Username:
           <input type="text" name="username" onChange={this.changeUsernameHandler} />
             </label>
             <label>
               Name:
           <input type="text" name="name" onChange={this.changeNameHandler} />
             </label>
             <label>
               Role:
           <input type="text" name="role" onChange={this.changeUserRoleHandler} />
             </label>
             <label>
               Email:
           <input type="text" name="email" onChange={this.changeEmailHandler} />
             </label>
             <label>
               User Status:  
             <input type="text" name="userStatus" onChange={this.changeuserStatusHandler} />
             </label>  
             <label>
               EPF Number:  
             <input type="text" name="epf" onChange={this.changeEPFHandler} />
             </label>
             <label>
               Branch: </label> <br></br>
               {/* <select onSelect={(value, event) => this.changeBranchHandler(value, event)}> */}
               <select id="branch" onChange={this.changeBranchHandler}>
                      <option value="Select">Select Branch</option>
                      <option value="Havelock">Havelock</option>
                      <option value="Maharagama">Maharagama</option>
                      <option value="Kirulapona">Kirulapona</option>

              </select>
             <br></br>
             <br></br>
             <label>Department: </label><br></br>
               {/* <select onSelect={(value, event) => this.changeDepartmentHandler(value, event)}> */}
               <select id="dep" onChange={this.changeDepartmentHandler}>
                      <option value="Select">Select Department</option>
                      <option value="Finance">Finance</option>
                      <option value="Accounting">Accounting</option>
                      <option value="Accounting">Management</option>

              </select>
              <br></br>
              <br></br>

             <label>
               Mobile Number:  
             <input type="text" name="mobile" onChange={this.changeMobileHandler} />
             </label>    
             <label>
               Start Date:  
             <input type="text" name="start" onChange={this.changeStartDateHandler} />
             </label>
             <label>
               End Date:  
             <input type="text" name="end" onChange={this.changeEndDateHandler} />
             </label> 
             <label>
               Password:  
             <input type="text" name="end" onChange={this.changePasswordHandler} />
             </label>  

             <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

}

export default InputUser; 
