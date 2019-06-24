import {connect} from 'react-redux'
import React, {Component} from 'react'

import {Marker , InfoWindow} from "react-google-maps";

import { makeStyles } from '@material-ui/styles';
import { TextField, Button, Grid } from '@material-ui/core';

import './TruckMarker.css'


export class TruckMarker extends Component {

    state =
        {
        lat: 0,
        lng: 0, 

        isMarkerShown: false, 
        showingInfoWindow: false, 
        activeMarker: {}, 
        selectedPlace: {},
         }

    componentDidMount()  {
        this.props.dispatch({ type: 'SET_LOCATION'})
        // this.props.dispatch({ type:'FETCH_DASH'})
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
        console.log(this.reduxState)
        this.props.dispatch({ type: 'ADD_LOCATION', payload: this.state})
    }

    render() {
            const truckIcon = 
            { url: 'http://wherethatfoodtruck.com/graphics/default/logo.png', 
                    scaledSize: { width: 32, height: 40 } };
        

    return(   
      <div className ="wrapper">
          <div className="location-input">
            <div>
                <h3>Add New Spot</h3>
                <Button 
                className="location"
                type="submit"
                variant="contained"
                color="primary"
                onClick={this.handleClick}>
                    Change Location
                </Button>
                </div>
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
                <Marker 
                key = {this.state.id}
                position = {{ 
                    lat: this.state.latitude, 
                    lng: this.state.longitude
                            }} 
                icon = {truckIcon}
                >
                    <InfoWindow
                    visible={this.state.showingInfoWindow}
                    marker={this.state.activeMarker}
                    >
                    <div>
                        <h3 className= "vendor_name">
                            
                        {this.props.reduxState.user.vendor_name}
                        </h3>
                        {/* <div>
                            {vendorInfo}
                        </div> */}
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

