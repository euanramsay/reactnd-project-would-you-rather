import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
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

class Question extends Component {
  render () {
    const { question, user } = this.props
    const { optionOne } = question
    const link = `/questions/${question.id}`
    return (
      <Card className='card'>
        <User id={user.id} />
        <CardHeader title='Would you rather?' />
        <CardContent>
          <Typography>...{optionOne.text}...</Typography>
          <CardActions>
            <Button size='small' color='primary'>
              <NavLink to={link} exact activeClassName='active'>
                View Poll
              </NavLink>
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

export default connect(mapStateToProps)(Question)
