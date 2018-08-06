import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import {
  Typography,
  CardContent
} from '../../node_modules/@material-ui/core'

class Score extends Component {
  render () {
    const { user } = this.props
    const { answers, questions } = user
    const questionsAnswered = Object.keys(answers).length
    const questionsAsked = questions.length
    return (
      <Fragment>
        <CardContent>
          <Typography>Questions Answered: {questionsAnswered}</Typography>
          <Typography>Questions Asked: {questionsAsked}</Typography>
          <Typography variant='display3'>
            Score: {questionsAnswered + questionsAsked}
          </Typography>
        </CardContent>
      </Fragment>
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
