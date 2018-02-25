import React, { Component } from 'react'
import Header from '../components/fv-header'
import Navbar from '../components/fv-navbar'
import Recent from '../components/fv-recent'

class HomeView extends Component {
  render() {
    return (
      <div>
        <Header />
        <Navbar />
        <Recent />
      </div>
    )
  }
}

export default HomeView
