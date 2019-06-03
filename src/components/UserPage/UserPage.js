import React, {Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import UserContainer from '../UserPage/UserContainer'; 
import TruckMapContainer from '../MapComponents/TruckMapContainer';


class UserPage extends Component {

render() {


const API_KEY = process.env.REACT_APP_GOOGLE_KEY; 

  return (

      <div>
      <h1 id="welcome">
        Welcome, { this.props.reduxState.user.username }! </h1>
     
     {/* <TruckMapContainer/> */}
     <UserContainer/>
      <LogOutButton className="log-in" />

    </div>

    )
  }
}



const mapStateToProps = reduxState => {
 return {
  reduxState
 }
};


export default connect(mapStateToProps)(UserPage);
