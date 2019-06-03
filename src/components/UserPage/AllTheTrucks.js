import React, { Component } from 'react'
import { connect } from 'react-redux'

export class AllTheTrucks extends Component {


    render() {

        const truckIcon = 
        { url: 'http://wherethatfoodtruck.com/graphics/default/logo.png', 
                scaledSize: { width: 32, height: 40 } };
        
        const favIcon = 
        { url: "http://simpleicon.com/wp-content/uploads/Google-Place-Optimization.png" }

        return (

            <div>
                {JSON.stringify(this.props.reduxState)}
            </div>
        )
    }
}


const mapRedux = reduxState => {
    return { reduxState }
}
export default connect(mapRedux)(AllTheTrucks)
