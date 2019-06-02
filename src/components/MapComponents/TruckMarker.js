import React, { Component } from "react";
import { Marker , InfoWindow} from "react-google-maps";

import { connect } from 'react-redux'
  
class TruckMarker extends Component{

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
    // long: '',
    // lati: '',
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
    console.log(this.state)
    console.log(this.props.reduxState)
    {this.props.dispatch({ type: 'ADD_LOCATION', payload: this.state})}

      //  this.setState({
      //    lati: (this.state.latitude), 
      //    long: (this.state.longitude)
      //  })
    // this.setState({
    // lati : (this.props.reduxState.latitude[this.props.reduxState.length - 1]),
    // long : (this.props.reduxState.longitude[this.props.reduxState.length - 1])
    // })

    // console.log(this.state.lati, this.state.long)
}
componentWillUpdate() { 
  this.getGeoLocation() 
  // this.props.dispatch({ type: 'SET_LOCATION'})
}

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
       }
      })
    )
  } 
  )
  }
}

onMarkerClick = (event) => {
  
  console.log("clicked!")
 
  
}
  render() {

     const truckIcon = { url: 'http://wherethatfoodtruck.com/graphics/default/logo.png', scaledSize: { width: 32, height: 40 } };
     const favIcon = { url: "http://simpleicon.com/wp-content/uploads/Google-Place-Optimization.png" }
     let truckIcons
     
     if (this.props.reduxState.locations) {
      let truckIcons =  (
      {this.props.reduxState.locations.map(locals =>
 
        return (
        < Marker options={{ icon: truckIcon }}
        position={{ 
                lat: locals.latitude,
                lng: locals.longitude
              }}
        onClick={this.onMarkerClick}
            >
        <InfoWindow
          marker={this.state.activeMarker}
          >
        </InfoWindow> 
      </Marker>
     ))
    }
    } else {
    let truckIcons = (this.state.currentLocal)
    }
    // let truckIcons


return (
        <div>


          <Marker 
          position={{ lat: this.state.latitude, 
                        lng: this.state.longitude}} 
          onClick={this.onMarkerClick}
              />
          <Marker 
          position={{ lat: this.state.currentLocal.lat,
                      lng: this.state.currentLocal.lng
                    }}
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

        {truckIcons} 
        {JSON.stringify(this.props.reduxState.locations)}
       
        {JSON.stringify(this.state)}
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
export default connect(mapRedux)(TruckMarker);
