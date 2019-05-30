import React, { Component } from "react";
import { Marker , InfoWindow} from "react-google-maps";

import { connect } from 'react-redux'
  
class TruckMarker extends Component{

  state = {
    currentLatLng: {
      lat: 44.977753,
      lng: -93.265015, 
    }, 
    isMarkerShown: false, 
    showingInfoWindow: false, 
    activeMarker: {}, 
    selectedPlace: {}
  }

componentWillUpdate() { this.getGeoLocation() }

componentDidMount() { this.delayedShowMarker() }

delayedShowMarker() { this.getGeoLocation() }

  onMarkerClick = (props, marker, event) => {
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
        currentLatLng: {
         ...prevState.currentLatLng, 
     lat: position.coords.latitude,
      lng: position.coords.longitude
       }
      })
    )
  } 
  )
  }
}
  render(){

  

return(
    <>
      {/* <Marker
        position={this.props.location}
        icon={Foodtruck}
      >
      </Marker> */}
    <Marker 
    position={{ lat: this.state.currentLatLng.lat, 
                  lng: this.state.currentLatLng.lng }} 
    onClick={this.onMarkerClick}
    name={'Current Location'}
        >
    <InfoWindow
      visible={this.state.showingInfoWindow}
      onOpen = {this.windowHasOpened}
      onClose = {this.windowHasClosed}
      marker={this.state.activeMarker}
      >
        <div>
          <h1>You are here!</h1>
        </div>
    </InfoWindow> 
  </Marker>
    <Marker 
    position={{ lat: 45, lng: -93}}
    onClick={this.handleMarkerClick}
    />
    </>
    );
  }
}

  const mapRedux = reduxState => {
    return { reduxState }
}

export default connect(mapRedux)(TruckMarker);
