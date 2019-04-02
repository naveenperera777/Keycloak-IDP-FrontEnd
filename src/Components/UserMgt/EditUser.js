import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import  Button  from '@material-ui/core/Button';

class EditUser extends Component {
    constructor(props) {
    super(props);
    this.state = { keycloakUsers: [{
        USERNAME:"",
        EMAIL:""        
    }],   
};  
  }
componentDidMount = () => {  
    //load users from temporary db
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


handleUserEdit = (editUser) => {
  console.log(editUser);
    // axios.get('http://localhost:7000/edit')
    // .then((res) => {
    //     alert("User Edited Successfully");
    //   console.log("User Edited ", res);
    // })
    // .catch((err) => {
    //   console.log("Error: ", err);
    // })

        }

render() { 
  return (
        <div>                    
            <h1>Delete Users</h1>            
            <ul>
                {this.state.keycloakUsers.map((user) =>
                 <li key={user.id}>
                    <label>{user.username}</label>
                    <Button variant="contained" color="default" onClick={() => this.handleUserEdit(user.username)}>
                    Edit User    
                    </Button>
                 </li>   )}
            </ul>    
      </div>
    );
  }
}

export default EditUser;