import React, { Component } from 'react'
import { connect } from 'react-redux'
import { List, Card, CardHeader } from '@material-ui/core'
import User from './User'
import { setAuthedUser } from '../actions/authedUser'

class SignIn extends Component {
  handleLogin = id => {
    const { dispatch } = this.props
    dispatch(setAuthedUser(id))
  }
  render () {
    const { userIds } = this.props
    return (
      <Card className='card'>
        <CardHeader title='Please Sign In' />
        <List>
          {userIds.map(id => (
            <div key={id} onClick={() => this.handleLogin(id)}>
              <User id={id} />
            </div>
          ))}
        </List>
      </Card>
    )
  }
}

function mapStateToProps ({ users }) {
  return {
    userIds: Object.keys(users)
  }
}

export default connect(mapStateToProps)(SignIn)
