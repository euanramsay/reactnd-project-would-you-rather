import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';

class Nav extends Component {

  render() {
    const { authedUser, userIds } = this.props
    
    return (
        <nav className='nav'>
            <ul>
                <li>
                    <NavLink to='/' exact activeClassName='active'>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/new' activeClassName='active'>
                        New Question
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/leaderboard' activeClassName='active'>
                        Leaderboard
                    </NavLink>
                </li>
                <li className="figure">
                  {/* <figure>
                    <img
                      src={userIds[authedUser].avatarURL}
                      alt={`Avatar of ${authedUser}`}
                      className='avatar'
                    />
                  <figcaption>Welcome {authedUser}</figcaption>
                  </figure> */}
                </li>
                <li>
                    <NavLink to='/signin' activeClassName='active'>
                        Login
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
  }
}

function mapStateToProps ({ authedUser, users }) {
  return {
    authedUser: authedUser,
    userIds: users
  }
}

export default withRouter(connect(mapStateToProps)(Nav))