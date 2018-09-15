import React, { Component } from 'react'
import { connect } from 'react-redux'

import Header from '../components/fv-header'
import Navbar from '../containers/fv-navbar'
import Recent from './fv-recentQuestions'
import QuestionView from './fv-questionView'

class ViewMaster extends Component {
  render() {
    if (this.props.activeQ == null) {
      return (
        <div className='container'>
          <Navbar />
          <Header />
          <Recent />
        </div>
      )
      // Create another view for question creation.
      // if (this.props.createNew == 'yes') {
      //  render (
      //    <Header />
      //    <Navbar />
      //    <Create />
      //  )
      // }
      //
    } else {
      return (
        <div>
          <Navbar />
          <Header />
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
