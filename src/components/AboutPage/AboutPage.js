import React, { Component } from 'react';


// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

export class AboutPage extends Component {
    render() {
      return (


    <div>
    This applications purpose is for users and vedors. 
    Users will be able to view food trucks from google maps, able to click onto
    a truck and will display the menu items that they have readily available

    A vendor will be able to post their location onto the map, have a dashboard
    they can make updates on regularly and also have another view to display 
    their menu items for users. 
    </div>

  )
}
 
}

  export default AboutPage
