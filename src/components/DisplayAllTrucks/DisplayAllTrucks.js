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


render() {

  //api key talk to goog maps
  const API_KEY = process.env.REACT_APP_GOOGLE_KEY;

  //compose helps write a nested function
    const GoogleMapContainer = (compose(
     
    withScriptjs,
    withGoogleMap)

    //handing props to google map
    (props => (
      <GoogleMap
      defaultZoom={13}
      defaultCenter={{ lat: 44, 
                        lng: -93 }}
      >
      
      {/* marker component */}
    <GoogleMaps />
      {/*current marker component*/}
    <CurrentMarker />
      </GoogleMap>
    )))
  
    return (
      // <MiddleVendor />
      <div className = "wrapper">
          <div className="keys"> 
          <div className= "header">
          <span>
                The Key      
                </span>
                </div>
              <div>

              <div className= "sub">
                  <span>
                      Trucks :    
                    <img 
                    src= "http://wherethatfoodtruck.com/graphics/default/logo.png" 
                    alt="truck-icon" 
                    width= "15%" 
                    height= "20%"
                    /> 
                  </span>
                </div>

                </div>

                <div className= "sub">
                   <span>
                    You : 
                      <img 
                      src="https://png.pngtree.com/element_our/md/20180526/md_5b09436fd0515.png" 
                      alt="fav-icon"
                      width="24%"
                      height="80%"
                      />
                   </span>  
              </div>
              
            </div>
        <div className = "map">

        {/* display map on dom */}
        <GoogleMapContainer
            
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `600px`, width: `600px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            
        />
        </div>
      
        </div> 
    )
  }
}

export default userContainer; 