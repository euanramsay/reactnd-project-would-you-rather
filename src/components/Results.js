import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, CardContent, Typography, Avatar } from '@material-ui/core'

class Vote extends Component {
  render () {
    const { question, authedUser } = this.props
    const { name, avatarURL } = this.props.user
    const { optionOne, optionTwo } = question
    const votesOptionOne = optionOne.votes.length
    const votesOptionTwo = optionTwo.votes.length
    const totalVotes = votesOptionOne + votesOptionTwo
    return (
      <Card className='card'>
        <Typography>Asked by {name}</Typography>
        <Avatar className='large-avatar' alt={name} src={avatarURL} />
        <CardContent>
          <Card className='small-card'>
            {optionOne.text}
            <CardContent>
              <Typography>
                {votesOptionOne} out of {totalVotes} votes
              </Typography>
              {optionOne.votes.includes(authedUser)
                ? <Card className='small-card'>
                  <Typography color='secondary'>Your answer!</Typography>
                </Card>
                : null}
            </CardContent>
          </Card>
          <Card className='small-card'>
            {optionTwo.text}
            <CardContent>
              <Typography>
                {votesOptionTwo} out of {totalVotes} votes
              </Typography>
              {optionTwo.votes.includes(authedUser)
                ? <Card className='small-card'>
                  <Typography color='secondary'>Your answer!</Typography>
                </Card>
                : null}
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    )
  }
}

function mapStateToProps ({ users, questions, authedUser }, { id }) {
  const question = questions[id]
  const user = users[question.author]
  return {
    question,
    user,
    authedUser
  }
}

export default connect(mapStateToProps)(Vote)
