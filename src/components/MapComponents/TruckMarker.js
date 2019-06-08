import {connect} from 'react-redux'
import React, {Component} from 'react'
import {Marker , InfoWindow} from "react-google-maps";
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';


export class TruckMarker extends Component {

    state =
        {
        lat: 41.559977,
        lng: -106.611563, 

        isMarkerShown: false, 
        showingInfoWindow: false, 
        activeMarker: {}, 
        selectedPlace: {},
         }

    componentDidMount()  {
        this.props.dispatch({ type: 'SET_LOCATION'})
        this.props.dispatch({ type:'FETCH_DASH'})
    }

    onMarkerClick = (props, marker, event) => {
        console.log("clicked")
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
        console.log(this.reduxState)
        this.props.dispatch({ type: 'ADD_LOCATION', payload: this.state})
    }

    render() {
            const truckIcon = 
            { url: 'http://wherethatfoodtruck.com/graphics/default/logo.png', 
                    scaledSize: { width: 32, height: 40 } };
        
            
            // const vendorInfo =  ( this.props.reduxState.menuItem.map( items => { 
            //                      return ( <div>
            //                             {items.item}   
            //                             {items.description} 
            //                             {items.price} </div> )} ))


        return(   
            <div>
                    <Marker 
                    key = {this.state.id}
                    position = {{ 
                        lat: this.state.latitude, 
                        lng: this.state.longitude
                                }} 
                    icon = {truckIcon}
                    // value= {this.state.}
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

                    <Button onClick={this.handleClick}>Change Location</Button>
                    
            </div>
            )
            
        }
    }

const mapRedux = reduxState => {
    return { reduxState }
}

// const scripts = (withScriptjs(TruckMarker));

export default connect(mapRedux)(TruckMarker)

