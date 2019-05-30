// import React from 'react';
// import { connect } from 'react-redux';


// import Button from '@material-ui/core/Button';
// import { createMuiTheme } from '@material-ui/core/styles';
// import { makeStyles } from '@material-ui/core/styles';
// import { withStyles } from '@material-ui/core/styles'



// const LogOutButton = props => (
  // function ContainedButtons() {
  //   const classes = useStyles(); 
  // }
  // <Button
  //   // This button shows up in multiple locations and is styled differently
  //   // because it's styled differently depending on where it is used, the className
  //   // is passed to it from it's parents through React props

  //   variant="conatained" 
  //   color="primary"
  //   onClick={() => props.dispatch({ type: 'LOGOUT' })}
  // >
  //   Log Out
  // </Button>
// );

// This component doesn't need 'mapStateToProps'
// because it doesn't care what the current state is.
// No matter what the redux state is, this button will always be a log out button
// this component still needs 'connect' though, because it is going to dispatch a redux action
// export default connect()(LogOutButton);


import React from 'react';
import clsx from 'clsx';
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

// We can inject some CSS into the DOM.
const styles = {
  root: {
    background: '#f44336',
    borderRadius: 3,
    border: 0,
    color: '#fffff',
    height: 75,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
};

function LogOutButton(props) {
  const { classes, children, className, ...other } = props;

  return (
    <Button className={clsx(classes.root, className)} {...other}
    onClick={() => props.dispatch({ type: 'LOGOUT' })} 
    >
      {children || 'Log Out'}
    </Button>
  );
}

const wrapper = (connect()(LogOutButton))

export default withStyles(styles)(wrapper);