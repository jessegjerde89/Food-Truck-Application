import React from "react";
import { connect } from 'react-redux'
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";


import CurrentMarker from '../CurrentMarker/CurrentMarker'
import TruckMarker from '../TruckMarker/TruckMarker'
import './TrucksMap.css'


const TrucksMap = withScriptjs(withGoogleMap((props) =>{



  return (
      <div className="cover" >
        <div className="mapUpdate">
          <GoogleMap 
          className="map"
          defaultZoom={13}
          defaultCenter={{ lat: props.currentLocation.lat, 
                            lng: props.currentLocation.lng }}
        >
          {/* {markers} */}
            <CurrentMarker />
            <TruckMarker />
          </GoogleMap>
        </div>
      </div>
    );
  }
))

const mapRedux = reduxState => {
    return { reduxState }
}

export default connect(mapRedux)(TrucksMap);