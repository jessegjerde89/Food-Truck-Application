import React, { Component } from "react";
import TrucksMap from "../MapComponents/TrucksMap"
import { connect } from 'react-redux'
// import '../../../en'

class TruckMapContainer extends Component {


	state = {
		currentLatLng: {
			lat: 44.977753,
			lng: -93.265015, 
		}
	}
	
	  render() {

		const API_KEY = process.env.REACT_APP_GOOGLE_KEY;
		
		return (
			<TrucksMap
				trucks={this.props.trucks}
				googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
        		currentLocation={this.state.currentLatLng}
				loadingElement={<div style={{ height: `100%` }} />}
				containerElement={<div style={{ height: `600px`, width: `600px` }} />}
				mapElement={<div style={{ height: `100%` }} />}
				
			>
			
			</TrucksMap>
		)
	}
}
const mapRedux = reduxState => {
	return { reduxState }
}

export default connect(mapRedux)(TruckMapContainer)