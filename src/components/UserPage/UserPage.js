import React, {Component } from 'react';
import { connect } from 'react-redux';

import DisplayAllTrucks from '../DisplayAllTrucks/DisplayAllTrucks';
import './UserPage.css'


class UserPage extends Component {

  componentDidMount(){

    this.props.dispatch({type: 'CURRENT_MARKER'}) 
    this.props.dispatch({type: 'FETCH_LOCATION'})
    this.props.dispatch({type: 'FETCH_DASH'})
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

  var t =6, e = 5; 

  return (
    <div className="grid">
      <div className="whiteback" >
        <h1 className="welcome"><span>
          Welcome, { this.props.reduxState.user.username }!
          </span> 
        </h1>
        
        {this.props.vendors[0] && <DisplayAllTrucks history={this.props.history}/>
        }
      </div>
    </div>
    )
  }
}

const mapStateToProps = reduxState => {
 return {
  reduxState, 
  vendors : reduxState.locations
 }
};


export default connect(mapStateToProps)(UserPage);
