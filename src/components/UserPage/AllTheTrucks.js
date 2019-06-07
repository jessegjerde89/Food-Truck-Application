// import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import { Marker, InfoWindow } from 'react-google-maps';
// import MenuItems from '../MenuItems/MenuItems'

// export class AllTheTrucks extends Component {


//     state = {
//         locations: false,
        

//     }

//     componentDidMount(){
       
//         this.props.dispatch({type: 'FETCH_LOCATION'})
//         this.props.dispatch({type: 'FETCH_DASH'})
//         this.setState ({
//             locations: this.props.reduxState.locations
//         })
//         console.log(this.state.locations)
//     }

//     // componentDidUpdate() {
//     //     this.props.dispatch({type: 'SET_LOCATION'})
//     //     this.setState ({
//     //         locations: this.props.reduxState.locations
//     //     })
//     //     console.log(this.props.reduxState.locations)
//     // }

//     addLocations = (event) => {
//         event.preventDefault()
//         this.setState({ 
//             locations: true
//         })
//         console.log(this.props.reduxState.locations)
//     }
//     goToMenu = (event) => {
//         console.log("this truck", event)
//     }


//     render() {

//         const truckIcon = 
//         { url: 'http://wherethatfoodtruck.com/graphics/default/logo.png', 
//                 scaledSize: { width: 32, height: 40 } };
        
//         // const favIcon = 
//         // { url: "http://simpleicon.com/wp-content/uploads/Google-Place-Optimization.png" }

//         const vendorInfo =  ( this.props.reduxState.menuItem.map( items => { 
//             return ( <div>
//                    {items.item}   
//                    {items.description} 
//                    {items.price} </div> )} ))
        
//         return (

//             <div>
//           { this.state.locations === true ?  
        
//            ( this.props.reduxState.locations.map( locals => {
//                 return ( <Marker 
//                         key = {locals.id}
//                         position = {{
//                             lat: locals.latitude,
//                             lng: locals.longitude
//                         }}
//                     //    onClick={this.displayMenu}
//                         icon = {truckIcon}
//                         value={locals.id}
//                         onClick = {this.goToMenu}
//                         >
                            
//                             <InfoWindow
//                             visible={this.state.showingInfoWindow}
//                             marker= {this.state.activeMarker}
//                         >   
//                             <div>
//                             <h3 className= "vendor_name">
//                                 {locals.vendor_name}
//                             </h3>
//                             <div>
//                                 <div>
                                    
//                                 { this.props.reduxState.menuItem.map( items => { 
                                    
//                                     if ( items.vendor_name === this.props.reduxState.locations.vendor_name) {
//                                     return ( <div>
//                                         {items.item}   
//                                         {items.description} 
//                                         {items.price} </div> )} 
//                                         })
//                                   }
//                               </div>
//                              </div>
//                             </div>
//                         </InfoWindow>
//                         </Marker>
//                     )
//                     }) 
//                )  
//                : <button onClick = {this.addLocations}>Click to Refresh</button>
//             }
           
//             </div>
//     )
//     }
// }


// const mapRedux = reduxState => {
//     return { 
//         reduxState, 
        
//     }
// }
// export default connect(mapRedux)(AllTheTrucks)
