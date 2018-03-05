import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { deselectQuestion } from '../actions/fv-actionIndex'

class Navbar extends Component {
  render() {
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    deselectQuestion: deselectQuestion,
  }, dispatch)
}

// If not using mapStateToProps, pass null in its place
export default connect(null, mapDispatchToProps)(Navbar)