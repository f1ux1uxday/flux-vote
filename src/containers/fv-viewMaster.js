import React, { Component } from 'react'
import { connect } from 'react-redux'

import Header from '../components/fv-header'
import Navbar from '../components/fv-navbar'
import Recent from './fv-recentQuestions'
import QuestionView from './fv-questionView'

class ViewMaster extends Component {
  render() {
    if (this.props.activeQ == null) {
      return (
        <div>
          <Header />
          <Navbar />
          <Recent />
        </div>
      )
    } else {
      return (
        <div>
          <Navbar />
          <QuestionView />

        </div>
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    activeQ: state.activeQ,
  }
}

export default connect(mapStateToProps)(ViewMaster)
