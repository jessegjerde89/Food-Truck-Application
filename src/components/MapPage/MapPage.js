import React, { Component } from 'react'
import { connect } from 'react-redux'

import './MapPage.css'

//change route
import TruckMapContainer from '../TruckMapContainer/TruckMapContainer'

export class MapPage extends Component {
    render() {

        console.log(this.props.reduxState)
        return (
            <>
                <div className="mapBackground">
                    <div className ="title" align="center">
                        Your Location !
                    </div>
                        <div className="mapContainer">
                            <TruckMapContainer />
                        </div>
                        {/* <VendorLocationPage /> */}       
                </div>
            </>
        )
    }
}

export default connect()(MapPage)
