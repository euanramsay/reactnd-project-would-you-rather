import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'
import SignIn from './SignIn'

class Dashboard extends Component {

  render() {

    const { authedUser, questionIds, users } = this.props

    return (
      <div>
        {
          authedUser
          ? <div>
              <h3 className='center'>Questions</h3>
              <ul className='dashboard-list'>
                {Object.keys(users[authedUser]["answers"]).map((id) => (
                  <li key={id}>
                    <Question id={id}/>
                  </li>
                ))}
                </ul>
            </div>
          : <div>
              <SignIn />
            </div>
          }
      </div>
    )
  }
}

function mapStateToProps ({ questions, authedUser, users }) {
  return {
    questionIds: Object.keys(questions)
      .sort((a,b) => questions[b].timestamp - questions[a].timestamp),
    authedUser,
    users
  }
}

export default connect(mapStateToProps)(Dashboard)