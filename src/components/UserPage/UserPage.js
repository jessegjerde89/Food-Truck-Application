import React, {Component } from 'react';
import { connect } from 'react-redux';


import DisplayAllTrucks from '../DisplayAllTrucks/DisplayAllTrucks';
import './UserPage.css'


class UserPage extends Component {




  componentDidMount(){

    this.props.dispatch({type: 'CURRENT_MARKER'}) 
    this.props.dispatch({type: 'FETCH_LOCATION'})
    this.props.dispatch({type: 'FETCH_DASH'})
    // this.props.dispatch({type: 'SET_LOCATION'})
    this.props.dispatch({type: 'SET_FAVS'})
}



  state = {
		currentLatLng: {
			lat: 41.559977,
			lng: -106.611563, 
		}
	}

render() {
  const API_KEY = process.env.REACT_APP_GOOGLE_KEY;

  return (

      <div >
      <h1 className="welcome"><span>
        Welcome, { this.props.reduxState.user.username }!</span> </h1>
     
     <DisplayAllTrucks />
      
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
