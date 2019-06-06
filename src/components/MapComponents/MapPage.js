import React, { Component } from 'react'
import { connect } from 'react-redux'
import TruckMapContainer from '../MapComponents/TruckMapContainer'

export class MapPage extends Component {
    render() {

        console.log(this.props.reduxState)
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
