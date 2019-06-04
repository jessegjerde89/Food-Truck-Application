import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Marker, InfoWindow } from 'react-google-maps';

export class AllTheTrucks extends Component {


    state = {
        locations: undefined
    }

    componentDidMount = (event) => {
       
        this.props.dispatch({type: 'SET_LOCATION'})
        this.setState ({
            locations: this.props.reduxState.locations
        })
        console.log(this.state.locations)
    }

    // componentDidUpdate() {
    //     this.props.dispatch({type: 'SET_LOCATION'})
    //     this.setState ({
    //         locations: this.props.reduxState.locations
    //     })
    //     console.log(this.props.reduxState.locations)
    // }

    addLocations = (event) => {
        event.preventDefault()
        this.setState({ 
            locations: true
        })
        console.log(this.props.reduxState.locations)
    }
    goToMenu() {
        
    }


    render() {

        const truckIcon = 
        { url: 'http://wherethatfoodtruck.com/graphics/default/logo.png', 
                scaledSize: { width: 32, height: 40 } };
        
        const favIcon = 
        { url: "http://simpleicon.com/wp-content/uploads/Google-Place-Optimization.png" }

        
        return (

            <div>
          { this.state.locations === true ?  
        
           ( this.props.reduxState.locations.map( locals => {
                return ( <Marker 
                        position = {{
                            lat: locals.latitude,
                            lng: locals.longitude
                        }}
                    //    onClick={this.displayMenu}
                        icon = {truckIcon}
                        onClick = {this.goToMenu}
                        >
                            <InfoWindow
                            visible={this.state.showingInfoWindow}
                            marker= {this.state.activeMarker}
                        >
                            <div>
                                <h3> {locals.vendor_name} </h3>
                            </div>
                        </InfoWindow>
                        </Marker>
                    )
                    }) 
               )  
               : <button onClick = {this.addLocations}>Click to Refresh</button>
            }
           
            </div>
    )
    }
}


const mapRedux = reduxState => {
    return { 
        reduxState, 
        
    }
}
export default connect(mapRedux)(AllTheTrucks)
