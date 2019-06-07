import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withGoogleMap, GoogleMap, Marker, InfoWindow, withScriptjs } from 'react-google-maps';


export class MenutItems extends Component {


    state = {
        
    }



    render() {


        return (


            <div>
                <h4>
                    
                    {this.props.items.item}
                    {this.props.items.price}
                    {this.props.items.description}
                  </h4>  
            </div>
        )
    }
}

export default MenutItems
