import React, {Component } from 'react';
import { connect } from 'react-redux';

import UserContainer from '../UserPage/UserContainer'; 



class UserPage extends Component {

render() {


  return (

      <div>
      <h1 id="welcome">
        Welcome, { this.props.reduxState.user.username }! </h1>
     
     {/* <TruckMapContainer/> */}
     <UserContainer/>
      
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
