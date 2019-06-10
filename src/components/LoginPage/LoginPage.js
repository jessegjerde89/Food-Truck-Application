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
        <div className="form">
        <form onSubmit={this.login}>
          <div className="title">
          <span>Login</span>
          </div>
          <div>
           
         
              <TextField
                type="text"
                name="username"
                label="username"
                variant="outlined"
                required
                autoFocus
                value={this.state.username}
                onChange={this.handleInputChangeFor('username')}
              />
              
              <TextField
                type="password"
                name="password"
                label="password"
                variant="outlined"
                required
                autoFocus
                value={this.state.password}
                onChange={this.handleInputChangeFor('password')}
              />
           
          </div>
          <div>
            <Button
              className="log-in"
              type="submit"
              name="submit"
              color="secondary"
              variant ="contained"
              value="Log In"
            >
              Submit
              </Button>
          </div>
          {/* </FormControl> */}
        </form>
      
        <div className = "button"
              >
          <Button
            type="button"
            className="link-button"
            color="primary"
            variant="contained"
            onClick={() => {this.props.dispatch({type: 'SET_TO_REGISTER_MODE'})}}
          >
            Register
          </Button>
          </div>
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
