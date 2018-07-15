import React, { Component, Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
import { handleInitialData } from '../actions/shared'
import Nav from './Nav'
import Dashboard from './Dashboard'
import SignIn from './SignIn'
import NewQuestion from './NewQuestion'
import Leaderboard from './Leaderboard'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
        <Fragment>
          <LoadingBar />
          <div className='container'>
            {this.props.loading === true
              ? null
              : <Dashboard />
            }
            {/* <Nav />
              <Switch>
                <Route exact path='/' component={Dashboard} />
                <Route path='/signIn' component={SignIn} />
                <Route exact path='/new' component={NewQuestion} />
                <Route exact path='/leaderboard' component={Leaderboard} />
                <Route exact path='/signin' component={SignIn} />
              </Switch> */}
          </div>
        </Fragment>
    )
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)