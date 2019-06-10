import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withGoogleMap, GoogleMap, Marker, InfoWindow, withScriptjs } from 'react-google-maps';
import { Link } from 'react-router-dom'


export class MiddleMarker extends Component {
    render() {
        return (
            <>
                <div>
                      <Link className="link_to" to="/vendor">
                        Menu 
                      </Link>
                      </div>
                 
                    <div>
                        
                    { this.props.reduxState.menuItem.map( items => { 
                        // console.log(items)
                        if(items.vendor_name === this.state.currentVendor)
                        {
                        return (   
                            <div>
                            {items.item}   
                            {items.description} 
                            {items.price} 
                            </div>            
                            )} 
                          })
                        }       
                    </div>
            </>
        )
    }
}

const mapRedux = reduxState => {
    
  return { reduxState }
  }
      
  export default connect(mapRedux)(MiddleMarker)
  
