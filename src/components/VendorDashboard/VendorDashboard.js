import React, { Component } from 'react'
import { connect } from 'react-redux'
import './VendorDashboard.css'

class VendorDashboard extends Component {
    state = {
        item: '',
        itemNumber: '', 
        description: '',
        price: ''
      }
      
      // dispatch for settin the menu items
      componentDidMount() {
        this.props.dispatch({ type: 'FETCH_DASH'})
        console.log(this.props)
      }
      
      // dispatch for adding new menu items
      handleAdd = (event) => {
        event.preventDefault()
        console.log(this.state)
      this.props.dispatch({type: 'ADD_ITEM', payload: this.state})
      }

      // dispatch for deleting menu items
      handleDelete = (deletethis) => {
        this.props.dispatch({type: 'DELETE_ITEM', payload: {id:deletethis}})
      }

      // dispatch for editing menu items
      handleEdit = (editthis) => {
        this.props.dispatch({type:'EDIT_ITEM', payload: {id:editthis}})
      }
      
      // handles all changes for all inputs 
        handleInputChangeFor = propertyName => (event) => {
            this.setState({
              [propertyName]: event.target.value,
            });
          }

        render() {
            return (
              // displays users name onto dashboard
        <div align= "center">
            <h2 > {this.props.reduxState.user.username}'s Dashboard</h2>
        <button
            type="button"
            onClick={this.handleAdd}
          >
          Add New Item 
          </button>
          {/* input for menu item */}
          <input 
            type="text"
            placeholder="item"
            name="item"
            value={this.state.item}
            onChange={this.handleInputChangeFor("item")}
            />
            {/* input for description of item */}
          <input 
            type="text"
            placeholder="description"
            name="description"
            value={this.state.description}
            onChange={this.handleInputChangeFor("description")}
          />
          {/* input for price of item */}
          <input 
            type="number"
            placeholder="price"
            name="price"
            value={this.state.price}
            onChange={this.handleInputChangeFor("price")}
          />
      
      {/* table for menu items */}
        <table className="dashTable">
            <tr>
              <th> Item Number </th>
              <th> Item </th>
              <th> Description </th>
              <th> Price </th>
            </tr>
                  {/* mapping threw all items */}
                  {this.props.item.map(item => {
                   return (<tr > 
                            <td> {item.id} </td>
                            <td> {item.item} </td>
                            <td> {item.description} </td>
                            <td> {item.price} </td> 
                            <button onClick={() => this.handleDelete(item.id)}>Delete</button>
                            <button onClick={() => this.handleEdit(item.id)}>Edit</button>
                            </tr>)
                  })}
             
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
        export default connect(mapState)(VendorDashboard)