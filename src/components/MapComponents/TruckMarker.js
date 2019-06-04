import {connect} from 'react-redux'
import React, {Component} from 'react'
import {Marker , InfoWindow} from "react-google-maps";



export class TruckMarker extends Component {

    state =
        {
        latitude: 0, 
        longitude: 0,

        isMarkerShown: false, 
        showingInfoWindow: false, 
        activeMarker: {}, 
        selectedPlace: {},
         }

    componentDidMount()  {
        this.props.dispatch({ type: 'SET_LOCATION'})
    }

    onMarkerClick = (props, marker, event) => {
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
        this.props.dispatch({ type: 'ADD_LOCATION', payload: this.state})
    }

    render() {
            const truckIcon = 
            { url: 'http://wherethatfoodtruck.com/graphics/default/logo.png', 
                    scaledSize: { width: 32, height: 40 } };
        
        return(   
            <div>
                    <Marker 
                    position = {{ 
                        lat: this.state.latitude, 
                        lng: this.state.longitude
                                }} 
                    onClick={this.onMarkerClick}
                    icon = {truckIcon}
                        >
                            <InfoWindow
                            visible={this.state.showingInfoWindow}
                          
                            marker={this.state.activeMarker}
                            >
                                <div>
                                    <h3>{this.props.reduxState.user.vendor_name}</h3>
                                </div>
                            </InfoWindow>

                    </Marker>

                                {JSON.stringify(this.props.reduxState.user.vendor_name)}
                                {/* {JSON.stringify(this.props.reduxState.user.latitude)} */}
                                {/* {JSON.stringify(this.props.reduxState.user.longitude)} */}
                    
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
            )
            
        }
    }

const mapRedux = reduxState => {
    return { reduxState }
}

// const scripts = (withScriptjs(TruckMarker));

export default connect(mapRedux)(TruckMarker);
