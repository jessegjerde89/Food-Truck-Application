// import React, { Component } from 'react'; 
// import { connect } from 'react-redux'; 


// class MapContainer extends Component {
 
// state = {
//     newMarker: {
//         latitude: '0',
//         longitude: '0'
//     }
// }

// componentDidMount() {
//     {this.props.dispatch({ type: 'FETCH_LOCATION'})}
// }

// changeLat = (event) => {
//     this.setState({
//         latitude: event.target.value
//     })
// }    

// changeLong = (event) => {
//     this.setState({ 
//         longitude: event.target.value
//     })
// }

// handleClick = (event) => {
//     event.preventDefault()
//     console.log(this.state)
//     console.log(this.props.reduxState)
//     this.props.dispatch({ type: 'ADD_LOCATION', 
//     payload:{ 
//         latitude: this.state.latitude,
//         longitude: this.state.longitude
//     }})
// }

// render() {
//     return( 
//         <div >
//     <h3>Change Your Location Here!</h3>
//     <input 
//     type="number"
//     onChange={this.changeLat} 
//     placeholder="latitude" 
//     />
//     <input 
//     type="number" 
//     onChange={this.changeLong} 
//     placeholder="longitude" 
//     />
//     <button 
//     onClick={() => {this.handleClick}}
//     >Change Location</button>
//         </div>
//         )
//     }  
// }

// const mapRedux = reduxState => {
//     return { 
//         reduxState
//     }
// }

// export default connect(mapRedux)(MapContainer); 