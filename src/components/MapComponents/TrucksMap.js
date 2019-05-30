import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import TruckMarker from '../MapComponents/TruckMarker'
import { connect } from 'react-redux'



const TrucksMap = withScriptjs(withGoogleMap((props) =>{


    // const markers = props.trucks.map( trucks => <TruckMarker
    //     trucks={trucks}
    //     location={{lat: trucks.closestTruck.lat, lng: trucks.closestTruck.lon}}
    //   />);
   
  return (
      <GoogleMap
      defaultZoom={12}
      defaultCenter={{ lat: props.currentLocation.lat, 
                        lng: props.currentLocation.lng }}
    >
    {/* {markers} */}
      <TruckMarker />
     
      </GoogleMap>
    );
  }
))

const mapRedux = reduxState => {
    return { reduxState }
}

export default connect(mapRedux)(TrucksMap);