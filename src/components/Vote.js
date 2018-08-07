import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Card,
  CardHeader,
  CardActions,
  CardContent,
  Button,
  Typography
} from '@material-ui/core'
import User from './User'
import { handleAnswerQuestion } from '../actions/shared'

class Vote extends Component {
  handleOptionOne = () => {
    const { dispatch, question } = this.props
    dispatch(handleAnswerQuestion(question.id, 'optionOne'))
  }
  handleOptionTwo = () => {
    const { dispatch, question } = this.props
    dispatch(handleAnswerQuestion(question.id, 'optionTwo'))
  }
  render () {
    const { question, user } = this.props
    const { optionOne, optionTwo } = question
    return (
      <Card className='card'>
        <User id={user.id} />
        <CardHeader title='Would you rather?' />
        <CardContent>
          <CardActions>
            <Button variant='contained' onClick={() => this.handleOptionOne()}>
              {optionOne.text}
            </Button>
            <Typography variant='headline'>OR</Typography>
            <Button variant='contained' onClick={() => this.handleOptionTwo()}>
              {optionTwo.text}
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    )
  }
}

function mapStateToProps ({ users, questions }, { id }) {
  const question = questions[id]
  const user = users[question.author]
  return {
    question,
    user
  }
}

export default connect(mapStateToProps)(Vote)
