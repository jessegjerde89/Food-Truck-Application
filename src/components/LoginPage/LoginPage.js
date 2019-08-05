import React, { Component } from 'react';
import { connect } from 'react-redux';

import { TextField, Button, Grid } from '@material-ui/core';

import './LoginPage.css'

class LoginPage extends Component {
  state = {
    username: '',
    password: '',
  };

  login = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'LOGIN',
        payload: {
          username: this.state.username,
          password: this.state.password,
        },
      });
    } else {
      this.props.dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  } // end login

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  render() {


    return (
      <div className="wrapper">
        {this.props.errors.loginMessage && (
          <h2
            className="alert"
            role="alert"
          >
            {this.props.errors.loginMessage}
          </h2>
        )}
        <div className="loginForm">
        <form onSubmit={this.login}>
          <div className="title">
         Login
          </div>
          <div id="textfields">
           <div>
              <TextField
                type="text"
                label="username"
                variant="outlined"
                required
                value={this.state.username}
                onChange={this.handleInputChangeFor('username')}
              />
              </div><div>
              <TextField
                type="password"
                label="password"
                variant="outlined"
                required
                value={this.state.password}
                onChange={this.handleInputChangeFor('password')}
              />
           </div>
          </div>
          <div id="button">
            <Button
              type="submit"
              name="submit"
              color="secondary"
              variant ="contained"
              value="Log In"
              style={{}}
            >
              Submit
              </Button>
          </div>
          {/* </FormControl> */}
       
      
        <div id="button">
          <Button
            type="button"
            color="primary"
            variant="contained"
            onClick={() => {this.props.dispatch({type: 'SET_TO_REGISTER_MODE'})}}
          >
            Register
          </Button>
          </div>

          </form>
        </div> 
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

export default connect(mapStateToProps)(LoginPage);
