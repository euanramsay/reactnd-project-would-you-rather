import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Vote from './Vote'


class QuestionPage extends Component {
  render () {
    const { question_id } = this.props.match.params
    return (
      <Fragment>
        <h3 className='center'>Poll</h3>
        <Vote id={question_id} />
      </Fragment>
    )
  }
}

function mapStateToProps ({ users, authedUser }) {
  return {
    userIds: Object.keys(users),
    authedUser
  }
}

export default connect(mapStateToProps)(QuestionPage)