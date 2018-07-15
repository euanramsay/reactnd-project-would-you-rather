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
              <Route path='/signIn' component={SignIn} />
              <Route path='/new' component={NewQuestion} />
              <Route path='/leaderboard' component={Leaderboard} />
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

export default connect(mapStateToProps)(App)