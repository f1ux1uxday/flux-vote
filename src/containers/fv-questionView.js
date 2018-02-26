import React, { Component } from 'react'
import { connect } from 'react-redux'

class questionView extends Component {
  getOptions() {
    return this.props.activeQ.options.map(option => {
      return (
        <li
          key={option.choice}>
          {option.choice}
        </li>
      )
    })
  }

  render() {
    return (
      <div>
        <h1>{this.props.activeQ.title}</h1>
        <ul>{this.getOptions()}</ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    activeQ: state.activeQ,
  }
}

export default connect(mapStateToProps)(questionView)
