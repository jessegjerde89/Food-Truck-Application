import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withGoogleMap, GoogleMap, Marker, InfoWindow, withScriptjs } from 'react-google-maps';
import MenuItems from '../UserPage/MenutItems'
import { Link } from 'react-router-dom'


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

        const favIcon = 
        { url: 'http://simpleicon.com/wp-content/uploads/Google-Place-Optimization.png',
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
                {/* {this.props.dispatch({type: 'INSERT_CURRENT'})} */}
                <div>
                  <h3 className= "vendor_name">
                      {this.props.locals.vendor_name}
                <div>
                      <Link className="link_to" to="/vendor">
                        Vendor
                      </Link>
                      </div>
                  </h3>
                    <div>
                        
                    {/* { this.props.reduxState.menuItem.map( items => { 
                        // console.log(items)
                        if(items.vendor_name === this.props.reduxState.user.vendor_name)
                        {
                        return ( 
                            
                            <div>
                            {items.item}   
                            {items.description} 
                            {items.price} 
                            </div> 
                            
                            )} 
                            })
                        } */}
                        
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


