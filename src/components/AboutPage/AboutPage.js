import React, { Component } from 'react';
import { connect } from 'react-redux'

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

export class AboutPage extends Component {
    render() {
      return (


    <div>
    This be the about page !
    </div>

  )
}
 
}

  export default AboutPage
