import {connect} from 'react-redux'
import React, {Component} from 'react'
import { Marker , InfoWindow} from "react-google-maps";


export class TruckMarker extends Component {

    state =
        {
        latitude: 0, 
        longitude: 0
         }

    componentDidMount(event)  {

        this.delayedMarker() 
        this.props.dispatch({ type: 'SET_LOCATION'})
    }

    onMarkerClick = (props, marker, event) => {
        event.preventDefault()
        this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
        })
    }

    delayedMarker() {

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

    render() {
        const truckIcon = 
        { url: 'http://wherethatfoodtruck.com/graphics/default/logo.png', 
                scaledSize: { width: 32, height: 40 } };
        
        const favIcon = 
        { url: "http://simpleicon.com/wp-content/uploads/Google-Place-Optimization.png" }
        
        let truckIcons

          
                truckIcons =  (
                {this.props.reduxState.locations.map(locals =>
           
                  return (
                  <Marker options={{ icon: truckIcon }}
                    position={{ 
                          lat: {locals.latitude},
                          lng: {locals.longitude}
                              }}
                      />
               ))    
            })
        

        return (
            <div>
                {JSON.stringify(this.state)}

          <Marker 
          position = {{ 
              lat: 44, 
              lng: -93
                      }} 
          onClick={this.onMarkerClick}
          icon = {truckIcon}
              >

          </Marker>

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

          {JSON.stringify(this.props.reduxState.locations)}
         
      </div>
            </div>
        )
    }
}


const mapRedux = reduxState => {
    return { reduxState }
}

export default connect(mapRedux)(TruckMarker);
