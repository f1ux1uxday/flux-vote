import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

class questionView extends Component {
  voteHandler(oid){
    let qid = this.props.activeQ.qid
    axios.post(`/submitvote/${qid}/${oid}`)
  }

  getOptions() {
    return this.props.activeQ.options.map(option => {
      // Attach add-vote click handler to each option,
      // should be able to make axios.post() here and
      // avoid state altogether
      return (
        // TODO: delete documents in questionBank and replace with updated
        // data structure. Option.choice here will need to be option.choice.name
        // When adding click handler, pass in option.oid
        <li
          key={`${this.props.activeQ.qid}-${option.oid}`}
          onClick={() => this.voteHandler(option.oid)}>
          {option.choice.name}
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
