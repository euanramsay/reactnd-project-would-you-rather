import React, { Component, Fragment } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
import Nav from './Nav'
import Dashboard from './Dashboard'
import SignIn from './SignIn'
import NewQuestion from './NewQuestion'
import Leaderboard from './Leaderboard'
import PrivateRoute from './PrivateRoute'
import QuestionPage from './QuestionPage'
import { handleInitialData } from '../actions/shared'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    const { loading } = this.props
    return (
        <Fragment>
          <LoadingBar />
          <div className='container'>
          { loading ? null :
          <Fragment>
            <Nav />
            <Switch>
              <Route exact path='/' component={Dashboard} />
              <PrivateRoute path='/add' component={NewQuestion} />
              <PrivateRoute path='/leaderboard' component={Leaderboard} />
              <PrivateRoute path='/questions/:question_id' component={QuestionPage} />
              <Route path='/signin' component={SignIn} />
            </Switch>
          </Fragment>
          }
          </div>
        </Fragment>
    )
  }
}

function mapStateToProps ({ users }) {
  return {
    loading: users === null
  }
}

export default withRouter(connect(mapStateToProps)(App))