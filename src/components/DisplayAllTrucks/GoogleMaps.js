import React, { Component } from 'react'
import { connect } from 'react-redux'

import VendorMarker from '../VendorMarker/VendorMarker';

export class GoogleMaps extends Component {
    render() {
        return (
            <div>
                <div>
                    {this.props.reduxState.locations.map( locals => {

                     return( <VendorMarker locals= {locals} /> )
                    })}
                </div>
             </div>
            )
        }
    }

const mapRedux = reduxState => { return { reduxState } }

export default connect(mapRedux)(GoogleMaps)
