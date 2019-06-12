import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withGoogleMap, GoogleMap, withScriptjs } from 'react-google-maps';
import { compose, withProps, withStateHandlers } from 'recompose';


import CurrentMarker from '../CurrentMarker/CurrentMarker';
// import VendorMarker from '../VendorMarker/VendorMarker';
import './DisplayAllTrucks.css'
// import MiddleVendor from './MiddleVendor';
import GoogleMaps from './GoogleMaps'; 

require('dotenv').config()


class userContainer extends Component{

//     state = {
//     currentLatLng: {
//       lat: 0,
//       lng: 0, 
//     },
//     locations: false,
    
//     }

  //   componentDidMount(){

  //     this.props.dispatch({type: 'CURRENT_MARKER'}) 
  //     this.props.dispatch({type: 'FETCH_LOCATION'})
  //     this.props.dispatch({type: 'FETCH_DASH'})
  //     // this.props.dispatch({type: 'SET_LOCATION'})
  //     this.props.dispatch({type: 'SET_FAVS'})
  // }

render() {

  const API_KEY = process.env.REACT_APP_GOOGLE_KEY;



    const GoogleMapContainer = (compose(
      withStateHandlers(() => ({
        isOpen: false,
      }), 
      {
        onToggleOpen: ({ isOpen }) => () => ({
          isOpen: !isOpen,
        })
      }
      ),
    withScriptjs,
    withGoogleMap)

    (props => (
      <GoogleMap
      defaultZoom={13}
      defaultCenter={{ lat: 44, 
                        lng: -93 }}
      >
        {/* <div>
         {this.props.reduxState.locations.map( locals => {
          // console.log(locals)
           return( 
             <VendorMarker locals= {locals} />
            )})}
    </div> */}
    <GoogleMaps />

    <CurrentMarker />
      </GoogleMap>
    )))
  
    return (
      // <MiddleVendor />
      <div className = "wrapper">
        <div className = "map">
        <GoogleMapContainer
            
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
            // currentLocation={this.state.currentLatLng}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `600px`, width: `700px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            
        />
        </div>
        <div className="keys"> 
          <div className= "header">
          <span>
                The Key      
                </span>
                </div>
              <div>

              <div className= "sub">
                  <span>
                   Trucks   :    
                <img 
                src= "http://wherethatfoodtruck.com/graphics/default/logo.png" 
                alt="truck-icon" 
                width= "10%"
                height= "5%"
                /> </span>
                </div>

                </div>

                <div className= "sub">
                   <span>
                    You   : 
                <img 
                src="https://png.pngtree.com/element_our/md/20180526/md_5b09436fd0515.png" 
                alt="fav-icon"
                width="20%"
                />
                </span>  
              </div>
              
            </div>
        </div> 
    )
  }
}

// const mapRedux = reduxState => {
    
// return { reduxState }
// }

// export default connect(mapRedux)(userContainer)

export default userContainer; 