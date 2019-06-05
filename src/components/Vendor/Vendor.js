import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Vendor.css'
import { MuiThemeProvider } from "@material-ui/core/styles";
import { Favorite } from "@material-ui/icons";

export class Vendor extends Component {

state = {
    favorite: false
}

    
componentDidMount() {
    // dispatch for getting menu items
    this.props.dispatch({ type:'FETCH_ITEMS'})
    console.log(this.props.reduxState.user.id)
}

favoriteItem = (event) => {
event.preventDefault() 
this.setState({ favorite: !this.state.favorite})
// if (this.state.favorite === false){
//     this.setState({
//         favorite: true
//     })
// } else {
//     this.setState({
//         favorite: false
//     })

console.log(this.state)
}


    render() {

       

        return (
            
            <div>

                    <Favorite onClick={this.favoriteItem} />

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
                    if (item.vendor_name === this.props.reduxState.user.vendor_name) {
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
