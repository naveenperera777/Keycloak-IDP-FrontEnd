import React, { Component } from 'react';
import axios from 'axios';
import  Button  from '@material-ui/core/Button';

var request = require('request');

class Authorize extends Component {

constructor(props) {
super(props);
this.state = { users:[{id:1,name:'naveen',age:21},
{id:2, name:'perera',age:22}] , userData:[{id: "" ,username:"",email:""}],
  oracleData:[{
    "USERNAME": "Rick",
    "EMAIL": "rickr@.com",
    "CREATOR": "isam",
    "ID": 103,
    "NAME": "tim",
    "EPFNO": "11dreqfds",
    "BRANCH": "branch2",
    "DEPARTMENT": "dep3",
    "MOBILE_NUMBER": "07779677",
    "START_DATE": "2018-12-31T18:30:00.000Z",
    "END_DATE": "2019-12-31T18:30:00.000Z",
    "USER_STATUS": "true",
    "PASSWORD": "pass",
    "USER_ROLE": "inputter",
    "AUTH_TYPE": "CREATE_USER",
    "STATE": 1
  }]};  

}

componentDidMount = () => {  
console.log("NewMount",this.props.token)
    axios.get('http://localhost:7000/authTasks',{
    headers:{
           'token': this.props.token
     
    }})    
    .then((res) => { 
      console.log("res",res);
      this.setState({ oracleData: res.data },
        function(){
            console.log("yolo",res.data);
            console.log("yes",this.state.oracleData);
       } 
       )
      console.log(res.data);
    })
    console.log("herer");
    console.log("with",this.state.oracleData );
    // var options = {
    //   url: 'http://localhost:7000/authTasks',
    //   headers: {
    //     'token ': 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICI4U0JtN2NDMHZ0WFdubXRNOUhwX1F1OU5Scnh1bF9jdG9rdkRyRVJhdG8wIn0.eyJqdGkiOiJmODA5NWY0YS03ODg1LTRlNzYtYTZjMS00OGQ5MGE1MmU1ODMiLCJleHAiOjE1NTQxMzQwNjEsIm5iZiI6MCwiaWF0IjoxNTU0MDk5MTQwLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvYXV0aC9yZWFsbXMvaXNhbSIsImF1ZCI6ImlucHV0LWF1dGgtYXBwIiwic3ViIjoiNzVkNDFkYmUtMjgxNi00MDU1LThiYWUtODJiOTUwNjU5ZDM3IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiaW5wdXQtYXV0aC1hcHAiLCJub25jZSI6Ijg2M2ZjZjg3LTY4ZWItNDAwZi04OTAzLTYxZTA3OWU2OTM2ZSIsImF1dGhfdGltZSI6MTU1NDA5ODA2MSwic2Vzc2lvbl9zdGF0ZSI6ImRiMmQ5ZTg4LTU4MmQtNGJmYy1hNGU4LWI5NTg2NDNlMmM5YiIsImFjciI6IjAiLCJhbGxvd2VkLW9yaWdpbnMiOlsiaHR0cDovL2xvY2FsaG9zdDozMDAwIl0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJSZW1vdmVyIiwidmlld1VzZXJzIiwiYXV0aG9yaXplciIsIkNSRUFURV9VU0VSIiwiQXV0aG9yaXplciIsImlucHV0dGVyIiwiQWRkZXIiXX0sInJlc291cmNlX2FjY2VzcyI6eyJyZWFsbS1tYW5hZ2VtZW50Ijp7InJvbGVzIjpbInZpZXctaWRlbnRpdHktcHJvdmlkZXJzIiwidmlldy1yZWFsbSIsIm1hbmFnZS1pZGVudGl0eS1wcm92aWRlcnMiLCJpbXBlcnNvbmF0aW9uIiwicmVhbG0tYWRtaW4iLCJjcmVhdGUtY2xpZW50IiwibWFuYWdlLXVzZXJzIiwicXVlcnktcmVhbG1zIiwidmlldy1hdXRob3JpemF0aW9uIiwicXVlcnktY2xpZW50cyIsInF1ZXJ5LXVzZXJzIiwibWFuYWdlLWV2ZW50cyIsIm1hbmFnZS1yZWFsbSIsInZpZXctZXZlbnRzIiwidmlldy11c2VycyIsInZpZXctY2xpZW50cyIsIm1hbmFnZS1hdXRob3JpemF0aW9uIiwibWFuYWdlLWNsaWVudHMiLCJxdWVyeS1ncm91cHMiXX0sImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoib3BlbmlkIGVtYWlsIHByb2ZpbGUiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsInByZWZlcnJlZF91c2VybmFtZSI6ImlzYW0xIn0.VJxCSdXjgQJoPgGMn3V0VtT7bgxzuOIc88FIihkI2FLSMKiMBY-hN22coMELISOWgTVwtazOUnkC4vwtdU00imuIlneSnRfmFAd3qv0b5fwY4zPQ86zDokp6l5TGOFytZkKR2qsP8W-JC_-Fbc9b3nqgM-HhTIyEQKjDC40YF2Wm6zpqSVVArBlFkjQ4SVBiblW5cUw4nbcAqrYOIqCs86r3dRSfByNtgKhkinl29qt4Vp_faKrd1TyKozRFHT_ta3dyL_pXb_xGtDhwtt3LPlcjcHutFGJUlBbgDU5FvuOHCekszCXmMUJKJCGeMVVR3h3kLa_ZHh7Jv5CmutHjug'
    //   }
    // };
     
    // function callback(error, response, body) {
    //   if (!error && response.statusCode == 200) {
    //     var info = JSON.parse(body);
    //     console.log("this!",info);
    //     // console.log("that!",response);

    //   }
    // }
     
    // request(options, callback);
   
}  

authorizeCreateUser = () => { 
  axios.post('http://localhost:7000/users/auth' , {
    headers:{
      "token":"eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICI4U0JtN2NDMHZ0WFdubXRNOUhwX1F1OU5Scnh1bF9jdG9rdkRyRVJhdG8wIn0.eyJqdGkiOiJjZmYyYWUxMS1kMDUwLTQwM2YtOGFkNy1kN2JjNDFkMTU0NGYiLCJleHAiOjE1NTM4ODc3MTUsIm5iZiI6MCwiaWF0IjoxNTUzODU4OTgzLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvYXV0aC9yZWFsbXMvaXNhbSIsImF1ZCI6ImlucHV0LWF1dGgtYXBwIiwic3ViIjoiNzVkNDFkYmUtMjgxNi00MDU1LThiYWUtODJiOTUwNjU5ZDM3IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiaW5wdXQtYXV0aC1hcHAiLCJub25jZSI6IjBkMTg4MDY5LTkxOTUtNDgzNC1hNzRkLTcwOGI5OGRjZWFlZiIsImF1dGhfdGltZSI6MTU1Mzg1MTcxNSwic2Vzc2lvbl9zdGF0ZSI6IjQ3N2UxYmQ5LTgyYjktNDA5ZC05MzAyLTQ3OTBjMGQyNDBiNSIsImFjciI6IjAiLCJhbGxvd2VkLW9yaWdpbnMiOlsiaHR0cDovL2xvY2FsaG9zdDozMDAwIl0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJSZW1vdmVyIiwiYXV0aG9yaXplciIsIkNSRUFURV9VU0VSIiwiQXV0aG9yaXplciIsImlucHV0dGVyIiwiQWRkZXIiXX0sInJlc291cmNlX2FjY2VzcyI6eyJyZWFsbS1tYW5hZ2VtZW50Ijp7InJvbGVzIjpbInZpZXctaWRlbnRpdHktcHJvdmlkZXJzIiwidmlldy1yZWFsbSIsIm1hbmFnZS1pZGVudGl0eS1wcm92aWRlcnMiLCJpbXBlcnNvbmF0aW9uIiwicmVhbG0tYWRtaW4iLCJjcmVhdGUtY2xpZW50IiwibWFuYWdlLXVzZXJzIiwicXVlcnktcmVhbG1zIiwidmlldy1hdXRob3JpemF0aW9uIiwicXVlcnktY2xpZW50cyIsInF1ZXJ5LXVzZXJzIiwibWFuYWdlLWV2ZW50cyIsIm1hbmFnZS1yZWFsbSIsInZpZXctZXZlbnRzIiwidmlldy11c2VycyIsInZpZXctY2xpZW50cyIsIm1hbmFnZS1hdXRob3JpemF0aW9uIiwibWFuYWdlLWNsaWVudHMiLCJxdWVyeS1ncm91cHMiXX0sImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoib3BlbmlkIGVtYWlsIHByb2ZpbGUiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsInByZWZlcnJlZF91c2VybmFtZSI6ImlzYW0xIn0.OKS_EcEK-naWMxiJiHrzY4bGJ0SkykaSrzErdeVIuz1Lf8KvCAioKAnueY_VgwFCaXf-1C1r8l5eF5VVu8bd7dqJL0Anob52iS_lLFdXEqudOec9MWi_pqEfeHjFU0McAT39DlWfJhpRbh3byisJ-IB1XcBSiuZ02hdDPEPcZudWcFwJKY3M1dikf7vsBxZwcgH-QuY3KiCJYc2U8pr4DaEF9nLSxLR6dg1xTD7nykfK3P3jqa9yEV-UmpNhl03WXPAoYYd8JY1h1K6UmcU3MUsxJX2aP_32r4vCw_-Fs6alpnT1PDEsYe6WRr0dF6N2JIQObIq6JNHc2tL4mvXF5A",
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE'
   
    },
    body:{
      "USERNAME": "Howard",
      "EMAIL": "howardatme@.com",
      "CREATOR": "isam",
      "ID": 21,
      "NAME": "tim",
      "EPFNO": "11dreqfds",
      "BRANCH": "branch2",
      "DEPARTMENT": "dep3",
      "MOBILE_NUMBER": "07779677",
      "START_DATE": "2018-12-31T18:30:00.000Z",
      "END_DATE": "2019-12-31T18:30:00.000Z",
      "USER_STATUS": "true",
      "PASSWORD": "pass",
      "USER_ROLE": "inputter",
      "AUTH_TYPE": "CREATE_USER",
      "STATE": 1
    }
  })
    .then((res) => {
      alert(res);
    })
    .catch((err) => {
      alert(err);
    })
  }

authorizeEditUser = () => {
  axios.post('http://localhost:7000/')
    .then((res) => {
      alert(res);
    })
    .catch((err) => {
      alert(err);
    })
}  

authorizeDeleteUser = () => {
axios.get('http://localhost:7000/')
.then((res) => {
alert(res);
})
.catch((err) => {
alert(err);
})}
 
   

render(){
    return(
        <div>
            <h1>Authorize User</h1>
            <ul>
        { this.state.oracleData.map((user) => 
        <li key={ user.ID }> <label>{user.ID} </label>{ user.USERNAME }  
        
        {(() => {
        switch(user.AUTH_TYPE) {
          case 'CREATE_USER':            
            return <Button variant="contained" color="primary" onClick={this.authorizeCreateUser}>
            Authorize Create   
            </Button>
          case 'EDIT_USER':
            return <Button variant="contained" color="default" onClick={this.authorizeEditUser}>
            Authorize Edit
            </Button>
          case 'DELETE_USER':
          return <Button variant="contained" color="secondary" onClick={this.authorizeDeleteUser}>
          Authorize Delete
          </Button>        
        }
      })()}
        
                
        </li>) }
        
        </ul>            
        </div>
    );
}

}

export default Authorize; 
