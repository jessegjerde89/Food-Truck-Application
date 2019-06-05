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
    isOpen: false
  }


// componentWillUpdate() { 
//   this.getGeoLocation() 
// }

componentDidMount() {
  //  this.delayedShowMarker() 
   this.getGeoLocation() 
   console.log(this.state.currentLocal)
   
  }

delayedShowMarker() { 
  this.getGeoLocation() 
}
 // selectedPlace: props,
      // activeMarker: marker,
      // isInfoboxVisible: false
// }

  onMarkerClick= () => {
   
    this.setState({ isOpen: true })

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
}

  render() {

return (
    <div>
      <Marker
      position={{ lat: this.state.currentLocal.lat,
                  lng: this.state.currentLocal.lng
                }}
      onClick={this.onMarkerClick}>
      {this.state.isOpen && <InfoWindow onCloseClick={this.onMarkerClick}>
        infoboxMessage={!this.state.showingInfoWindow}
          <div>
            <h3>You are here!</h3>
          </div>
      </InfoWindow> 
      }
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
