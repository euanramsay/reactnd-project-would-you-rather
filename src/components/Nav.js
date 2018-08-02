import React, { Component, Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { AppBar, Toolbar, Button, Avatar, Typography } from '@material-ui/core'
import { setAuthedUser } from '../actions/authedUser'

class Nav extends Component {
  handleSignOut = () => {
    const { dispatch } = this.props
    dispatch(setAuthedUser(null))
  }
  render () {
    const { authedUser, user } = this.props
    return (
      <AppBar position='static'>
        <Toolbar>
          <Button color='inherit'>
            <NavLink to='/' exact activeClassName='active'>
              Home
            </NavLink>
          </Button>
          <Button color='inherit'>
            <NavLink to='/add' activeClassName='active'>
              New Question
            </NavLink>
          </Button>
          <Button color='inherit'>
            <NavLink to='/leaderboard' activeClassName='active'>
              Leaderboard
            </NavLink>
          </Button>
          {authedUser
            ? <Fragment>
              <Avatar className='avatar' alt={user.name} src={user.avatarURL} />
              <Typography>{user.name}</Typography>
            </Fragment>
            : null}
          {authedUser
            ? <Button className='sign-out' color='inherit' onClick={() => this.handleSignOut()}>
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

function mapStateToProps ({ authedUser, users }) {
  return {
    authedUser,
    user: users[authedUser]
  }
}

export default connect(mapStateToProps)(Nav)
