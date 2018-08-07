import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Vote from './Vote'
import Results from './Results'

class QuestionPage extends Component {
  render () {
    const { users, authedUser } = this.props
    const { question_id } = this.props.match.params
    const answered = Object.keys(users[authedUser]['answers']).includes(
      question_id
    )
    return (
      <Fragment>
        <h3 className='center'>Poll</h3>
        {answered ? <Results id={question_id} /> : <Vote id={question_id} />}

      </Fragment>
    )
  }
}

function mapStateToProps ({ users, authedUser }) {
  return {
    users,
    authedUser
  }
}

export default connect(mapStateToProps)(QuestionPage)
