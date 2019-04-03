import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import  Button  from '@material-ui/core/Button';
import EditCurrentUser from './EditCurrentUser';

class EditUser extends Component {
    constructor(props) {
    super(props);
    this.state = { keycloakUsers: [{
        USERNAME:"",
        EMAIL:""        
    }], 
     new:"none" ,
    newEdit: {  
      username:"" ,
      email:"",
      firstName:"",
      userRole:"",
      epf_number:"",
      mobile_number:"",
      branch:"",
      department:"",
      start_date:"",
      end_date:"",

    }
};  
  }
componentDidMount = () => {  
    // load users from temporary db
    axios.get('http://localhost:7000/users',
    { headers:
      { 'token': 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICI4U0JtN2NDMHZ0WFdubXRNOUhwX1F1OU5Scnh1bF9jdG9rdkRyRVJhdG8wIn0.eyJqdGkiOiJmODA5NWY0YS03ODg1LTRlNzYtYTZjMS00OGQ5MGE1MmU1ODMiLCJleHAiOjE1NTQxMzQwNjEsIm5iZiI6MCwiaWF0IjoxNTU0MDk5MTQwLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvYXV0aC9yZWFsbXMvaXNhbSIsImF1ZCI6ImlucHV0LWF1dGgtYXBwIiwic3ViIjoiNzVkNDFkYmUtMjgxNi00MDU1LThiYWUtODJiOTUwNjU5ZDM3IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiaW5wdXQtYXV0aC1hcHAiLCJub25jZSI6Ijg2M2ZjZjg3LTY4ZWItNDAwZi04OTAzLTYxZTA3OWU2OTM2ZSIsImF1dGhfdGltZSI6MTU1NDA5ODA2MSwic2Vzc2lvbl9zdGF0ZSI6ImRiMmQ5ZTg4LTU4MmQtNGJmYy1hNGU4LWI5NTg2NDNlMmM5YiIsImFjciI6IjAiLCJhbGxvd2VkLW9yaWdpbnMiOlsiaHR0cDovL2xvY2FsaG9zdDozMDAwIl0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJSZW1vdmVyIiwidmlld1VzZXJzIiwiYXV0aG9yaXplciIsIkNSRUFURV9VU0VSIiwiQXV0aG9yaXplciIsImlucHV0dGVyIiwiQWRkZXIiXX0sInJlc291cmNlX2FjY2VzcyI6eyJyZWFsbS1tYW5hZ2VtZW50Ijp7InJvbGVzIjpbInZpZXctaWRlbnRpdHktcHJvdmlkZXJzIiwidmlldy1yZWFsbSIsIm1hbmFnZS1pZGVudGl0eS1wcm92aWRlcnMiLCJpbXBlcnNvbmF0aW9uIiwicmVhbG0tYWRtaW4iLCJjcmVhdGUtY2xpZW50IiwibWFuYWdlLXVzZXJzIiwicXVlcnktcmVhbG1zIiwidmlldy1hdXRob3JpemF0aW9uIiwicXVlcnktY2xpZW50cyIsInF1ZXJ5LXVzZXJzIiwibWFuYWdlLWV2ZW50cyIsIm1hbmFnZS1yZWFsbSIsInZpZXctZXZlbnRzIiwidmlldy11c2VycyIsInZpZXctY2xpZW50cyIsIm1hbmFnZS1hdXRob3JpemF0aW9uIiwibWFuYWdlLWNsaWVudHMiLCJxdWVyeS1ncm91cHMiXX0sImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoib3BlbmlkIGVtYWlsIHByb2ZpbGUiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsInByZWZlcnJlZF91c2VybmFtZSI6ImlzYW0xIn0.VJxCSdXjgQJoPgGMn3V0VtT7bgxzuOIc88FIihkI2FLSMKiMBY-hN22coMELISOWgTVwtazOUnkC4vwtdU00imuIlneSnRfmFAd3qv0b5fwY4zPQ86zDokp6l5TGOFytZkKR2qsP8W-JC_-Fbc9b3nqgM-HhTIyEQKjDC40YF2Wm6zpqSVVArBlFkjQ4SVBiblW5cUw4nbcAqrYOIqCs86r3dRSfByNtgKhkinl29qt4Vp_faKrd1TyKozRFHT_ta3dyL_pXb_xGtDhwtt3LPlcjcHutFGJUlBbgDU5FvuOHCekszCXmMUJKJCGeMVVR3h3kLa_ZHh7Jv5CmutHjug'}
    }
    )    
    .then(res => this.setState({ keycloakUsers: res.data },
        function(){
            console.log("yolo",res.data);
            console.log("yes",this.state.keycloakUsers);
        } ));

}

changeEmailHandler = event => { 
  this.setState({
    newEdit: {
          ...this.state.newEdit,
          email: event.target.value
    }})

}

changeFirstNameHandler = event => { 
  this.setState({
    newEdit: {
          ...this.state.newEdit,
          firstName: event.target.value
    }})
}

changeMobileHandler = event => { 
  this.setState({
    newEdit: {
          ...this.state.newEdit,
          mobile_number: event.target.value
    }})
}

changeUserRoleHandler = event => {
  this.setState({
    newEdit: {
          ...this.state.newEdit,
          userRole: event.target.value
    }})
}

changeEPFHandler = event => {
  this.setState({
    newEdit: {
          ...this.state.newEdit,
          epf_number: event.target.value
    }})
}

changeBranchHandler = event => {
  this.setState({
    newEdit: {
          ...this.state.newEdit,
          branch: event.target.value
    }})
}

changeDepartmentHandler= event => {
  this.setState({
    newEdit: {
          ...this.state.newEdit,
          department: event.target.value
    }})
}

changeStartDateHandler= event => {
  this.setState({
    newEdit: {
          ...this.state.newEdit,
          start_date: event.target.value
    }})
}


changeEndDateHandler= event => {
  this.setState({
    newEdit: {
          ...this.state.newEdit,
          end_date: event.target.value
    }})
}

handleUserEdit = (editUser) => {
  console.log(editUser);
  this.setState({new:"edit"});
  this.setState({current:editUser});

  this.setState({newEdit:{  
    username:editUser.username,  
    email:editUser.email,
    firstName:editUser.firstName,
    userRole:editUser.userRole,
    epf_number:editUser.attributes.epf_number,
    branch:editUser.attributes.branch,
    mobile_number:editUser.attributes.mobile_number,
    department:editUser.attributes.department,
    start_date:editUser.attributes.start_date,
    end_date:editUser.attributes.end_date


  }});

  }


  SubmitEditCurrentUser = () => {
          var postData = {
            "username": this.state.newEdit.username ,
            "email" : this.state.newEdit.email ,
            "userStatus" : true ,
            "epf_number"	: this.state.newEdit.epf_number,
            "branch"		: this.state.newEdit.branch,
            "department"	: this.state.newEdit.branch,
            "mobile_number"	:this.state.newEdit.mobile_number,
            "start_date"	: this.state.newEdit.start_date,
            "end_date"		: this.state.newEdit.end_date,
            "password"		: "123" ,
            "name"		:	this.state.newEdit.firstName ,
            "userRole"	:	this.state.newEdit.userRole
                
            };
            
            let axiosConfig = {
              headers: {
                   "token":"eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICI4U0JtN2NDMHZ0WFdubXRNOUhwX1F1OU5Scnh1bF9jdG9rdkRyRVJhdG8wIn0.eyJqdGkiOiJlN2VhYTNmMi02ZGNlLTRlZDMtODU2Yy02NzZkNmI0NzMwYTgiLCJleHAiOjE1NTQyOTM3MDgsIm5iZiI6MCwiaWF0IjoxNTU0MjU3NzQxLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvYXV0aC9yZWFsbXMvaXNhbSIsImF1ZCI6ImlucHV0LWF1dGgtYXBwIiwic3ViIjoiNzVkNDFkYmUtMjgxNi00MDU1LThiYWUtODJiOTUwNjU5ZDM3IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiaW5wdXQtYXV0aC1hcHAiLCJub25jZSI6ImFiNmE4MWJlLTdiODMtNDBmNS04M2M5LWFmNDQ2NzRiZGQ0NSIsImF1dGhfdGltZSI6MTU1NDI1NzcwOCwic2Vzc2lvbl9zdGF0ZSI6ImM0ODhhODNhLWY2ZDItNDUyZi04ZjgxLTZjNzI2Njc0MjU1YyIsImFjciI6IjAiLCJhbGxvd2VkLW9yaWdpbnMiOlsiaHR0cDovL2xvY2FsaG9zdDozMDAwIl0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJlZGl0b3IiLCJSZW1vdmVyIiwidmlld1VzZXJzIiwiYXV0aG9yaXplciIsIkNSRUFURV9VU0VSIiwiQXV0aG9yaXplciIsImRlbGV0ZVVzZXJzIiwiaW5wdXR0ZXIiLCJBZGRlciJdfSwicmVzb3VyY2VfYWNjZXNzIjp7InJlYWxtLW1hbmFnZW1lbnQiOnsicm9sZXMiOlsidmlldy1pZGVudGl0eS1wcm92aWRlcnMiLCJ2aWV3LXJlYWxtIiwibWFuYWdlLWlkZW50aXR5LXByb3ZpZGVycyIsImltcGVyc29uYXRpb24iLCJyZWFsbS1hZG1pbiIsImNyZWF0ZS1jbGllbnQiLCJtYW5hZ2UtdXNlcnMiLCJxdWVyeS1yZWFsbXMiLCJ2aWV3LWF1dGhvcml6YXRpb24iLCJxdWVyeS1jbGllbnRzIiwicXVlcnktdXNlcnMiLCJtYW5hZ2UtZXZlbnRzIiwibWFuYWdlLXJlYWxtIiwidmlldy1ldmVudHMiLCJ2aWV3LXVzZXJzIiwidmlldy1jbGllbnRzIiwibWFuYWdlLWF1dGhvcml6YXRpb24iLCJtYW5hZ2UtY2xpZW50cyIsInF1ZXJ5LWdyb3VwcyJdfSwiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJvcGVuaWQgZW1haWwgcHJvZmlsZSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwicHJlZmVycmVkX3VzZXJuYW1lIjoiaXNhbTEifQ.DugAY9FyHDjHySBeaQuguQHMr_8TU7PEa7kS5AKyS6G7qfZ4u9kr7loZ8snFpSdtyLfHwrzbF8Fg-OcFyqVQxsLeXnShozUwQyaRX-gL7ZBBciS_9EKrPHMZNT_HsWdcOIu5-h-yJTIM02Z-dcyGUJkTqUFosDBsb0xcXNeBeg743gAQyoXmgtO0fviAYN_BP7ypgFxFPGahBkLGvHgyIAk4EzFzz0QXS05taCEiTvRpJJ5gv6eS50ifBgwp-zMl_IA4yUMMB5F_otLZUG7hoo8tUoDEXIllp6IxmO_7Pf7JlRvNuuatFIJuosv0Kl_XrlHFjuKXSJYkoXEGruQ7ag",
                  'Content-Type': 'application/json;charset=UTF-8',
                  "Access-Control-Allow-Origin": "*",
              }
            };
            
            axios.post('http://localhost:7000/users/edit', postData, axiosConfig)
            .then((res) => {
              console.log("RESPONSE RECEIVED: ", res);
            })
            .catch((err) => {
              alert("404, User not found in the keycloak database");
            })
                }

render() {
  if(this.state.new == "none"){ 
  return (
        <div>     
           {/* <Router>  */}
             <div className="edituser">              
            <h1>Edit Users</h1> 
            <ul>
                {this.state.keycloakUsers.map((user) =>
                 <li key={user.id}>
                    <label>{user.username}</label>  
                                      
                    <Button variant="contained" color="secondary" onClick={() => this.handleUserEdit(user)}>
                    Edit User    
                    </Button> 
                 </li>   )}
            </ul> 
            </div>
            
            }
      </div>
    );
          }
          return (
            <div>
              
              {console.log(this.state.current)}
              <br></br>
              <br></br>
              <h4>Edit {this.state.current.username}'s Details</h4>

              <form onSubmit={this.SubmitEditCurrentUser}>
            <label>
               Username:
           <input type="text" name="username"value={this.state.newEdit.username} disabled="true" /> 
             </label>
             <label>
               Name:
           <input type="text" name="name" value={this.state.newEdit.firstName} onChange={this.changeFirstNameHandler} />
             </label>
             <label>
               Role:
           <input type="text" name="role" onChange={this.changeUserRoleHandler} />
             </label>
             <label>
               Email:
           <input type="text" name="email" value={this.state.newEdit.email} onChange={this.changeEmailHandler} />
             </label>
             <label>
               User Status:  
             <input type="text" name="userStatus" onChange={this.changeuserStatusHandler} />
             </label>  
             <label>
               EPF Number:  
             <input type="text" name="epf" value={this.state.newEdit.epf_number} onChange={this.changeEPFHandler} />
             </label>
             <label>
               Branch: </label> <br></br>
               {/* <select onSelect={(value, event) => this.changeBranchHandler(value, event)}> */}
               <select id="branch" onChange={this.changeBranchHandler}>
                      <option value="Select">{this.state.newEdit.branch}</option>
                      <option value="Havelock">Havelock</option>
                      <option value="Maharagama">Maharagama</option>
                      <option value="Kirulapona">Kirulapona</option>

              </select>
             <br></br>
             <br></br>
             <label>Department: </label><br></br>
               {/* <select onSelect={(value, event) => this.changeDepartmentHandler(value, event)}> */}
               <select id="dep" onChange={this.state.current.attributes.department}>
                      <option value="Select">{this.state.newEdit.department}</option>
                      <option value="Finance">Finance</option>
                      <option value="Accounting">Accounting</option>
                      <option value="Accounting">Management</option>

              </select>
              <br></br>
              <br></br>

             <label>
               Mobile Number:  
             <input type="text" name="mobile" value={this.state.newEdit.mobile_number} onChange={this.changeMobileHandler} />
             </label>    
             <label>
               Start Date:  
             <input type="text" name="start" value={this.state.newEdit.start_date} onChange={this.changeStartDateHandler} />
             </label>
             <label>
               End Date:  
             <input type="text" name="end" value={this.state.newEdit.end_date} onChange={this.changeEndDateHandler} />
             </label> 
             {/* <label>
               Password:  
             <input type="text" name="end" onChange={this.changePasswordHandler} />
             </label>   */}

             <input type="submit" value="Submit" />
            </form>
            </div>
          );
  }
}

export default EditUser;