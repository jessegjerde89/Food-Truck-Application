

import React, { Component } from "react";
import { Marker , InfoWindow} from "react-google-maps";

import { connect } from 'react-redux'
  
class CurrentMarker extends Component{

  state = {
    currentLocal: {
        lat: 0,
        lng: 0 
    }
  }

  

componentDidMount() {
   this.getGeoLocation() 
   console.log(this.state.currentLocal)
   
  }
  

getGeoLocation = () => {
  
    navigator.geolocation.getCurrentPosition(
    position => {
      this.setState(prevState => ({
        currentLocal: { 
     lat: position.coords.latitude,
      lng: position.coords.longitude
       }})
    )})

  console.log(this.state.currentLocal)
}
  render() {
    

return (
    <div>
      <Marker 
      position={{ lat: this.state.currentLocal.lat,
                  lng: this.state.currentLocal.lng
                }}
      onClick={this.onMarkerClick}
      >
      <InfoWindow>
          <div>
            <h3>You are here!</h3>
          </div>
      </InfoWindow> 
    </Marker>
  </div>

    );
  }
}
  const mapRedux = reduxState => {
    return { 
      reduxState
   }
}
export default connect(mapRedux)(CurrentMarker);

