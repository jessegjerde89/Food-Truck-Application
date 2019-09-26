import React, { Component } from 'react'
import { connect } from 'react-redux'

import {withStyles} from '@material-ui/core/styles'; 
import './VendorDashboard.css'
// import VendorDashboardTable from '../VendorDashboardTable/VendorDashboardTable';

import {ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary,
        ExpansionPanelActions } from '@material-ui/core'

import Checkbox from '@material-ui/core/Checkbox';
import { Delete, Edit } from "@material-ui/icons";
import { TextField, Divider, Button, Chip, Table } from '@material-ui/core';
import { TableBody, TableCell, TableHead, TableRow, Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';


const styles = {
  root: {
    width: '100%'
  },
  input:
  {
    width: "150px",
    padding: "20px"
  },
  description: 
  {
    width: "400px",
    padding: "20px"
  }
}


class VendorDashboard extends Component {
  state = {
      vendor_name: this.props.item.vendor_name || '',
      item: this.props.item.item || '',
      description: this.props.item.description || '',
      price: this.props.item.price || '',
      id: this.props.item.id || '',
      isediting: false,
      currentVendor: '', 
      tag: ''
    }
    
      // dispatch for settin the menu items
      componentDidMount() {
       
        this.props.dispatch({ type: 'FETCH_TAGS'})
        this.props.dispatch({ type: 'FETCH_DASH'})
        this.setState({ 
          vendor_name: (this.props.reduxState.user.vendor_name)
        }) 
        console.log(this.props)
      }
      
      // boxChecked = name = event => {
      //   event.preventDefault(); 
      //  setState({...this.state,[name]: event.target.checked})
      //  console.log(this.state)
      // }

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
          this.clearInputs(); 
        } else {
            this.props.dispatch({type: 'ADD_ITEM', payload: this.state})
            this.clearInputs(); 
      }
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
      }

      // handleChange = () => {
      //   event.preventDefault(); 

      // }
      
      // handles all changes for all inputs 
        handleInputChangeFor = name => (event) => {
          event.preventDefault(); 
            this.setState({
              [name]: event.target.value,
            });
          }

        clearInputs = () => {
          this.setState({
          item: '' ,
          description: '' ,
          price:'' 
          })
        }

        render() {

          const {classes} = this.props; 

          console.log(this.state)
            return (
              // displays users name onto dashboard
        <div className= "wrapperVD">
          <div className="titleDash" align="center">
           {this.props.reduxState.user.username}'s Dashboard

          </div>
          <div className="allInputs">
            <div className={classes.root}>
        <ExpansionPanel defaultExpanded>
       
          {/* input for menu item */}
         <div  className= {classes.column}>
          <div className="ovr1">
           <div className={classes.input}>
            <TextField
                type="text"
                name="item"
                label="item"
                variant="filled"
                required
                value={this.state.item}
                onChange={this.handleInputChangeFor("item")}
                />
            
              {/* input for description of item */}
            </div>
            <div className={classes.input}>
              <TextField
                type="text"
                name="price"
                label="price"
                variant="filled"
                required
                value={this.state.price}
                onChange={this.handleInputChangeFor("price")}
              />
             </div>
            
            </div>
            </div>
              <div className={classes.description}>
                  <TextField
                    type="text"
                    name="description"
                    label="description"
                    variant="filled"
                    multiline
                    value={this.state.description}
                    onChange={this.handleInputChangeFor("description")}
                  />
          
            {/* input for price of item */}
              </div>
      <div className={classes.column} >
      <div className="ovr3">
      <div className="checkBoxes">
            <div className="row1">
              <Checkbox
                  // checked={state.checkedA}
                  // onChange={handleChange('box1')}
                  value="atkinsApproved"
                  inputProps={{
                    'aria-label': 'primary checkbox',
                  }}
                /> Atkins Approved 
                <Checkbox
                  // checked={state.checkedA}
                  // onChange={handleChange('checkedA')}
                  value="containsPeanuts"
                  inputProps={{
                    'aria-label': 'primary checkbox',
                  }}
                /> Con. Peanuts 
                <Checkbox
                // checked={state.checkedA}
                // onChange={handleChange('checkedA')}
                value="kosher"
                inputProps={{
                  'aria-label': 'primary checkbox',
                }}
              /> Kosher 
            </div>
            <div className="row2">
              <Checkbox
                // checked={state.checkedA}
                // onChange={handleChange('checkedA')}
                value="glutenFree"
                inputProps={{
                  'aria-label': 'primary checkbox',
                }}
              /> Gluten-Free 
              <Checkbox
                // checked={state.checkedA}
                // onChange={handleChange('checkedA')}
                value="containsDairy"
                inputProps={{
                  'aria-label': 'primary checkbox',
                }}
              /> Contains Dairy 
              <Checkbox
                // checked={state.checkedA}
                // onChange={handleChange('checkedA')}
                value="halalApproved"
                inputProps={{
                  'aria-label': 'primary checkbox',
                }}
              />  Halal Approved 
            
                  {/* <FormControlLabel
                    value="atkinsApproved"
                    control={<Radio color="primary" />}
                    label="Atkins Approved"
                    labelPlacement="start"
                  />
                  <FormControlLabel
                    value="containsPeanuts"
                    control={<Radio color="primary" />}
                    label="Contains-Peanuts"
                    labelPlacement="start"
                  />
                  <FormControlLabel
                    value="kosherr"
                    control={<Radio color="primary" />}
                    label="Kosher"
                    labelPlacement="start"
                  />
                  <FormControlLabel
                    value="halalApproved"
                    control={<Radio color="primary" />}
                    label="Halal Approved"
                    labelPlacement="start"
                  />
                  <FormControlLabel
                    value="glutenFree"
                    control={<Radio color="primary" />}
                    label="Gluten-Free"
                    labelPlacement="start"
                  />
                  <FormControlLabel
                    value="containsDairy"
                    control={<Radio color="primary" />}
                    label="Contains-Dairy" 
                    labelPlacement="start"
                  />
                </RadioGroup>
              </FormControl> */}
            {/* </div> */}
            </div>
          </div>
        </div>
        </div>
        <Divider />
        <ExpansionPanelActions>
          <div className= "submit-btn">
              <Button 
                type="button"
                onClick={this.sendDispatch}
                color = "primary"
                variant = "contained"
              >
            Add New Item 
            </Button>
        </div>
        </ExpansionPanelActions>
      </ExpansionPanel>
      </div>
      </div>
      <div className="vendor-table">

      <Paper >
      <Table >
        <TableHead>
          <TableRow>
            <TableCell align="right">Item Number</TableCell>
            <TableCell align="right">Menu Item</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Delete</TableCell>
            <TableCell align="right">Edit</TableCell>
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
            // tags: redusState.tags,
            item: reduxState.menuItem, 
                  reduxState
            }   
        }
        export default withStyles(styles)(connect(mapState)(VendorDashboard)); 