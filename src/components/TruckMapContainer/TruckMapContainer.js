import React, { Component } from "react";
import { connect } from 'react-redux'


import TrucksMap from "../TrucksMap/TrucksMap"
import './TruckMapContainer'

require('dotenv').config()


class TruckMapContainer extends Component {

	state = {
		currentLatLng: {
			lat: 41.559977,
			lng: -106.611563, 
		}
	}

	
	  render() {

		const API_KEY = process.env.REACT_APP_GOOGLE_KEY;
		
		return (
			<div className= "wrapper"> 
			<div >
			<TrucksMap
				trucks={this.props.trucks}
				googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
        		currentLocation={this.state.currentLatLng}
				loadingElement={<div style={{ height: `100%` }} />}
				containerElement={<div style={{ height: `600px`, width: `600px` }} />}
				mapElement={<div style={{ height: `100%` }} />}
				
			/>
			</div>
			</div>
		)
	}
}
const mapRedux = reduxState => {
	return { reduxState }
}

export default connect(mapRedux)(TruckMapContainer)