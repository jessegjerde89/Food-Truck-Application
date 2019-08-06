import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withGoogleMap, GoogleMap, Marker, InfoWindow, withScriptjs } from 'react-google-maps';
import { Link } from 'react-router-dom'

import MiddleMarker from './MiddleMarker'; 


class VendorMarker extends Component {


state = {
    isOpen : false,
    currentVendor: ''
}

// componentDidMount() {
//     this.props.dispatch({type: "GET_CURRENT"})
// }

// {/* <Toggle /> */}
toggleOn = (vendor) => {
    this.setState({
        isOpen: !this.state.isOpen,
        currentVendor: vendor
    })
    console.log(this.props.locals)
    this.props.dispatch({ type: "CURRENT_MARKER", payload: this.state})
}

    render() {

        const truckIcon = 
        { url: 'http://wherethatfoodtruck.com/graphics/default/logo.png', 
                scaledSize: { width: 32, height: 40 } };

        // const favIcon = 
        // { url: 'http://simpleicon.com/wp-content/uploads/Google-Place-Optimization.png',
        //         scaledSize: { width: 32, height: 40 } };

        return (
            <div>
                <Marker 
                    key = {this.props.locals.id}
                    
                    position = {{
                        lat: this.props.locals.latitude,
                        lng: this.props.locals.longitude
                    }}
                    icon = {truckIcon}
                    onClick = {() => this.toggleOn(this.props.locals.vendor_name)}
                    >
                    {/* If vendor is map icon is clicked on */}
                    { this.state.isOpen &&  <InfoWindow>
                        
                        <div>
                        <h3 className= "vendor_name">
                            {this.props.locals.vendor_name}
                        </h3>
                        {/* <MiddleMarker /> */}
                        <div>
                            <Link className="link_to" to="/vendor">
                                Menu 
                            </Link>
                            </div>
                        
                            <div>
                            { this.props.reduxState.menuItem.map( items => { 
                                // console.log(items)
                                if(items.vendor_name === this.state.currentVendor) {
                                    return (   
                                        <div>
                                        {items.item}   
                                        {items.description} 
                                        {items.price} 
                                        </div>            
                                    )
                                } 
                                })
                                }       
                            </div>
                        </div>
                    </InfoWindow> 
                } 
                </Marker>        
            </div>
        )
    }
}

const mapRedux = reduxState => {
    
return { reduxState }
}
    
export default connect(mapRedux)(VendorMarker)


