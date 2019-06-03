import React, {Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
require('dotenv').config()


class UserPage extends Component {

render() {
  return (

      <div>
      <h1 id="welcome">
        Welcome, { this.props.reduxState.user.username }!
      </h1>
      {/* <p>Your ID is: {props.user.id}</p> */}
      <LogOutButton className="log-in" />
    </div>

    )
  }
}



const mapStateToProps = state => ({
 
});


export default connect(mapStateToProps)(UserPage);
