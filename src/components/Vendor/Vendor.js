import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Vendor.css'
import { MuiThemeProvider } from "@material-ui/core/styles";
import { Favorite } from "@material-ui/icons";
import { makeStyles } from '@material-ui/core/styles';
import {Card, CardActionArea, CardActions, CardContent, CardMedia } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

export class Vendor extends Component {

state = {
    favorite: false,
    menu_id: 0,
    user_name: '',
    currentTruck: '',
    menusItems: {},
    currentTruck: this.props.reduxState.currentVendor || '' 
}

componentDidMount() {
    // dispatch for getting menu items
    this.props.dispatch({ type:'FETCH_DASH'})
    // this.props.dispatch({ type: 'GET_CURRENT'})
    console.log(this.props.reduxState)
    console.log(this.state)
}

componentDidUpdate() {
    
}

favoriteItem = (event, thisid) => {
    event.preventDefault() 
    console.log(this.props.reduxState.menuItem)
    // this.props.reduxState.
    this.setState({ 
        menu_id: this.props.reduxState.menuItem.user_id,
        user_name: this.props.reduxState.user.username
    })

    if (!this.state.favorite) {
        this.props.dispatch({ type:'ADD_FAVORITE', payload: this.state})
    } else {
        this.props.dispatch({ type:'REMOVE_FAVORITE', payload:{id:thisid}})
    }
    this.setState({ favorite: !this.state.favorite})
    console.log(this.state)
    console.log(this.props.reduxState)
}


    render() {

        return (
            <div>
            <Favorite onClick={this.favoriteItem} />

                {this.state.favorite === true ?  
                <h2>Your favorite truck </h2> : <div></div>}

                {/* {this.props.reduxState.current.currentVendor != undefined ? 
                <>
                <div className="title">
                <span>
                {this.props.reduxState.current.currentVendor} Menu 
                </span>
                </div> */}

{/* 
                {this.props.item.map(item => {
                    if (item.vendor_name === this.props.reduxState.current.currentVendor) {
                        return (

            <Card className>
                <CardActionArea>
                    <CardMedia
                     
                    //   image="/static/images/cards/contemplative-reptile.jpg"
                    title={item.item}
                    />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                         {item.item}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          <div>${item.price} </div>
                          <div> {item.description} </div>
                        </Typography>
                      </CardContent>
                </CardActionArea>
                 
            </Card>
                )
                }
            })}
            </>
            : */}
            <>
                <div className="title" align="center">
                <span className= "title2">
                {this.props.reduxState.current} Menu 
                </span>
                </div>


                {this.props.item.map(item => {
                    if (item.vendor_name === this.props.reduxState.current) {
                        return (

                <div className= "menuItem" align="center" >                 
                    <Card className="card" align="center">
                        <CardActionArea>
                            <CardMedia
                            title={item.item}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h4" component="h2">
                                {item.item}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                <div>$ {item.price} </div>
                                <div>{item.description} </div>
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        
                    </Card>
                </div>  
                )
                }
            })}
            </>
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



