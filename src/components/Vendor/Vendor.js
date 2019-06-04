import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Vendor.css'

export class Vendor extends Component {



    
componentDidMount() {
    // dispatch for getting menu items
    this.props.dispatch({ type:'FETCH_ITEMS'})
    console.log(this.props.reduxState.user.id)
}



    render() {

        // const favIcon = 
        // { url: "http://simpleicon.com/wp-content/uploads/Google-Place-Optimization.png" }

        return (
            
            <div>
                

                <h1>{this.props.reduxState.user.vendor_name} Menu </h1>

               <div></div>
                {/* table displaying menu items */}
                <table className="vendorTable" >
                    <tr>
                    <th> Menu Item </th>
                    <th> Item Number </th>
                    <th> Description </th>
                    <th> $ Price </th>
                    </tr>
                <tbody>
                    {/* mapping through menu items */}
                {this.props.item.map(item => {
                    if (item.user_id === this.props.reduxState.user.id) {
                        return ( <tr key = {item.id}>
                                <td> {item.id} </td>
                                <td> {item.item} </td>
                                <td> {item.description} </td>
                                <td> {item.price} </td> 
                                </tr> )
                            }}
                        )}
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
