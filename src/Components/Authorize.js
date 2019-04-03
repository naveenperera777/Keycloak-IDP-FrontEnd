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

authorizeCreateUser = (authorizeuser) => { 

    
    console.log("auth",authorizeuser);

    var postData = {
      "auth_type":"CREATE_USER",
        "id":authorizeuser.ID,
        "username":authorizeuser.USERNAME,
        "email":authorizeuser.email,
        "epf-number":authorizeuser.EPFNO,
        "branch":authorizeuser.BRANCH,
        "department":authorizeuser.DEPARTMENT,
        "mobile_number":authorizeuser.MOBILE_NUMBER,
        "start_date":authorizeuser.START_DATE,
        "end_date":authorizeuser.END_DATE,
        "password":authorizeuser.PASSWORD,
        "name":authorizeuser.NAME,
        "userRole":[authorizeuser.USER_ROLE],
        "creator":"d" 
          
    };
    
    let axiosConfig = {
      headers: {
          "token":"eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICI4U0JtN2NDMHZ0WFdubXRNOUhwX1F1OU5Scnh1bF9jdG9rdkRyRVJhdG8wIn0.eyJqdGkiOiIzOTY5Nzg3NS0zYzQ5LTQxOTUtYTI3Yy1hYmU0YzYyYTJjZGEiLCJleHAiOjE1NTQyMTQ5MjAsIm5iZiI6MCwiaWF0IjoxNTU0MTc5NjI5LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvYXV0aC9yZWFsbXMvaXNhbSIsImF1ZCI6ImlucHV0LWF1dGgtYXBwIiwic3ViIjoiNzVkNDFkYmUtMjgxNi00MDU1LThiYWUtODJiOTUwNjU5ZDM3IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiaW5wdXQtYXV0aC1hcHAiLCJub25jZSI6ImNlZDFiZjBhLTM3MGItNDIwMi04ZjQxLTAxM2U4ZWRjMTNjMyIsImF1dGhfdGltZSI6MTU1NDE3ODkyMCwic2Vzc2lvbl9zdGF0ZSI6IjliOTUzNTkyLWI3MDktNDQxMi05OTY1LTY2OTUwMmM2Zjk2MCIsImFjciI6IjAiLCJhbGxvd2VkLW9yaWdpbnMiOlsiaHR0cDovL2xvY2FsaG9zdDozMDAwIl0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJSZW1vdmVyIiwidmlld1VzZXJzIiwiYXV0aG9yaXplciIsIkNSRUFURV9VU0VSIiwiQXV0aG9yaXplciIsImRlbGV0ZVVzZXJzIiwiaW5wdXR0ZXIiLCJBZGRlciJdfSwicmVzb3VyY2VfYWNjZXNzIjp7InJlYWxtLW1hbmFnZW1lbnQiOnsicm9sZXMiOlsidmlldy1pZGVudGl0eS1wcm92aWRlcnMiLCJ2aWV3LXJlYWxtIiwibWFuYWdlLWlkZW50aXR5LXByb3ZpZGVycyIsImltcGVyc29uYXRpb24iLCJyZWFsbS1hZG1pbiIsImNyZWF0ZS1jbGllbnQiLCJtYW5hZ2UtdXNlcnMiLCJxdWVyeS1yZWFsbXMiLCJ2aWV3LWF1dGhvcml6YXRpb24iLCJxdWVyeS1jbGllbnRzIiwicXVlcnktdXNlcnMiLCJtYW5hZ2UtZXZlbnRzIiwibWFuYWdlLXJlYWxtIiwidmlldy1ldmVudHMiLCJ2aWV3LXVzZXJzIiwidmlldy1jbGllbnRzIiwibWFuYWdlLWF1dGhvcml6YXRpb24iLCJtYW5hZ2UtY2xpZW50cyIsInF1ZXJ5LWdyb3VwcyJdfSwiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJvcGVuaWQgZW1haWwgcHJvZmlsZSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwicHJlZmVycmVkX3VzZXJuYW1lIjoiaXNhbTEifQ.kDtREiZuz1bZ84NNOVKtKr262GxxLF8kLKtRzKSD2BID7WSe4R7-nq-gYZhd5b0k1dzaO8bDPoyG33PeIGk2vOzIJGR90lEq57yXa46ALTuvyKj5K5t9vZDL-Wl2UyPWELDvugErqGenBRnwdmxTA1iYjuBuODhiLXdIyhB-z6Vejew7ptXfIvTQzLqKnoik4k4vyVbvOio2pJjwLlbRsNrjXZK6UgIqf-tTC9_HorR-CHaIQLBT5Nl3ZyN8TbAsKF1ZArqlYQ8V7ugAwOvd_f5DU8b2412BJjGyxmJmfsw174veffpBWTpZbtdfpJD9vdORgL7brh2sBohuTpet7Q",
          'Content-Type': 'application/json;charset=UTF-8',
          "Access-Control-Allow-Origin": "*",
      }
    };
    
    axios.post('http://localhost:7000/users/auth', postData, axiosConfig)
    .then((res) => {
      console.log("RESPONSE RECEIVED: ", res);
    })
    .catch((err) => {
      alert(err);
    })
    }  

authorizeEditUser = (edituser) => {
 

  var postData = {
    "auth_type":"EDIT_USER",
      "id":edituser.ID,
      "username":edituser.USERNAME,
      "email":edituser.email,
      "epf-number":edituser.EPFNO,
      "branch":edituser.BRANCH,
      "department":edituser.DEPARTMENT,
      "mobile_number":edituser.MOBILE_NUMBER,
      "start_date":edituser.START_DATE,
      "end_date":edituser.END_DATE,
      "password":edituser.PASSWORD,
      "name":edituser.NAME,
      "userRole":[edituser.USER_ROLE],
      "creator":"d" 
        
  };
  
  let axiosConfig = {
    headers: {
        "token":"eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICI4U0JtN2NDMHZ0WFdubXRNOUhwX1F1OU5Scnh1bF9jdG9rdkRyRVJhdG8wIn0.eyJqdGkiOiIzOTY5Nzg3NS0zYzQ5LTQxOTUtYTI3Yy1hYmU0YzYyYTJjZGEiLCJleHAiOjE1NTQyMTQ5MjAsIm5iZiI6MCwiaWF0IjoxNTU0MTc5NjI5LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvYXV0aC9yZWFsbXMvaXNhbSIsImF1ZCI6ImlucHV0LWF1dGgtYXBwIiwic3ViIjoiNzVkNDFkYmUtMjgxNi00MDU1LThiYWUtODJiOTUwNjU5ZDM3IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiaW5wdXQtYXV0aC1hcHAiLCJub25jZSI6ImNlZDFiZjBhLTM3MGItNDIwMi04ZjQxLTAxM2U4ZWRjMTNjMyIsImF1dGhfdGltZSI6MTU1NDE3ODkyMCwic2Vzc2lvbl9zdGF0ZSI6IjliOTUzNTkyLWI3MDktNDQxMi05OTY1LTY2OTUwMmM2Zjk2MCIsImFjciI6IjAiLCJhbGxvd2VkLW9yaWdpbnMiOlsiaHR0cDovL2xvY2FsaG9zdDozMDAwIl0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJSZW1vdmVyIiwidmlld1VzZXJzIiwiYXV0aG9yaXplciIsIkNSRUFURV9VU0VSIiwiQXV0aG9yaXplciIsImRlbGV0ZVVzZXJzIiwiaW5wdXR0ZXIiLCJBZGRlciJdfSwicmVzb3VyY2VfYWNjZXNzIjp7InJlYWxtLW1hbmFnZW1lbnQiOnsicm9sZXMiOlsidmlldy1pZGVudGl0eS1wcm92aWRlcnMiLCJ2aWV3LXJlYWxtIiwibWFuYWdlLWlkZW50aXR5LXByb3ZpZGVycyIsImltcGVyc29uYXRpb24iLCJyZWFsbS1hZG1pbiIsImNyZWF0ZS1jbGllbnQiLCJtYW5hZ2UtdXNlcnMiLCJxdWVyeS1yZWFsbXMiLCJ2aWV3LWF1dGhvcml6YXRpb24iLCJxdWVyeS1jbGllbnRzIiwicXVlcnktdXNlcnMiLCJtYW5hZ2UtZXZlbnRzIiwibWFuYWdlLXJlYWxtIiwidmlldy1ldmVudHMiLCJ2aWV3LXVzZXJzIiwidmlldy1jbGllbnRzIiwibWFuYWdlLWF1dGhvcml6YXRpb24iLCJtYW5hZ2UtY2xpZW50cyIsInF1ZXJ5LWdyb3VwcyJdfSwiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJvcGVuaWQgZW1haWwgcHJvZmlsZSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwicHJlZmVycmVkX3VzZXJuYW1lIjoiaXNhbTEifQ.kDtREiZuz1bZ84NNOVKtKr262GxxLF8kLKtRzKSD2BID7WSe4R7-nq-gYZhd5b0k1dzaO8bDPoyG33PeIGk2vOzIJGR90lEq57yXa46ALTuvyKj5K5t9vZDL-Wl2UyPWELDvugErqGenBRnwdmxTA1iYjuBuODhiLXdIyhB-z6Vejew7ptXfIvTQzLqKnoik4k4vyVbvOio2pJjwLlbRsNrjXZK6UgIqf-tTC9_HorR-CHaIQLBT5Nl3ZyN8TbAsKF1ZArqlYQ8V7ugAwOvd_f5DU8b2412BJjGyxmJmfsw174veffpBWTpZbtdfpJD9vdORgL7brh2sBohuTpet7Q",
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
    }
  };
  
  axios.post('http://localhost:7000/users/auth', postData, axiosConfig)
  .then((res) => {
    console.log("RESPONSE RECEIVED: ", res);
  })
  .catch((err) => {
    alert(err);
  })


}  

authorizeDeleteUser = (deleteUser) => {
  console.log(deleteUser);
// axios.post('http://localhost:7000/users/auth', {  
//   data : {
//     "auth_type":"DELETE_USER",
// 	  "username":"rick"
//   } ,
//   headers:{
//     'Content-Type': 'application/json',
//     'token':'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICI4U0JtN2NDMHZ0WFdubXRNOUhwX1F1OU5Scnh1bF9jdG9rdkRyRVJhdG8wIn0.eyJqdGkiOiIzOTY5Nzg3NS0zYzQ5LTQxOTUtYTI3Yy1hYmU0YzYyYTJjZGEiLCJleHAiOjE1NTQyMTQ5MjAsIm5iZiI6MCwiaWF0IjoxNTU0MTc5NjI5LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvYXV0aC9yZWFsbXMvaXNhbSIsImF1ZCI6ImlucHV0LWF1dGgtYXBwIiwic3ViIjoiNzVkNDFkYmUtMjgxNi00MDU1LThiYWUtODJiOTUwNjU5ZDM3IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiaW5wdXQtYXV0aC1hcHAiLCJub25jZSI6ImNlZDFiZjBhLTM3MGItNDIwMi04ZjQxLTAxM2U4ZWRjMTNjMyIsImF1dGhfdGltZSI6MTU1NDE3ODkyMCwic2Vzc2lvbl9zdGF0ZSI6IjliOTUzNTkyLWI3MDktNDQxMi05OTY1LTY2OTUwMmM2Zjk2MCIsImFjciI6IjAiLCJhbGxvd2VkLW9yaWdpbnMiOlsiaHR0cDovL2xvY2FsaG9zdDozMDAwIl0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJSZW1vdmVyIiwidmlld1VzZXJzIiwiYXV0aG9yaXplciIsIkNSRUFURV9VU0VSIiwiQXV0aG9yaXplciIsImRlbGV0ZVVzZXJzIiwiaW5wdXR0ZXIiLCJBZGRlciJdfSwicmVzb3VyY2VfYWNjZXNzIjp7InJlYWxtLW1hbmFnZW1lbnQiOnsicm9sZXMiOlsidmlldy1pZGVudGl0eS1wcm92aWRlcnMiLCJ2aWV3LXJlYWxtIiwibWFuYWdlLWlkZW50aXR5LXByb3ZpZGVycyIsImltcGVyc29uYXRpb24iLCJyZWFsbS1hZG1pbiIsImNyZWF0ZS1jbGllbnQiLCJtYW5hZ2UtdXNlcnMiLCJxdWVyeS1yZWFsbXMiLCJ2aWV3LWF1dGhvcml6YXRpb24iLCJxdWVyeS1jbGllbnRzIiwicXVlcnktdXNlcnMiLCJtYW5hZ2UtZXZlbnRzIiwibWFuYWdlLXJlYWxtIiwidmlldy1ldmVudHMiLCJ2aWV3LXVzZXJzIiwidmlldy1jbGllbnRzIiwibWFuYWdlLWF1dGhvcml6YXRpb24iLCJtYW5hZ2UtY2xpZW50cyIsInF1ZXJ5LWdyb3VwcyJdfSwiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJvcGVuaWQgZW1haWwgcHJvZmlsZSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwicHJlZmVycmVkX3VzZXJuYW1lIjoiaXNhbTEifQ.kDtREiZuz1bZ84NNOVKtKr262GxxLF8kLKtRzKSD2BID7WSe4R7-nq-gYZhd5b0k1dzaO8bDPoyG33PeIGk2vOzIJGR90lEq57yXa46ALTuvyKj5K5t9vZDL-Wl2UyPWELDvugErqGenBRnwdmxTA1iYjuBuODhiLXdIyhB-z6Vejew7ptXfIvTQzLqKnoik4k4vyVbvOio2pJjwLlbRsNrjXZK6UgIqf-tTC9_HorR-CHaIQLBT5Nl3ZyN8TbAsKF1ZArqlYQ8V7ugAwOvd_f5DU8b2412BJjGyxmJmfsw174veffpBWTpZbtdfpJD9vdORgL7brh2sBohuTpet7Q'
//   }
// })
// .then((res) => {
// alert(res);
// })
// .catch((err) => {
// alert(err);
// })

var postData = {
  "auth_type":"DELETE_USER",
    "username":deleteUser
    
};

let axiosConfig = {
  headers: {
       "token":"eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICI4U0JtN2NDMHZ0WFdubXRNOUhwX1F1OU5Scnh1bF9jdG9rdkRyRVJhdG8wIn0.eyJqdGkiOiIzOTY5Nzg3NS0zYzQ5LTQxOTUtYTI3Yy1hYmU0YzYyYTJjZGEiLCJleHAiOjE1NTQyMTQ5MjAsIm5iZiI6MCwiaWF0IjoxNTU0MTc5NjI5LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvYXV0aC9yZWFsbXMvaXNhbSIsImF1ZCI6ImlucHV0LWF1dGgtYXBwIiwic3ViIjoiNzVkNDFkYmUtMjgxNi00MDU1LThiYWUtODJiOTUwNjU5ZDM3IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiaW5wdXQtYXV0aC1hcHAiLCJub25jZSI6ImNlZDFiZjBhLTM3MGItNDIwMi04ZjQxLTAxM2U4ZWRjMTNjMyIsImF1dGhfdGltZSI6MTU1NDE3ODkyMCwic2Vzc2lvbl9zdGF0ZSI6IjliOTUzNTkyLWI3MDktNDQxMi05OTY1LTY2OTUwMmM2Zjk2MCIsImFjciI6IjAiLCJhbGxvd2VkLW9yaWdpbnMiOlsiaHR0cDovL2xvY2FsaG9zdDozMDAwIl0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJSZW1vdmVyIiwidmlld1VzZXJzIiwiYXV0aG9yaXplciIsIkNSRUFURV9VU0VSIiwiQXV0aG9yaXplciIsImRlbGV0ZVVzZXJzIiwiaW5wdXR0ZXIiLCJBZGRlciJdfSwicmVzb3VyY2VfYWNjZXNzIjp7InJlYWxtLW1hbmFnZW1lbnQiOnsicm9sZXMiOlsidmlldy1pZGVudGl0eS1wcm92aWRlcnMiLCJ2aWV3LXJlYWxtIiwibWFuYWdlLWlkZW50aXR5LXByb3ZpZGVycyIsImltcGVyc29uYXRpb24iLCJyZWFsbS1hZG1pbiIsImNyZWF0ZS1jbGllbnQiLCJtYW5hZ2UtdXNlcnMiLCJxdWVyeS1yZWFsbXMiLCJ2aWV3LWF1dGhvcml6YXRpb24iLCJxdWVyeS1jbGllbnRzIiwicXVlcnktdXNlcnMiLCJtYW5hZ2UtZXZlbnRzIiwibWFuYWdlLXJlYWxtIiwidmlldy1ldmVudHMiLCJ2aWV3LXVzZXJzIiwidmlldy1jbGllbnRzIiwibWFuYWdlLWF1dGhvcml6YXRpb24iLCJtYW5hZ2UtY2xpZW50cyIsInF1ZXJ5LWdyb3VwcyJdfSwiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJvcGVuaWQgZW1haWwgcHJvZmlsZSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwicHJlZmVycmVkX3VzZXJuYW1lIjoiaXNhbTEifQ.kDtREiZuz1bZ84NNOVKtKr262GxxLF8kLKtRzKSD2BID7WSe4R7-nq-gYZhd5b0k1dzaO8bDPoyG33PeIGk2vOzIJGR90lEq57yXa46ALTuvyKj5K5t9vZDL-Wl2UyPWELDvugErqGenBRnwdmxTA1iYjuBuODhiLXdIyhB-z6Vejew7ptXfIvTQzLqKnoik4k4vyVbvOio2pJjwLlbRsNrjXZK6UgIqf-tTC9_HorR-CHaIQLBT5Nl3ZyN8TbAsKF1ZArqlYQ8V7ugAwOvd_f5DU8b2412BJjGyxmJmfsw174veffpBWTpZbtdfpJD9vdORgL7brh2sBohuTpet7Q",
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
  }
};

axios.post('http://localhost:7000/users/auth', postData, axiosConfig)
.then((res) => {
  console.log("RESPONSE RECEIVED: ", res);
})
.catch((err) => {
  alert("404, User not found in the keyclaok database");
})
}

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
            return <Button variant="contained" color="primary" onClick={() => this.authorizeCreateUser(user)}>
            Authorize Create   
            </Button>
          case 'EDIT_USER':
            return <Button variant="contained" color="default" onClick={() => this.authorizeEditUser(user)}>
            Authorize Edit
            </Button>
          case 'DELETE_USER':
          return <Button variant="contained" color="secondary" onClick={() => this.authorizeDeleteUser(user.USERNAME)}>
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
