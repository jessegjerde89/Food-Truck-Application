import React, { Component } from 'react'
import { connect } from 'react-redux'

class VendorDashboard extends Component {
    state = {
        item: '',
        itemNumber: 0, 
        description: '',
        price: 0
      }
      
      componentDidMount() {
        // this.props.dispatch({ type: 'FETCH_DASH'})
        console.log(this.props)
      }
      
      handleAdd = (event) => {
        event.preventDefault()
        console.log(this.state)
      this.props.dispatch({type: 'ADD_ITEM', payload: this.state})
      }
      

        handleInputChangeFor = propertyName => (event) => {
            this.setState({
              [propertyName]: event.target.value,
            });
          }

        render() {
            return (
        <div>
            <h2> Vendor Dashboard</h2>
        <button
            type="button"
            onClick={this.handleAdd}
          >
          Add New Item 
          </button>
          <input 
            type="text"
            placeholder="item"
            name="item"
            value={this.state.item}
            onChange={this.handleInputChangeFor("item")}
            />

             <input 
            type="number"
            placeholder="itemNumber"
            name="itemNumber"
            value={this.state.itemNumber}
            onChange={this.handleInputChangeFor("itemNumber")}
            />

          <input 
            type="text"
            placeholder="description"
            name="description"
            value={this.state.description}
            onChange={this.handleInputChangeFor("description")}
          />
            <input 
            type="number"
            placeholder="price"
            name="price"
            value={this.state.price}
            onChange={this.handleInputChangeFor("price")}
          />
      
          <table>
            <tr>
              <th> Menu Item </th>
              <th> Item Number </th>
              <th> Description </th>
              <th> Price </th>
            </tr>

              <tr>
                {JSON.stringify(this.props)}
              </tr>
      
          </table>
        </div>
      
          )
        }
      }
      
      const mapState = reduxState => {
        return {
            // item: reduxState.item, 
            // itemNumber: reduxState.itemNumber, 
            // description: reduxState.description,
            // price: reduxState.price 
            reduxState

            }   
        }
        export default connect(mapState)(VendorDashboard)