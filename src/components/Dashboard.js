import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Question from './Question'
import SignIn from './SignIn'

class Dashboard extends Component {
  render () {
    const { authedUser, questionIds, users } = this.props
    const answeredQuestions = authedUser
      ? Object.keys(users[authedUser]['answers'])
      : []
    const unansweredQuestions = questionIds.filter(
      id => !answeredQuestions.find(aId => id === aId)
    )

    return (
      <div>
        {authedUser
          ? <Fragment>
            <div>
              {unansweredQuestions !== []
                  ? <h3 className='center'>Uanswered Questions</h3>
                  : null}
              <ul className='dashboard-list'>
                {unansweredQuestions.map(id => (
                  <li key={id}>
                    <Question id={id} />
                  </li>
                  ))}
              </ul>
            </div>
            <div>
              <h3 className='center'>Answered Questions</h3>
              <ul className='dashboard-list'>
                {answeredQuestions.map(id => (
                  <li key={id}>
                    <Question id={id} />
                  </li>
                  ))}
              </ul>
            </div>
          </Fragment>
          : <div>
            <SignIn />
          </div>}
      </div>
    )
  }
}

function mapStateToProps ({ questions, authedUser, users }) {
  return {
    questionIds: Object.keys(questions).sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    ),
    authedUser,
    users
  }
}

export default connect(mapStateToProps)(Dashboard)
