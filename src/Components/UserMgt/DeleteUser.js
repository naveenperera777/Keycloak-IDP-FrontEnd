import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import  Button  from '@material-ui/core/Button';
var request = require('request');

class DeleteUser extends Component {
    constructor(props) {
    super(props);
    this.state = { keycloakUsers: [{
      "id":"1",
      "username":"Naveen"
      // "USERNAME": "Rick",
      // "EMAIL": "rickr@.com",
      // "CREATOR": "isam",
      // "ID": 103,
      // "NAME": "tim",
      // "EPFNO": "11dreqfds",
      // "BRANCH": "branch2",
      // "DEPARTMENT": "dep3",
      // "MOBILE_NUMBER": "07779677",
      // "START_DATE": "2018-12-31T18:30:00.000Z",
      // "END_DATE": "2019-12-31T18:30:00.000Z",
      // "USER_STATUS": "true",
      // "PASSWORD": "pass",
      // "USER_ROLE": "inputter",
      // "AUTH_TYPE": "CREATE_USER",
      // "STATE": 1        
    }], currentUser: ""  
};  
  }
componentDidMount = () => {  
  // console.log("nigga",this.props.token);
    //load users from temporary db
    axios.get('http://localhost:7000/users',{
    headers:{
      'token': 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICI4U0JtN2NDMHZ0WFdubXRNOUhwX1F1OU5Scnh1bF9jdG9rdkRyRVJhdG8wIn0.eyJqdGkiOiIwZDAyNjdkZi01OTM1LTRmNzItOGY1NC1lOTQyNDJlYWMxYWUiLCJleHAiOjE1NTQxMzgwOTAsIm5iZiI6MCwiaWF0IjoxNTU0MTEyNTAwLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvYXV0aC9yZWFsbXMvaXNhbSIsImF1ZCI6ImlucHV0LWF1dGgtYXBwIiwic3ViIjoiNzVkNDFkYmUtMjgxNi00MDU1LThiYWUtODJiOTUwNjU5ZDM3IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiaW5wdXQtYXV0aC1hcHAiLCJub25jZSI6ImJkMDA4ZGU1LWZjOTEtNDI3YS1iZDM0LTUxYjRkYzMzZGFjMyIsImF1dGhfdGltZSI6MTU1NDEwMjA5MCwic2Vzc2lvbl9zdGF0ZSI6IjVlMWQwODM3LWM2YjAtNGJlMC1hNWFiLTMyN2U5MGRlY2Q5MCIsImFjciI6IjAiLCJhbGxvd2VkLW9yaWdpbnMiOlsiaHR0cDovL2xvY2FsaG9zdDozMDAwIl0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJSZW1vdmVyIiwidmlld1VzZXJzIiwiYXV0aG9yaXplciIsIkNSRUFURV9VU0VSIiwiQXV0aG9yaXplciIsImlucHV0dGVyIiwiQWRkZXIiXX0sInJlc291cmNlX2FjY2VzcyI6eyJyZWFsbS1tYW5hZ2VtZW50Ijp7InJvbGVzIjpbInZpZXctaWRlbnRpdHktcHJvdmlkZXJzIiwidmlldy1yZWFsbSIsIm1hbmFnZS1pZGVudGl0eS1wcm92aWRlcnMiLCJpbXBlcnNvbmF0aW9uIiwicmVhbG0tYWRtaW4iLCJjcmVhdGUtY2xpZW50IiwibWFuYWdlLXVzZXJzIiwicXVlcnktcmVhbG1zIiwidmlldy1hdXRob3JpemF0aW9uIiwicXVlcnktY2xpZW50cyIsInF1ZXJ5LXVzZXJzIiwibWFuYWdlLWV2ZW50cyIsIm1hbmFnZS1yZWFsbSIsInZpZXctZXZlbnRzIiwidmlldy11c2VycyIsInZpZXctY2xpZW50cyIsIm1hbmFnZS1hdXRob3JpemF0aW9uIiwibWFuYWdlLWNsaWVudHMiLCJxdWVyeS1ncm91cHMiXX0sImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoib3BlbmlkIGVtYWlsIHByb2ZpbGUiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsInByZWZlcnJlZF91c2VybmFtZSI6ImlzYW0xIn0.cAskaY3K6auuSUJsXRUQdmaI_GeFd6l8l9mCtiUnoUjZWm6Viwf_9-u4_Dho5WmS9X2KOOoqXmVpsNgPHOeuuCCQPlC3qwefstaXuXh0ft-N2B-DH0tyv_rYWZUA0dFx8ApK9s14lIZlE_Q5mQaUKKXxX-f-e14xr5KtFpCdzpHeT91Qdb_cnAUY-VmOEjYj-sVNHpxz-GErbxC14X8SDm3V-_KLPtHKQ1w-qzDKpdJSDDU2S8Hb2bvy1yYaeWfZr4EhuYGRnW7THEAtbbbpF6VTdDyKoJQV63CQAxv_lje1DTqtvb6dRBxkldUhLdEiMBvLmcn5fesa0UD3jgR5Xw'
}}
    // {headers:{ 'Access-Control-Allow-Origin': '*' }}
    )
    
    .then(res => this.setState({ keycloakUsers: res.data },
        function(){
            console.log("yolo",res.data);
            console.log("yes",this.state.keycloakUsers);
        } ));
}

handleUserDelete = (deleteUser) => {
  console.log("select",deleteUser);
  //   axios.post('http://localhost:7000/users/delete',
  //   { headers:{
  //     'token': 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICI4U0JtN2NDMHZ0WFdubXRNOUhwX1F1OU5Scnh1bF9jdG9rdkRyRVJhdG8wIn0.eyJqdGkiOiI2NDRkZGUyMy1hOWMxLTQwN2UtOTM4Yy03MTdkMzJiNjFhM2IiLCJleHAiOjE1NTQxMzgwOTAsIm5iZiI6MCwiaWF0IjoxNTU0MTEzNjY1LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvYXV0aC9yZWFsbXMvaXNhbSIsImF1ZCI6ImlucHV0LWF1dGgtYXBwIiwic3ViIjoiNzVkNDFkYmUtMjgxNi00MDU1LThiYWUtODJiOTUwNjU5ZDM3IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiaW5wdXQtYXV0aC1hcHAiLCJub25jZSI6IjQ1MGQ1OGY5LTQ4MTYtNDQ2Ny04N2Y0LTkxNjExYmI2ODUwZiIsImF1dGhfdGltZSI6MTU1NDEwMjA5MCwic2Vzc2lvbl9zdGF0ZSI6IjVlMWQwODM3LWM2YjAtNGJlMC1hNWFiLTMyN2U5MGRlY2Q5MCIsImFjciI6IjAiLCJhbGxvd2VkLW9yaWdpbnMiOlsiaHR0cDovL2xvY2FsaG9zdDozMDAwIl0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJSZW1vdmVyIiwidmlld1VzZXJzIiwiYXV0aG9yaXplciIsIkNSRUFURV9VU0VSIiwiQXV0aG9yaXplciIsImRlbGV0ZVVzZXJzIiwiaW5wdXR0ZXIiLCJBZGRlciJdfSwicmVzb3VyY2VfYWNjZXNzIjp7InJlYWxtLW1hbmFnZW1lbnQiOnsicm9sZXMiOlsidmlldy1pZGVudGl0eS1wcm92aWRlcnMiLCJ2aWV3LXJlYWxtIiwibWFuYWdlLWlkZW50aXR5LXByb3ZpZGVycyIsImltcGVyc29uYXRpb24iLCJyZWFsbS1hZG1pbiIsImNyZWF0ZS1jbGllbnQiLCJtYW5hZ2UtdXNlcnMiLCJxdWVyeS1yZWFsbXMiLCJ2aWV3LWF1dGhvcml6YXRpb24iLCJxdWVyeS1jbGllbnRzIiwicXVlcnktdXNlcnMiLCJtYW5hZ2UtZXZlbnRzIiwibWFuYWdlLXJlYWxtIiwidmlldy1ldmVudHMiLCJ2aWV3LXVzZXJzIiwidmlldy1jbGllbnRzIiwibWFuYWdlLWF1dGhvcml6YXRpb24iLCJtYW5hZ2UtY2xpZW50cyIsInF1ZXJ5LWdyb3VwcyJdfSwiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJvcGVuaWQgZW1haWwgcHJvZmlsZSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwicHJlZmVycmVkX3VzZXJuYW1lIjoiaXNhbTEifQ.FludV9BVqMO_C51ChiR83_dyPsh397pY3zVAKlyHzJh85bQx6hrxE2Ro3gvEy86P62_AoHlQn8clzAvh4-EURj7rr9wFxd7noZwbtuUUS9S4wSrnVrAIThMwPxe98De89snPAsmhTpPUqLc8iHGOHm6_JNXYdtiktDgX0-MZX8SuPtHv2CRvNx8CWckQf14-qwBEsmXVbXoSpglNxsBqW8lw4MvaAqv113jL3iJry26B3JLYUHD9jYWqwibz347Az-Jji5iUwAr1SeJW0nSzAGj9ekbdRgitAy4BrcHbaiaSpFv-tkYUPx9CSrRcVv9NDcg_TlLtnpjcG082wMWLzA'
  //   },
  //  data:{
  //    "username":"franklin",
  //    "email":"fd@fdf.lk"
  //  }}


  // axios.post('http://localhost:7000/users/delete',{
  //   headers:{
  //     'token': 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICI4U0JtN2NDMHZ0WFdubXRNOUhwX1F1OU5Scnh1bF9jdG9rdkRyRVJhdG8wIn0.eyJqdGkiOiI2NDRkZGUyMy1hOWMxLTQwN2UtOTM4Yy03MTdkMzJiNjFhM2IiLCJleHAiOjE1NTQxMzgwOTAsIm5iZiI6MCwiaWF0IjoxNTU0MTEzNjY1LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvYXV0aC9yZWFsbXMvaXNhbSIsImF1ZCI6ImlucHV0LWF1dGgtYXBwIiwic3ViIjoiNzVkNDFkYmUtMjgxNi00MDU1LThiYWUtODJiOTUwNjU5ZDM3IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiaW5wdXQtYXV0aC1hcHAiLCJub25jZSI6IjQ1MGQ1OGY5LTQ4MTYtNDQ2Ny04N2Y0LTkxNjExYmI2ODUwZiIsImF1dGhfdGltZSI6MTU1NDEwMjA5MCwic2Vzc2lvbl9zdGF0ZSI6IjVlMWQwODM3LWM2YjAtNGJlMC1hNWFiLTMyN2U5MGRlY2Q5MCIsImFjciI6IjAiLCJhbGxvd2VkLW9yaWdpbnMiOlsiaHR0cDovL2xvY2FsaG9zdDozMDAwIl0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJSZW1vdmVyIiwidmlld1VzZXJzIiwiYXV0aG9yaXplciIsIkNSRUFURV9VU0VSIiwiQXV0aG9yaXplciIsImRlbGV0ZVVzZXJzIiwiaW5wdXR0ZXIiLCJBZGRlciJdfSwicmVzb3VyY2VfYWNjZXNzIjp7InJlYWxtLW1hbmFnZW1lbnQiOnsicm9sZXMiOlsidmlldy1pZGVudGl0eS1wcm92aWRlcnMiLCJ2aWV3LXJlYWxtIiwibWFuYWdlLWlkZW50aXR5LXByb3ZpZGVycyIsImltcGVyc29uYXRpb24iLCJyZWFsbS1hZG1pbiIsImNyZWF0ZS1jbGllbnQiLCJtYW5hZ2UtdXNlcnMiLCJxdWVyeS1yZWFsbXMiLCJ2aWV3LWF1dGhvcml6YXRpb24iLCJxdWVyeS1jbGllbnRzIiwicXVlcnktdXNlcnMiLCJtYW5hZ2UtZXZlbnRzIiwibWFuYWdlLXJlYWxtIiwidmlldy1ldmVudHMiLCJ2aWV3LXVzZXJzIiwidmlldy1jbGllbnRzIiwibWFuYWdlLWF1dGhvcml6YXRpb24iLCJtYW5hZ2UtY2xpZW50cyIsInF1ZXJ5LWdyb3VwcyJdfSwiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJvcGVuaWQgZW1haWwgcHJvZmlsZSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwicHJlZmVycmVkX3VzZXJuYW1lIjoiaXNhbTEifQ.FludV9BVqMO_C51ChiR83_dyPsh397pY3zVAKlyHzJh85bQx6hrxE2Ro3gvEy86P62_AoHlQn8clzAvh4-EURj7rr9wFxd7noZwbtuUUS9S4wSrnVrAIThMwPxe98De89snPAsmhTpPUqLc8iHGOHm6_JNXYdtiktDgX0-MZX8SuPtHv2CRvNx8CWckQf14-qwBEsmXVbXoSpglNxsBqW8lw4MvaAqv113jL3iJry26B3JLYUHD9jYWqwibz347Az-Jji5iUwAr1SeJW0nSzAGj9ekbdRgitAy4BrcHbaiaSpFv-tkYUPx9CSrRcVv9NDcg_TlLtnpjcG082wMWLzA',
  //     // 'Content-Type': 'application/json'
  //   },
  //  data:{
  //    username:'testing@THIS',
  //    email:'this@that'
  //  }}
  //   );
    // .then((res) => {
    //     alert("User Deleted Successfully");
    //   console.log("User Deleted ", res);
    // })
    // .catch((err) => {
    //   console.log("Error: ", err);
    // })

  var options = {
    url: 'http://localhost:7000/users/delete',
    headers: {
      'token': 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICI4U0JtN2NDMHZ0WFdubXRNOUhwX1F1OU5Scnh1bF9jdG9rdkRyRVJhdG8wIn0.eyJqdGkiOiI2NDRkZGUyMy1hOWMxLTQwN2UtOTM4Yy03MTdkMzJiNjFhM2IiLCJleHAiOjE1NTQxMzgwOTAsIm5iZiI6MCwiaWF0IjoxNTU0MTEzNjY1LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvYXV0aC9yZWFsbXMvaXNhbSIsImF1ZCI6ImlucHV0LWF1dGgtYXBwIiwic3ViIjoiNzVkNDFkYmUtMjgxNi00MDU1LThiYWUtODJiOTUwNjU5ZDM3IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiaW5wdXQtYXV0aC1hcHAiLCJub25jZSI6IjQ1MGQ1OGY5LTQ4MTYtNDQ2Ny04N2Y0LTkxNjExYmI2ODUwZiIsImF1dGhfdGltZSI6MTU1NDEwMjA5MCwic2Vzc2lvbl9zdGF0ZSI6IjVlMWQwODM3LWM2YjAtNGJlMC1hNWFiLTMyN2U5MGRlY2Q5MCIsImFjciI6IjAiLCJhbGxvd2VkLW9yaWdpbnMiOlsiaHR0cDovL2xvY2FsaG9zdDozMDAwIl0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJSZW1vdmVyIiwidmlld1VzZXJzIiwiYXV0aG9yaXplciIsIkNSRUFURV9VU0VSIiwiQXV0aG9yaXplciIsImRlbGV0ZVVzZXJzIiwiaW5wdXR0ZXIiLCJBZGRlciJdfSwicmVzb3VyY2VfYWNjZXNzIjp7InJlYWxtLW1hbmFnZW1lbnQiOnsicm9sZXMiOlsidmlldy1pZGVudGl0eS1wcm92aWRlcnMiLCJ2aWV3LXJlYWxtIiwibWFuYWdlLWlkZW50aXR5LXByb3ZpZGVycyIsImltcGVyc29uYXRpb24iLCJyZWFsbS1hZG1pbiIsImNyZWF0ZS1jbGllbnQiLCJtYW5hZ2UtdXNlcnMiLCJxdWVyeS1yZWFsbXMiLCJ2aWV3LWF1dGhvcml6YXRpb24iLCJxdWVyeS1jbGllbnRzIiwicXVlcnktdXNlcnMiLCJtYW5hZ2UtZXZlbnRzIiwibWFuYWdlLXJlYWxtIiwidmlldy1ldmVudHMiLCJ2aWV3LXVzZXJzIiwidmlldy1jbGllbnRzIiwibWFuYWdlLWF1dGhvcml6YXRpb24iLCJtYW5hZ2UtY2xpZW50cyIsInF1ZXJ5LWdyb3VwcyJdfSwiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJvcGVuaWQgZW1haWwgcHJvZmlsZSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwicHJlZmVycmVkX3VzZXJuYW1lIjoiaXNhbTEifQ.FludV9BVqMO_C51ChiR83_dyPsh397pY3zVAKlyHzJh85bQx6hrxE2Ro3gvEy86P62_AoHlQn8clzAvh4-EURj7rr9wFxd7noZwbtuUUS9S4wSrnVrAIThMwPxe98De89snPAsmhTpPUqLc8iHGOHm6_JNXYdtiktDgX0-MZX8SuPtHv2CRvNx8CWckQf14-qwBEsmXVbXoSpglNxsBqW8lw4MvaAqv113jL3iJry26B3JLYUHD9jYWqwibz347Az-Jji5iUwAr1SeJW0nSzAGj9ekbdRgitAy4BrcHbaiaSpFv-tkYUPx9CSrRcVv9NDcg_TlLtnpjcG082wMWLzA',
      'username':deleteUser
    },
    form:{
    username:"rivaldo",
    email:"fs@kjgf.lk"}
  };
   
  function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
      var info = JSON.parse(body);
      console.log(info);
      console.log(response);
    }
  }
   
  request.post(options, callback);
        }
 

render() { 
  return (
        <div>                    
            <h1>Delete Users</h1>            
            <ul>
                {this.state.keycloakUsers.map((user) =>
                 <li key={user.id}>
                    <label>{user.username}</label>
                    <Button variant="contained" color="secondary" onClick={() => this.handleUserDelete(user.username)}>
                    Delete User    
                    </Button>
                 </li>   
                 )}
            </ul>    
      </div>
    );
  }
}

export default DeleteUser;