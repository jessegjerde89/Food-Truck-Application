import React, { Component } from 'react'
import { connect } from 'react-redux'
import './VendorDashboard.css'
import { MuiThemeProvider } from "@material-ui/core/styles";
import { Close, Delete, Edit, Search } from "@material-ui/icons";
import VendorItems from './VendorItems'


class VendorDashboard extends Component {
    state = {
        vendor_name: this.props.item.vendor_name || '',
        item: this.props.item.item || '',
        description: this.props.item.description || '',
        price: this.props.item.price || '',
        id: this.props.item.id || '',
      }
      
      // dispatch for settin the menu items
      componentDidMount() {
        this.props.dispatch({ type: 'FETCH_DASH'})
        console.log(this.props)
      }
      
      // dispatch for adding new menu items
      handleAdd = (event) => {
        event.preventDefault(); 
        console.log('here', this.props.reduxState)
        this.setState({ 
          vendor_name: this.props.reduxState.user.vendor_name,
          id: this.props.reduxState.menuItem.id
        }) 
        this.sendDispatch()
        this.props.dispatch({ type: 'FETCH_DASH'})
        this.props.dispatch({ type: 'SET_DASH'})

      }

      sendDispatch = (editthis) => {
        if (this.state.isediting){
          this.props.dispatch({type:'EDIT_ITEM', payload: this.state })
        } else {
            this.props.dispatch({type: 'ADD_ITEM', payload: this.state})
          // }
        this.setState({
            isediting: false
          })
          console.log(this.state)
        }
    }

      // dispatch for deleting menu items
      handleDelete = (deletethis) => {
        this.props.dispatch({type: 'DELETE_ITEM', payload: {id:deletethis}})
      }

      // dispatch for editing menu items
      handleEdit = (editthis) => {
        this.setState({
          isediting: true,
          id: editthis
        })
        console.log(this.state)
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
       <div>
        <div >
            <h2> {this.props.reduxState.user.username}'s Dashboard</h2>
      <form className = "vendor-form">
        
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
          <button
            type="button"
            onClick={this.handleAdd}
          >
          Add New Item 
          </button>
          </form>
      </div>
      
      <div>
      {/* table for menu items */}
        <form onSubmit={this.handleSubmit}>
            
              <div> Item Number </div> 
              <div> Item </div>
              <div> Description </div> 
              <div> Price </div>
           

                  {this.props.item.map(item => {
                    if (item.vendor_name === this.props.reduxState.user.vendor_name) {
                   return <div><div key = {item.id} />
                            <div> <VendorItems toggleInput={this.toggleInput} isClicked={this.state.isClicked} handleChange={this.handleChange} valueToChange="item" item={item.id} /></div>
                            <div> <VendorItems toggleInput={this.toggleInput} isClicked={this.state.isClicked} handleChange={this.handleChange} valueToChange="item" item={item.item} /></div>
                            <div> <VendorItems toggleInput={this.toggleInput} isClicked={this.state.isClicked} handleChange={this.handleChange} valueToChange="item" item={item.description} /></div>
                            <div> <VendorItems toggleInput={this.toggleInput} isClicked={this.state.isClicked} handleChange={this.handleChange} valueToChange="item" item={item.price} /></div>
                            <div><Delete onClick={() => this.handleDelete(item.id)}/></div>
                            {/* <td><Edit onClick={() => this.handleEdit(item.id)}/></td> */}
                    </div>
                    }
                  })}
                  <button type="submit">keep</button>
            </form>
       </div>
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