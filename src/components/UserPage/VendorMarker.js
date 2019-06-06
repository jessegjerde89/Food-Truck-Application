import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withGoogleMap, GoogleMap, Marker, InfoWindow, withScriptjs } from 'react-google-maps';
import MenuItems from '../UserPage/MenutItems'


export class VendorMarker extends Component {


state = {
    isOpen : false    
}

toggleOn = () => {
    this.setState({
        isOpen: !this.state.isOpen
    })

console.log(this.props.reduxState)
}

    render() {

        const truckIcon = 
        { url: 'http://wherethatfoodtruck.com/graphics/default/logo.png', 
                scaledSize: { width: 32, height: 40 } };


        return (
            <div>

                <Marker 
            key = {this.props.locals.id}
            position = {{
                lat: this.props.locals.latitude,
                lng: this.props.locals.longitude
            }}
            icon = {truckIcon}
            onClick = {this.toggleOn}
            >
              
                
            { this.state.isOpen &&  <InfoWindow>
                
                <div>
                  <h3 className= "vendor_name">
                      {this.props.locals.vendor_name}
                  </h3>
                    <div>
                        
                    { this.props.reduxState.menuItem.map( items => { 
                        // console.log(items)
                        {
                        return ( 
                            
                                <MenuItems items={items} />
                            
                            )} 
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


