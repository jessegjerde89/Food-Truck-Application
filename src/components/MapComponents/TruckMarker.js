import {connect} from 'react-redux'
import React, {Component} from 'react'
import {withGoogleMap, GoogleMap, withScriptjs,  Marker , InfoWindow} from "react-google-maps";



export class TruckMarker extends Component {

    state =
        {
        latitude: 0, 
        longitude: 0
         }

    componentDidUpdate() {
        this.props.dispatch({ type: 'SET_LOCATION'})
    }
    componentWillUpdate() {
        this.props.dispatch({ type: 'SET_LOCATION'})
    }     

    componentDidMount()  {
        // this.props.dispatch({ type: 'SET_LOCATION'})
    }

    onMarkerClick = (props, marker, event) => {
        event.preventDefault()
        this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
        })
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
        // if (this.props.reduxState.user.latitude === null){
        //     if (this.props.reduxState.user.longitude === null) {
        //         {this.props.dispatch({ type: 'ADD_LOCATION', payload: this.state})}
        //     }
        // }
        {this.props.dispatch({ type: 'ADD_LOCATION', payload: this.state})}
        //     else {
        //     this.props.dispatch({ type: 'UPDATE_LOCATION', payload: this.state})
        // }
    }

    render() {
            const truckIcon = 
            { url: 'http://wherethatfoodtruck.com/graphics/default/logo.png', 
                    scaledSize: { width: 32, height: 40 } };
            
            const favIcon = 
            { url: "http://simpleicon.com/wp-content/uploads/Google-Place-Optimization.png" }
        
            
return (
        <div>


          <Marker 
          position={{ lat: this.state.latitude, 
                        lng: this.state.longitude}} 
          onClick={this.onMarkerClick}
          name={'Your Here'}
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
        {JSON.stringify(this.props.reduxState.locations)}
        <div></div>
        {JSON.stringify(this.state)}
        
        {/* {truckIcons && (
                      
                      (this.props.reduxState.locations.map(locals =>
                       <p> {locals} </p>
                      <Marker options={{ icon: truckIcon }}
                        position={{ 
                                lat: locals.latitude,
                                lng: locals.longitude
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
                              <h1>{this.props.reduxState.user.vendor_name}</h1>
                            </div>
                        </InfoWindow> 
                      </Marker>
                      ))
                    )
        }            */}
    
            // const truckMarkers = ({ places }) => {
            return ( 
                <div>
                {/* {this.props.reduxState.locations.map(place => {
                return (
                    <Marker 
                    key={place.id} 
                    position={{ lat: place.lat, lng: place.lng }} />
                    )
                })
            } */}
                    <Marker 
                    position = {{ 
                        lat: this.props.reduxState.user.latitude, 
                        lng: this.props.reduxState.user.longitude
                                }} 
                    onClick={this.onMarkerClick}
                    icon = {truckIcon}
                        >

                    </Marker>

                                {JSON.stringify(this.props.reduxState.user.latitude)}
                                {JSON.stringify(this.props.reduxState.user.longitude)}
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
            )
        }
    }

const mapRedux = reduxState => {
    return { reduxState }
}

// const scripts = (withScriptjs(TruckMarker));

export default connect(mapRedux)(TruckMarker);
