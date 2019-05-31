import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Vendor.css'

export class Vendor extends Component {



    
componentDidMount() {

    this.props.dispatch({ type:'FETCH_ITEMS'})
    console.log(this.props)
}


    render() {
        return (
            
            <div>
                

                <h1>{this.props.reduxState.user.vendor_name} Menu </h1>
                <table className="vendorTable">
                    <tr>
                    <th> Menu Item </th>
                    <th> Item Number </th>
                    <th> Description </th>
                    <th> $ Price </th>
                    </tr>
                <tbody>
                    <tr>
                    </tr>

                        {this.props.item.map(item => {
                        return ( <tr >
                                <td> {item.id} </td>
                                <td> {item.item} </td>
                                <td> {item.description} </td>
                                <td> {item.price} </td> 
                               
                                </tr> )
                        })}
                </tbody>
                </table>
            </div>
        )
    }
}

const mapState = reduxState => {
return {
    item: reduxState.menuItem,     
    reduxState
    }   
}
export default connect(mapState)(Vendor)
