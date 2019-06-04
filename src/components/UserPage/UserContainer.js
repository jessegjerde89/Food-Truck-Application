import React, { Component } from 'react'
import { connect } from 'react-redux'
import UserMap from '../UserPage/UserMap'

require('dotenv').config()


class userContainer extends Component{

    state = {
		currentLatLng: {
			lat: 0,
			lng: 0, 
		}
    }


    componentDidMount() {
        this.delayedShowMarker() 
    }

    delayedShowMarker() { 
        this.getGeoLocation() 
      }

    getGeoLocation = () => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
          position => {
            this.setState(prevState => ({
              currentLocal: {
               ...prevState.currentLatLng, 
           lat: position.coords.latitude,
            lng: position.coords.longitude
             }})
          )})
        }}
    
render() {

    const API_KEY = process.env.REACT_APP_GOOGLE_KEY;

    
  
    return (
        <UserMap
            trucks={this.props.trucks}
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
            currentLocation={this.state.currentLatLng}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `600px`, width: `600px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            
        >
        
        </UserMap>
    )
}
}

const mapRedux = reduxState => {
    
return { reduxState }
}

export default connect(mapRedux)(userContainer)