import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import SwipeableViews from 'react-swipeable-views'
import { AppBar, Tabs, Tab, Typography } from '@material-ui/core'
import Question from './Question'
import SignIn from './SignIn'

class Dashboard extends Component {
  state = {
    value: 0
  }

  handleChange = (event, value) => {
    this.setState({ value })
  }

  handleChangeIndex = index => {
    this.setState({ value: index })
  }
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
            <AppBar position='static' color='default'>
              <Tabs
                value={this.state.value}
                onChange={this.handleChange}
                indicatorColor='primary'
                textColor='primary'
                fullWidth
                >
                <Tab label='Unanswered Questions' />
                <Tab label='Answered Questions' />
              </Tabs>
              <SwipeableViews
                index={this.state.value}
                onChangeIndex={this.handleChangeIndex}
                >
                <Typography>
                  <div>
                    <ul>
                      {unansweredQuestions.map(id => (
                        <li key={id}>
                          <Question id={id} />
                        </li>
                        ))}
                    </ul>
                  </div>
                </Typography>
                <Typography>
                  <div>
                    <ul>
                      {answeredQuestions.map(id => (
                        <li key={id}>
                          <Question id={id} />
                        </li>
                        ))}
                    </ul>
                  </div>
                </Typography>
              </SwipeableViews>
            </AppBar>
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
