import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import CurrentMarker from '../MapComponents/CurrentMarker'
import { connect } from 'react-redux'
import DisplayAllTruck from '../UserPage/DisplayAllTrucks'


const UserMap = withScriptjs(withGoogleMap((props) =>{

  return (
      <GoogleMap
      defaultZoom={13}
      defaultCenter={{ lat: props.currentLocation.lat, 
                        lng: props.currentLocation.lng }}
    >
 

      <CurrentMarker />
      <DisplayAllTruck />
      </GoogleMap>
      
    );
  }
))

const mapRedux = reduxState => {
    return { reduxState }
}

export default connect(mapRedux)(UserMap);