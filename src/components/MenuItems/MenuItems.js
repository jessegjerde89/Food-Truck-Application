import React, { Component } from 'react'
import { connect } from 'react-redux'

export class MenuItems extends Component {
    render() {
        return (
        <div>
           
            <div>
            { this.props.reduxState.menuItem.map( items => { 
                console.log(this.props.reduxState.menuItem.user_id)

                // if ( items.vendor_name === this.props.reduxState.user.vendor_name) {
                    // console.log({items.vendor_name)
                return ( <div>
                    {items.item}   
                    {items.description} 
                    {items.price} </div> 
                        )} 
                    // }
                    )
                }
            </div>
        </div>
          
        )
    }
}
 
const mapRedux = reduxState => {
    return {
        reduxState
    }
}
export default connect(mapRedux)(MenuItems)
