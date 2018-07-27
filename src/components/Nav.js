import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { AppBar, Toolbar, Button } from '@material-ui/core'
import User from './User'
import { setAuthedUser } from '../actions/authedUser'

class Nav extends Component {
  handleSignOut = () => {
    const { dispatch } = this.props
    dispatch(setAuthedUser(null))
  }

  render () {
    const { authedUser } = this.props

    return (
      <AppBar position='static'>
        <Toolbar>
          <Button color='inherit'>
            <NavLink to='/' exact activeClassName='active'>
              Home
            </NavLink>
          </Button>
          <Button color='inherit'>
            <NavLink to='/new' activeClassName='active'>
              New Question
            </NavLink>
          </Button>
          <Button color='inherit'>
            <NavLink to='/leaderboard' activeClassName='active'>
              Leaderboard
            </NavLink>
          </Button>
          {authedUser ? <User id={authedUser} /> : null}
          {authedUser
            ? <Button color='inherit' onClick={() => this.handleSignOut()}>
              <NavLink to='/' activeClassName='active'>
                  Sign Out
                </NavLink>
            </Button>
            : null}
        </Toolbar>
      </AppBar>
    )
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    authedUser: authedUser
  }
}

export default connect(mapStateToProps)(Nav)
