import React, { Component } from 'react'
import { connect } from 'react-redux'

class Recent extends Component {
  renderQuestions() {
    return this.props.questions.map(question => {
      return (
        <li
          key={question.title}>
          {question.title}
        </li>
      )
    })
  }

  render() {
    return (
      <div className='recent-polls'>
        <h5> -Newest Polls- </h5>
        <ul>
          {this.renderQuestions()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    questions: state.questions,
  }
}

export default connect(mapStateToProps)(Recent)
