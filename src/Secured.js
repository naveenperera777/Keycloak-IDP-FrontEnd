import React, { Component } from 'react';
import Keycloak from 'keycloak-js';
import axios from 'axios';
import Authorize from './Authorize';

class Secured extends Component {

  constructor(props) {
    super(props);
    this.state = { keycloak: null, authenticated: false , backendData: null};  
  }

componentDidMount = () => {  
    const keycloak = Keycloak("/keycloak.json");
    keycloak.init({ onLoad: 'login-required' }).success(authenticated => {
      this.setState({ keycloak: keycloak, authenticated: authenticated },
        function () {
          axios.get('http://localhost:8080/auth/admin/realms/isam/users', { headers: { 'Authorization': ' Bearer ' + this.state.keycloak.token } })
          .then(res => this.setState({ backendData: res.data }));
          console.log("DidMount",this.state.keycloak.token);
     });
    }).error(err => {
      alert(err);
    });       
    
  }

  showData = () => {
    // router.post("/users/add",function(req,res){
      console.log(this.state.keycloak.token);
      // axios.post('http://192.168.8.40:7000/users',{
      //     headers: {'Authorization' : ' Bearer ' + this.state.keycloak.token},
      //     data:{
      //         "username":"isam777"
      //     }
      // });
      axios.post('http://requestbin.fullcontact.com/11838se1', { 
        headers: { 'token':  this.state.keycloak.token ,
              'Access-Control-Allow-Origin': '*'}
            });
      // axios.get('http://localhost:8080/auth/admin/realms/isam/users', { headers: { 'Authorization': ' Bearer ' + this.state.keycloak.token } })
  
          // .then(function(response){
          //     console.log(response);
          // })
          // .catch(function(error){
          //     console.log(error);
          // })
            
          
  }
  // )
    
        
      
  fetchBackendData = () => {
    
    // console.log(this.state.keycloak.token);
    // axios.get('http://localhost:8080/auth/admin/realms/isam/users', { headers: { 'Authorization': ' Bearer ' + this.state.keycloak.token } })
    //   .then(res => this.setState({ backendData: res.data }));
        }
   
        

  render() {
    
      // console.log(this.state.keycloak.token);
      //check on this
      // var first = this.state.backendData[];

      const data = this.state.backendData;
      // const listItems = data.map((d) => <li key={d.username}>{d.username}</li>);

      
      console.log("auth",this.state.backendData);   

    if (this.state.keycloak) {
      if (this.state.authenticated) 
       return (
        <div>
         {/* {listItems} */}
          {/* {this.state.backendData} */}
          {/* {console.log("check this too",first)} */}
          {/* {console.log("check this",this.state.backendData)} */}
          <Authorize />
          <p>This is a Keycloak-secured component of your application. You shouldn't be able
          to see this unless you've authenticated with Keycloak.</p>
      <button onClick={this.fetchBackendData}>Fetch Data</button>
     
      <button onClick={this.showData}>Show Data</button>

       
        </div>
      ); else return (<div>Unable to authenticate!</div>)
    }
    
    return (
      <div>Initializing Keycloak...
      </div>
    );
  }
}
export default Secured;