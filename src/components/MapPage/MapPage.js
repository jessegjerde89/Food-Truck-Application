import React, { Component } from 'react'
import { connect } from 'react-redux'

import './MapPage.css'

//change route
import TruckMapContainer from '../TruckMapContainer/TruckMapContainer'

export class MapPage extends Component {
    render() {

        console.log(this.props.reduxState)
        return (
            <div>
                <div className ="title" align="center"><span>
                The Map !
                </span>
                </div>
                 <TruckMapContainer />
                 {/* <VendorLocationPage /> */}
                 
            </div>
        )
    }
}

export default connect()(MapPage)
