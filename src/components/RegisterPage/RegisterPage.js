import React, { Component } from 'react';
import {connect} from 'react-redux';

import { TextField, Button } from '@material-ui/core';

import './RegisterPage.css'

class RegisterPage extends Component {
  state = {
    username: '',
    password: '',
    isvendor: '',
    vendorname: ''
  };

  registerUser = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'REGISTER',
        payload: {
          username: this.state.username,
          password: this.state.password,
          isvendor: this.state.isvendor,
          vendorname: this.state.vendorname
        },
      });
    } else {
      this.props.dispatch({type: 'REGISTRATION_INPUT_ERROR'});
    }
  } // end registerUser

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  render() {

    return (
      <div className="wrapper">
        {this.props.errors.registrationMessage && (
          <h2
            className="alert"
            role="alert"
          >
            {this.props.errors.registrationMessage}
          </h2>
        )}
         <div className="box">
           <span>
        <form className="form" onSubmit={this.registerUser}>

          <div className="title">
            Register User / Vendor
          </div>
            <div className = "fields">
          <div>
       
              <TextField
                type="text"
                // name="username"
                label="username"
                variant="outlined"
                required
                autoFocus
                value={this.state.username}
                onChange={this.handleInputChangeFor('username')}
              />
        
          </div>
          <div>
        
              <TextField
                type="password"
                // name="password"
                label="password"
                variant ="outlined"
                required
                autoFocus
                value={this.state.password}
                onChange={this.handleInputChangeFor('password')}
              />
  
          </div>
          <div> 
            
            <TextField
              type="text"
              // name="vendor_name"
              label="vendor_name"
              variant ="outlined"
              autoFocus
              value={this.state.vendorname}
              onChange={this.handleInputChangeFor('vendorname')}
              />
           
          </div>
          <div>

            <TextField 
            type="boolean"
            // name="isvendor"
            label="Are You a Vendor"
            variant = "outlined"
            autoFocus
            value={this.state.isvendor}
            onChange={this.handleInputChangeFor('isvendor')}
            />
         
          </div>
          <div id="button">
            <Button
              type="submit"
              color="secondary"
              variant="contained"
              value="Register"
              >
                Register
              </Button>
          </div>
       
        <div id="button">
          <Button
            type="button"
            color="primary"
            variant = "contained"
            onClick={() => {this.props.dispatch({type: 'SET_TO_LOGIN_MODE'})}}
          >
            Login
          </Button>
          </div>

        </div>
          </form>
           </span>
          </div>
          
          {/* <button
            type="button"
            className="link-button"
            onClick={() => {this.props.dispatch({type: 'SET_TO_LOGIN_MODE'})}}
          >
            Register Vendor
          </button> */}
        {/* </center> */}
      </div>
    );
  }
}

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = state => ({
  errors: state.errors,
});

export default connect(mapStateToProps)(RegisterPage);

