import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'
import SignIn from './SignIn'

class Dashboard extends Component {

  render() {

    const { authedUser, questionIds } = this.props

    return (
      <div>
        {
          authedUser
          ? <div>
              <h3 className='center'>Questions</h3>
              <ul className='dashboard-list'>
                {questionIds.map((id) => (
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

function mapStateToProps ({ questions, authedUser }) {
  return {
    questionIds: Object.keys(questions)
      .sort((a,b) => questions[b].timestamp - questions[a].timestamp),
    authedUser
  }
}

export default connect(mapStateToProps)(Dashboard)