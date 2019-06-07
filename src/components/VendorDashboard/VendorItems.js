import React, { Component } from 'react'
import { connect } from 'react-redux'



export class VendorItems extends Component {

    render() {
        return(

            (this.props.isClicked) 
            ?            
                <input 
                placeholder={this.props.item} 
                onChange = {(event) => { this.props.handleChange(this.props.valueToChange, event) }} />            
            :
            <span onClick={this.props.toggleInput}>{(this.props.item) 
                
            ? 
            this.props.item: '*EMPTY*'}</span>
        )
    }
}


export default VendorItems
