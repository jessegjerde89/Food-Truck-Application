import {connect} from 'react-redux'
import React, {Component} from 'react'
import { Marker , InfoWindow} from "react-google-maps";


export class TruckMarker extends Component {


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

    render() {
        const truckIcon = 
        { url: 'http://wherethatfoodtruck.com/graphics/default/logo.png', 
                scaledSize: { width: 32, height: 40 } };
        
        const favIcon = 
        { url: "http://simpleicon.com/wp-content/uploads/Google-Place-Optimization.png" }
        
        let truckIcons

        // /    if (!this.props.reduxState.locations) {
            //    truckIcons = (this.state.currentLocal)
                
            //   } else {
            //     truckIcons =  (
            //     {this.props.reduxState.locations.map(locals =>
           
            //       return (
            //       <Marker options={{ icon: truckIcon }}
            //         position={{ 
            //               lat: locals.latitude,
            //               lng: locals.longitude
            //                   }}
            //           />
            //    ))    
            // })} 

        return (
            <div>
                {JSON.stringify(this.props.reduxState)}



          {/* <Marker 
          position={{ lat: this.state.latitude, 
                        lng: this.state.longitude}} 
          onClick={this.onMarkerClick}
              >
          <InfoWindow
          visible={this.state.showingInfoWindow}
          onOpen = {this.windowHasOpened}
          onClose = {this.windowHasClosed}
          marker={this.state.activeMarker}
          ></InfoWindow>
          </Marker> */}
            </div>
        )
    }
}


const mapRedux = reduxState => {
    return { reduxState }
}

export default connect(mapRedux)(TruckMarker);
