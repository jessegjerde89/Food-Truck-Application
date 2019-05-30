import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Vendor extends Component {



    
componentDidMount() {

    this.props.dispatch({ type:'FETCH_ITEMS'})
}

    render() {
        return (
            
            <div>


                <h1>{this.props.reduxState.user.vendor_name} Menu </h1>
                <table>
                    <tr>
                    <th> Menu Item </th>
                    <th> Item Number </th>
                    <th> Description </th>
                    <th> $ Price </th>
                    </tr>
                <tbody>
                    <tr>
                    {/* {this.props.reduxState.} */}

                    </tr>
                </tbody>
                </table>
            </div>
        )
    }
}

const mapState = reduxState => {
return {
    reduxState
    }   
}
export default connect(mapState)(Vendor)
