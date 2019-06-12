// import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import { withGoogleMap, GoogleMap, Marker, InfoWindow, withScriptjs } from 'react-google-maps';
// import { Link } from 'react-router-dom'

// import './MiddleVendor.css'



// class MiddleVendor extends Component {

//     state = { 
//         currentLatLng: {
//             lat: 0,
//             lng: 0
//         }
//     }

//     render() {

//         const API_KEY = process.env.REACT_APP_GOOGLE_KEY;

//         return (
//             <div>
//                 <div className = "wrapper">
//         <div className = "map">
//         <GoogleMapContainer
            
//             googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
//             currentLocation={this.state.currentLatLng}
//             loadingElement={<div style={{ height: `100%` }} />}
//             containerElement={<div style={{ height: `600px`, width: `700px` }} />}
//             mapElement={<div style={{ height: `100%` }} />}
            
//         />
//         </div>
//         <div className="keys">
//                 <h1>The Key  </h1>       
//               <div>

//                 <h3>Trucks <img 
//                 src= "http://wherethatfoodtruck.com/graphics/default/logo.png" 
//                 alt="truck-icon" 
//                 width= "10%"
//                 height= "5%"
//                 /></h3> 

//                 </div><div>

//                 <h3>You <img 
//                 src="https://png.pngtree.com/element_our/md/20180526/md_5b09436fd0515.png" 
//                 alt="fav-icon"
//                 width="20%"
//                 /></h3>

//               </div><div>

//                 <h3>Favorite  <img 
//                 src="http://simpleicon.com/wp-content/uploads/Google-Place-Optimization.png" 
//                 alt="you-are-here"
//                 width="15%"/>
//                 </h3>

//               </div>
//             </div>
//         </div> 

                
//             </div>
//         )
//     }
// }


// const mapRedux = reduxState => {
    
// return { reduxState }
// }
    
// export default connect(mapRedux)(MiddleVendor)

