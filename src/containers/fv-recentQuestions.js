import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { selectQuestion, recentQuestions } from '../actions/fv-actionIndex'

class Recent extends Component {
  componentWillMount(){
    // Gets the recent question data from collection and it flows into state
    // through the reducer. Data then mapped from state to props below.
    this.props.recentQuestions()
  }
  renderQuestions() {
    if (this.props.questions != null) {
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
    recentQuestions: recentQuestions,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Recent)
