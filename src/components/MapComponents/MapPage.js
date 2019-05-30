import React, { Component } from 'react'
import TruckMapContainer from '../MapComponents/TruckMapContainer'
import  VendorLocationPage  from '../VendorLocationPage/VendorLocationPage';

export class MapPage extends Component {
    render() {
        return (
            <div>
                 <TruckMapContainer />
                 <VendorLocationPage />
            </div>
        )
    }
}

export default MapPage
