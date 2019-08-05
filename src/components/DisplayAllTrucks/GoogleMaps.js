import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { withGoogleMap, GoogleMap, withScriptjs } from 'react-google-maps';
// import { compose, withProps, withStateHandlers } from 'recompose';


import VendorMarker from '../VendorMarker/VendorMarker';

export class GoogleMaps extends Component {
    render() {
        return (
            <div>
                 <div>
            {this.props.reduxState.locations.map( locals => {
          // console.log(locals)
           return( 
             <VendorMarker locals= {locals} />
            )})}
    </div>
 </div>
        )
    }
}

const mapRedux = reduxState => {
    
    return { reduxState }
    }

export default connect(mapRedux)(GoogleMaps)
