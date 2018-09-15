import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { deselectQuestion } from '../actions/fv-actionIndex'

class Navbar extends Component {
  // Add 'new' nav element for creating new question
  // Render only if loggedIn -- use if/then to render
  // conditionally one navbar for guests and one for
  // registered users.
  render() {
    if (this.props.user == true) {
      return (
        <div className='nav-bar'>
          <nav
            onClick={() => this.props.deselectQuestion()}>
            home
          </nav>
          <nav> random </nav>
          <nav> new </nav>
        </div>
      )
    } else {
      return (
        <div className='nav-bar'>
          <nav
            onClick={() => this.props.deselectQuestion()}>
            home
          </nav>
          <nav> random </nav>
          <nav> login </nav>
        </div>
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    deselectQuestion: deselectQuestion,
  }, dispatch)
}

// If not using mapStateToProps, pass null in its place
export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
