import {connect} from 'react-redux'
import React, {Component} from 'react'

import {Marker , InfoWindow} from "react-google-maps";

import { TextField, Button, Grid } from '@material-ui/core';

import './TruckMarker.css'
// import { EventEmitter } from 'events';


export class TruckMarker extends Component {

    state =
        {
        lat: 0,
        lng: 0, 
        isMarkerShown: false, 
        showingInfoWindow: false, 
        activeMarker: {}, 
        selectedPlace: {},
        currentLocal : {
            lat: 0,
            lng: 0
            }
         }; 

    componentDidMount()  {
        this.props.dispatch({ type: 'SET_LOCATION'}); 
        this.getGeoLocation(); 
    }
   
     getGeoLocation = () => {
       
         navigator.geolocation.getCurrentPosition(
         position => {
           this.setState({
               currentLocal: { 
                  lat: position.coords.latitude,
                  lng: position.coords.longitude
            }}
         )})
       console.log(this.state.currentLocal)
     }

     

    changeLat = (event) => {
        this.setState({
            latitude: parseFloat(event.target.value)
        }); 
    }    
    
    changeLong = (event) => {
        this.setState({ 
            longitude: parseFloat(event.target.value)
        })
    }

    handleClick = () => {
        console.log(this.reduxState); 
        this.props.dispatch({ type: 'ADD_LOCATION', payload: this.state}); 
    }

    handleCurrent = (event) => {
        event.preventDefault()
        this.setState({ 
            latitude: this.state.current_lat,
            longitude: this.state.current_lng
        }); 
        this.handleClick(); 
    }

    
    // codeAddress = () => {
    //     let geocoder; 
    //     geocoder.geocode( { 'address': address}, function(results, status) {
    //         if (status == 'OK') {
    //         map.setCenter(results[0].geometry.location);
    //         var marker = new google.maps.Marker({
    //             map: map,
    //             position: results[0].geometry.location
    //         });
    //         } else {
    //         alert('Geocode was not successful for the following reason: ' + status);
    //         }
    //     });
    // }
    
    getCurrent = (event) => {
        event.preventDefault()
        this.setState({
                current_lat: this.props.reduxState.current.lat,
                current_lng: this.props.reduxState.current.lng
        }); 
    }

    render() {
        var geocoder;
        var map;
        const truckIcon = 
        { url: 'http://wherethatfoodtruck.com/graphics/default/logo.png', 
                scaledSize: { width: 32, height: 40 } };
    
        if (this.state.currentLocal.lat != 0) {
            this.props.dispatch({type: 'GET_CURRENT', payload: this.state.currentLocal})
        }

    return(   
      <div className ="wrapperss">
          <div className="location-input">
              <div className="column1">
                <div>
                    <h3>Add New Spot</h3>
                        <div className="location-btn">
                            <Button 
                            className="location"
                            type="submit"
                            variant="contained"
                            color="primary"
                            onClick={this.handleClick}>
                                Change Location
                            </Button>
                        </div>
            
                </div>
                <div id="fields">
                    <TextField
                    type="number" 
                    name="longitude"
                    label="longitude"
                    required
                    autoFocus
                    onChange={this.changeLong} 
                    />

                    <TextField
                    type="number" 
                    name="latitude"
                    label="latitude"
                    required
                    autoFocus
                    onChange={this.changeLat} 
                    />
                </div>
              </div>
                <div  className="current">
                    <Button
                    variant="contained"
                    color="secondary"
                    onClick={this.getCurrent}>
                        Show Current Location
                    </Button>   
                        <div>
                            { this.state.current_lat ? (
                            <>
                                <h3>Longitude: {this.state.current_lng} </h3>
                                <h3>Latitude: {this.state.current_lat}</h3>
                                <Button    
                                    className="currentLocation"
                                    type="submit"
                                    variant="contained"
                                    color="secondary"
                                    onClick={this.handleCurrent}>
                                        Change Location
                                </Button>
                            </>
                            ) : (<></>)
                            }
                        </div>
                </div> 
            </div>
                <Marker 
                    key = {this.state.id}
                    position = {{ 
                        lat: this.state.latitude, 
                        lng: this.state.longitude
                                }} 
                    icon = {truckIcon} >

                    <InfoWindow
                    visible={this.state.showingInfoWindow}
                    marker={this.state.activeMarker}
                    >
                        <div>
                            <h3 className= "vendor_name">
                                {this.props.reduxState.user.vendor_name}
                            </h3>
                        </div>
                    </InfoWindow>
                </Marker>
                <Marker 
                    position={{ lat: this.state.currentLocal.lat,
                                lng: this.state.currentLocal.lng
                                }}
                    onClick={this.onMarkerClick}
                    >
                    <InfoWindow
                     visible={this.state.showingInfoWindow}
                     marker={this.state.activeMarker}>
                        <div>
                            <h3>You are here!</h3>
                        </div>
                    </InfoWindow> 
                </Marker>
            </div>
 
            )
        }
    }

const mapRedux = reduxState => {
    return { reduxState }
}

// const scripts = (withScriptjs(TruckMarker));

export default connect(mapRedux)(TruckMarker)

