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
<<<<<<< HEAD:src/components/MapComponents/MapPage.js
                 {/* <VendorLocationPage /> */}
=======
>>>>>>> 9941dc88ffc9e84ada9d8b8a0739a72d393a97d3:src/components/MapPage/MapPage.js
                 
            </div>
        )
    }
}

export default connect()(MapPage)
