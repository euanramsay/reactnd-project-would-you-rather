import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Typography,
  Card,
  CardContent
} from '../../node_modules/@material-ui/core'

class Score extends Component {
  render () {
    const { user } = this.props
    const { answers, questions } = user
    const questionsAnswered = Object.keys(answers).length
    const questionsAsked = questions.length
    return (
      <Card>
        <CardContent>
          <Typography>Questions Answered: {questionsAnswered}</Typography>
          <Typography>Questions Asked: {questionsAsked}</Typography>
          <Typography variant='display3'>
            Score: {questionsAnswered + questionsAsked}
          </Typography>
        </CardContent>
      </Card>
    )
  }
}

function mapStateToProps ({ users }, { id }) {
  const user = users[id]
  return {
    user
  }
}
export default connect(mapStateToProps)(Score)
