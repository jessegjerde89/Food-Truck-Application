import React, { Component } from 'react'
import { connect } from 'react-redux'

import './VendorDashboard.css'
// import VendorDashboardTable from '../VendorDashboardTable/VendorDashboardTable';

import { MuiThemeProvider } from "@material-ui/core/styles";
import { Delete, Edit, Search } from "@material-ui/icons";
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Grid, Table } from '@material-ui/core';
import { TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';



class VendorDashboard extends Component {
  state = {
      vendor_name: this.props.item.vendor_name || '',
      item: this.props.item.item || '',
      description: this.props.item.description || '',
      price: this.props.item.price || '',
      id: this.props.item.id || '',
      isediting: false,
      currentVendor: ''
    }
    

      
      // dispatch for settin the menu items
      componentDidMount() {
       
        this.props.dispatch({ type: 'FETCH_DASH'})
        this.setState({ 
          vendor_name: (this.props.reduxState.user.vendor_name)
        }) 
        console.log(this.props)
      }
      
      // dispatch for adding new menu items
      // handleAdd = (event) => {
      // this.setState({ 
      //     vendor_name: (this.props.reduxState.user.vendor_name)
      //   }) 
      //   this.sendDispatch()
      // }

      sendDispatch = () => {
        if (this.state.isediting){
          this.props.dispatch({type:'EDIT_ITEM', payload: this.state })
          console.log(this.state)
          this.setState({ 
              isediting: false
          })
        } else {
            this.props.dispatch({type: 'ADD_ITEM', payload: this.state})
      }

      // this.clearInputs()
    }

      // dispatch for deleting menu items
      handleDelete = (deletethis) => {
        console.log(this.state)
        this.props.dispatch({type: 'DELETE_ITEM', payload: {id:deletethis}})
      }

      // dispatch for editing menu items
      handleEdit = (item) => {
        console.log('the item', item); 
        this.setState({
          id: item.id,
          vendor_name: item.vendor_name,
          item: item.item,
          description: item.description,
          price: item.price,
          isediting: true
        })
        // this.props.dispatch({type: 'SEND_EDIT', payload: item })
        // this.sendDispatch(); 
      }
      
      // handles all changes for all inputs 
        handleInputChangeFor = name => (event) => {
          event.preventDefault(); 
            this.setState({
              [name]: event.target.value,
            });
          }

        clearInputs = () => {
          this.setState({
          vendor_name: '' ,
          item: '' ,
          description: '' ,
          price:'' 
          })
        }

        render() {

          console.log(this.state)
            return (
              // displays users name onto dashboard
        <div className= "wrapper">
          <div className="title" align="center"><span>
           {this.props.reduxState.user.username}'s Dashboard

          </span></div>
      <form className = "vendor-form">
        
          {/* input for menu item */}
         <div align= "center" 
              className= "textfields">
           
         <TextField
            type="text"
            name="item"
            label="item"
            variant="outlined"
            required
            autoFocus
            value={this.state.item}
            onChange={this.handleInputChangeFor("item")}
            />
          
            {/* input for description of item */}
          <TextField
            type="text"
            name="description"
            label="description"
            variant="outlined"
            required
            autoFocus
            value={this.state.description}
            onChange={this.handleInputChangeFor("description")}
          />
           
          {/* input for price of item */}
          <TextField
            type="text"
            name="price"
            label="price"
            variant="outlined"
            required
            autoFocus
            value={this.state.price}
            onChange={this.handleInputChangeFor("price")}
          />
            </div>
          <Button 
            type="button"
            onClick={this.sendDispatch}
            color = "primary"
            variant = "contained"
          >
          Add New Item 
          </Button>
          </form>
      
      <div>

      <Paper >
      <Table >
        <TableHead>
          <TableRow>
            <TableCell align="right">Item Number</TableCell>
            <TableCell align="right">Menu Item</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {this.props.item.map(item => {
          if (item.vendor_name === this.props.reduxState.user.vendor_name) {
             return (
            <TableRow key={item.id}>
            
              <TableCell align="right">{item.id}</TableCell>
              <TableCell align="right">{item.item}</TableCell>
              <TableCell align="right">{item.description}</TableCell>
              <TableCell align="right">{item.price}</TableCell>
              <TableCell align="right"><Delete onClick={() => this.handleDelete(item.id)}/></TableCell>
              <TableCell align="right"><Edit onClick={(event) => this.handleEdit(item)}/></TableCell>
            </TableRow>
             )}}
          )}
        </TableBody>
      </Table>
    </Paper>

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