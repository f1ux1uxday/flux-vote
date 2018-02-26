import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { selectQuestion } from '../actions/fv-actionIndex'

class Recent extends Component {
  renderQuestions() {
    return this.props.questions.map(question => {
      return (
        <li
          key={question.title}
          onClick={() => this.props.selectQuestion(question)}>
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    selectQuestion: selectQuestion,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Recent)
