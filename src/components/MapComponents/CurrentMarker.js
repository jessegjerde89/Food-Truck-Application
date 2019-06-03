import React, { Component } from "react";
import { Marker , InfoWindow} from "react-google-maps";

import { connect } from 'react-redux'
  
class CurrentMarker extends Component{

  state = {
    currentLocal: {
        lat: 0,
        lng: 0 
    },
    isMarkerShown: false, 
    showingInfoWindow: false, 
    activeMarker: {}, 
    selectedPlace: {},
  }


componentWillUpdate() { 
  this.getGeoLocation() 
}

componentDidMount() {
   this.delayedShowMarker() 
   this.getGeoLocation() 
   console.log(this.state.currentLocal)
  }

delayedShowMarker() { 
  this.getGeoLocation() 
}

  onMarkerClick = (props, marker, event) => {
    event.preventDefault()
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    })
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

return (
    <div>
      <Marker 
      position={{ lat: this.state.currentLocal.lat,
                  lng: this.state.currentLocal.lng
                }}
      onClick={this.onMarkerClick}
      >
      <InfoWindow
        visible={this.state.showingInfoWindow}
        onOpen = {this.windowHasOpened}
        onClose = {this.windowHasClosed}
        marker={this.state.activeMarker}
        >
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
