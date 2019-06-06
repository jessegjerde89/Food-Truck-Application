import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withGoogleMap, GoogleMap, Marker, InfoWindow, withScriptjs } from 'react-google-maps';
import { compose, withProps, withStateHandlers } from 'recompose';
import CurrentMarker from '../MapComponents/CurrentMarker';


require('dotenv').config()


class userContainer extends Component{

    state = {
    currentLatLng: {
      lat: 0,
      lng: 0, 
    },
    locations: false,
 
    }

    componentDidMount(){
       
      this.props.dispatch({type: 'FETCH_LOCATION'})
      this.props.dispatch({type: 'FETCH_DASH'})
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
        
    }
    
render() {
  console.log(this.props.reduxState)
  console.log(this.state)
  

    const API_KEY = process.env.REACT_APP_GOOGLE_KEY;

    const truckIcon = 
    { url: 'http://wherethatfoodtruck.com/graphics/default/logo.png', 
            scaledSize: { width: 32, height: 40 } };
    
    const GoogleMapContainer = (compose(
      withStateHandlers(() => ({
        isOpen: false,
      }), {
        onToggleOpen: ({ isOpen }) => () => ({
          isOpen: !isOpen,
        })
      }
      ),
    withScriptjs,
    withGoogleMap)

    (props => (
      <GoogleMap
      defaultZoom={13}
      defaultCenter={{ lat: 44, 
                        lng: -93 }}
      >
        <div>
        { this.state.locations === true ?  
    
         this.props.reduxState.locations.map( locals => {

           return(  <Marker 
            key = {locals.id}
            position = {{
                lat: locals.latitude,
                lng: locals.longitude
            }}
        //    onClick={this.displayMenu}
            icon = {truckIcon}
            value={locals.id}
            onClick = {props.onToggleOpen}
            >
                
            { props.isOpen && <InfoWindow onCloseClick={props.onToggleOpen}>
                
                <div>
                  <h3 className= "vendor_name">
                      {locals.vendor_name}
                  </h3>
                    <div>
                        
                    { this.props.reduxState.menuItem.map( items => { 
                        
                        if ( items.vendor_name === this.props.reduxState.locations.vendor_name) {
                        return ( <div>
                            {items.item}   
                            {items.description} 
                            {items.price} </div> )} 
                            })
                        }
                    </div>
                    
                </div>
                </InfoWindow> } 
                </Marker>
            )
            }        
            )
        
        : <button onClick = {this.addLocations}>Click to Refresh</button>  
  }
    </div>

    <CurrentMarker />
      </GoogleMap>
    )))
  
    return (
      <div>
        <GoogleMapContainer
            
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
            currentLocation={this.state.currentLatLng}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `600px`, width: `600px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            
        />
        <div>
                        <h2>Key: </h2>       
                    
                        Trucks: <img 
                        src= "http://wherethatfoodtruck.com/graphics/default/logo.png" 
                        alt="truck-icon" 
                        width= "10%"
                        height= "5%"
                        />
                        
                        You are here: <img 
                        src="https://png.pngtree.com/element_our/md/20180526/md_5b09436fd0515.png" 
                        alt="fav-icon"
                        width="20%"
                        />

                        Favorite : <img 
                        src="http://simpleicon.com/wp-content/uploads/Google-Place-Optimization.png" 
                        alt="you-are-here"
                        width="15%"/>
                    </div>
        </div>
        
    )
  }
}

const mapRedux = reduxState => {
    
return { reduxState }
}

export default connect(mapRedux)(userContainer)