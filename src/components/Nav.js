import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import User from './User'
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

class Nav extends Component {

  render() {
    const { authedUser } = this.props
    
    return (
        
        <AppBar position="static">
        <Toolbar>
            <Button color="inherit">
                <NavLink to='/' exact activeClassName='active'>
                    Home
                </NavLink>
            </Button>
            <Button color="inherit">
                <NavLink to='/new' activeClassName='active'>
                    New Question
                </NavLink>
            </Button>
            <Button color="inherit">
                <NavLink to='/leaderboard' activeClassName='active'>
                    Leaderboard
                </NavLink>
            </Button>
            { authedUser 
                ? <User id={authedUser}/>
                : null } 
            { authedUser 
            ? <Button color="inherit">
                <NavLink to='/' activeClassName='active' >
                    Sign Out
                </NavLink>
            </Button>
            : null } 
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

export default withRouter(connect(mapStateToProps)(Nav))