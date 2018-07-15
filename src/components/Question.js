import React, { Component } from 'react'
import { connect } from 'react-redux'

class Question extends Component {
  render() {
    const { question, user } = this.props
    
    if (question === null) {
      return <p>This Question doesn't exist</p>
    }

    const {
      name, avatarURL
    } = user

    const {
      optionOne, optionTwo
    } = question

    return (
      <div className='question'>
        <img
          src={avatarURL}
          alt={`Avatar of ${name}`}
          className='avatar'
        />
        <p>{optionOne.text}</p>
        <h3> OR </h3>
        <p>{optionTwo.text}</p>
      </div>
    )
  }
}

function mapStateToProps ({ authedUser, users, questions }, { id }) {
  const question = questions[id]
  const user = users[question.author]

  return {
    authedUser,
    question,
    user: user,
  }
}

export default connect(mapStateToProps)(Question)