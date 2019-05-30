import React, { Component } from 'react'
import { connect} from 'react-redux'


export class VendorLocationPage extends Component {
    
    state = {
        latitude: '0',
        longitude: '0'
    }
    
componentDidMount() {
    // this.props.dispatch({ type: 'SET_LOCATION'})
    console.log(this.props)
}

    changeLat = (event) => {
        this.setState({
             
            latitude: event.target.value
        })
    }    
    
    changeLong = (event) => {
        this.setState({ 
          
            longitude: event.target.value
        })
    }
    
    handleClick = (event) => {
        event.preventDefault()
        console.log(this.state)
        console.log(this.props.reduxState)
        {this.props.dispatch({ type: 'ADD_LOCATION', payload: this.state})}
    }
    
    render() {
        return( 
            <div>
                <div>
                    <h2>Key: </h2>       
                </div>
                <div>
                    Trucks: <img src= "" alt="truck-icon"></img>
                </div>
                <div>
                    Favorite Trucks: <img src="" alt="fav-icon"></img>
                </div>
                <div>
                    You are here: <img src="" alt="you-are-here"></img>
                </div>
        
        <h3>Add New Spot</h3>
        
        <input 
        type="number" 
        onChange={this.changeLat} 
        placeholder="latitude" 
        />
        <input 
        type="number" 
        onChange={this.changeLong} 
        placeholder="longitude" 
        />

        <button onClick={this.handleClick}>Change Location</button>
            </div>
            )
        }  
    }
    
    const mapRedux = reduxState => {
        return { 
            reduxState
        }
    }
    
    export default connect(mapRedux)(VendorLocationPage); 
    
