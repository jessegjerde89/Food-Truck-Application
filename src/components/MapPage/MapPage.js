import React, { Component } from 'react'
import { connect } from 'react-redux'

import './MapPage.css'

//change route
import TruckMapContainer from '../TruckMapContainer/TruckMapContainer'

export class MapPage extends Component {
    render() {
        return (
            <div>
                <div className ="title" align="center"><span>
                The Map !
                </span>
                </div>
                 <TruckMapContainer />
                 
            </div>
        )
    }
}

export default connect()(MapPage)
