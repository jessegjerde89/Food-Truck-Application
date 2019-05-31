import React, { Component } from 'react'
import { connect } from 'react-redux'
import TruckMapContainer from '../MapComponents/TruckMapContainer'
import  VendorLocationPage  from '../VendorLocationPage/VendorLocationPage';

export class MapPage extends Component {
    render() {
        return (
            <div>
                <h1>The Map !</h1>
                 <TruckMapContainer />
                 {/* <VendorLocationPage /> */}
            </div>
        )
    }
}

export default connect()(MapPage)
