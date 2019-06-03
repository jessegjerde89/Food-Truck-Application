import React, { Component } from "react";
import { Marker , InfoWindow} from "react-google-maps";

import { connect } from 'react-redux'
  
class CurrentMarker extends Component{

  state = {
    latitude: '0',
    longitude: '0',
    
    currentLocal: {
        lat: 0,
        lng: 0 
    },
    isMarkerShown: false, 
    showingInfoWindow: false, 
    activeMarker: {}, 
    selectedPlace: {},
  }

changeLat = (event) => {
    this.setState({
        latitude: parseFloat(event.target.value)
    })
}    

changeLong = (event) => {
    this.setState({ 
        longitude: parseFloat(event.target.value)
    })
}

handleClick = (event) => {
    event.preventDefault()
    {this.props.dispatch({ type: 'ADD_LOCATION', payload: this.state})}
}

componentWillUpdate() { this.getGeoLocation() }

componentDidMount() {
   this.delayedShowMarker() 
   this.props.dispatch({ type: 'SET_LOCATION'})
  console.log(this.props)
  }

delayedShowMarker() { this.getGeoLocation() }

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
        <>     
    </>
      <div>
        <div>
            <h2>Key: </h2>       
        
            Trucks: <img 
            src= "http://wherethatfoodtruck.com/graphics/default/logo.png" 
            alt="truck-icon" 
            width= "10%"
            height= "5%"
            />
            
            You are here: <img 
            src="https://png.pngtree.com/element_our/md/20180526/md_5b09436fd0515.png" 
            alt="fav-icon"
            width="20%"
            />

            Favorite : <img 
            src="http://simpleicon.com/wp-content/uploads/Google-Place-Optimization.png" 
            alt="you-are-here"
            width="15%"/>
        </div>
        
          <h3>Add New Spot</h3>
        
          <input 
          type="number" 
          onChange={this.changeLong} 
          placeholder="longitude" 
          />
          <input 
          type="number" 
          onChange={this.changeLat} 
          placeholder="latitude" 
          />

          <button onClick={this.handleClick}>Change Location</button>
         
      </div>
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
