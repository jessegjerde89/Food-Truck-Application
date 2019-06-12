import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { SwipeableDrawer, Button, List, Divider, ListItem, 
        ListItemIcon, ListItemText, Drawer, MenuList, Toolbar
} from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles,  } from '@material-ui/core/styles';

import { withStyles } from '@material-ui/core/styles'
import { Menu } from '@material-ui/icons'


const drawerWidth = 200; 

const useStyles = makeStyles(theme => ({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(10),
  },
  drawerPaper: {
    width: drawerWidth,
  },
})
)


const Nav = (props) => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });
  
  const toggleDrawer = (side, open) => event => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({  [side]: open });
  };

  const sideList = side => (

    // <Appbar position="static">
      <Toolbar>
    <div
      className={classes.list}
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
    
      <h2></h2>
    <ListItem button >
      <Link  to="/home">
        {/* Show this link if they are logged in or not,
        but call this link 'Home' if they are logged in,
        and call this link 'Login / Register' if they are not */}
        {props.user.id ? 'Home' : 'Login / Register'}
      </Link>
    </ListItem>
      {/* Show the link to the info page and the logout button if the user is logged in */}
     
      {/* Always show this link since the about page is not protected */}
      <ListItem button >
      <Link to="/about">
        About
      </Link>
      </ListItem>

      <ListItem button >
      <Link  to="/vendor">
      Vendor
      </Link>
      </ListItem>
      {/* Only a vendor can view this link and access it  */}
      {props.user.is_vendor && (
      <>
      <ListItem button >
      <Link to="/vendordash">
      VendorDash
      </Link>
      </ListItem>

       <ListItem button >
      <Link to="/map">
      Map
      </Link>
      </ListItem>
      </>
      
      )}
      <LogOutButton className="nav-link"/>
      </div>
      </Toolbar>

      // {/* </Appbar> */}

      )

      return (
        <div>
          <AppBar position="static">
          <Toolbar>

          <IconButton 
          edge="start" 
          className={classes.menuButton} 
          color="inherit" 
          aria-label="Menu"
          onClick={toggleDrawer("left", true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            FOODAHOLIC
          </Typography>
          <SwipeableDrawer
            open={state.left}
            onClose={toggleDrawer("left", false)}
            onOpen={toggleDrawer("left", true)}
          >
            {sideList("left")}
          </SwipeableDrawer>
          </Toolbar>
          </AppBar>
        </div>
      );
};

{/* // Instead of taking everything from state, we just want the user
// object to determine if they are logged in
// if they are logged in, we show them a few more links 
// if you wanted you could write this code like this:
// const mapStateToProps = ({ user }) => ({ user }); */}
const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(Nav);
